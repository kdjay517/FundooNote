import React, {useState, useContext} from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from './Header';
import Bottom from './Bottom';
import Notes from './Notes';
import {firebase} from '@react-native-firebase/firestore';
import {AuthContext} from '../../navigation/AuthContext';
import FetchingData from '../../Services/Data/FetchingData';

const ref = firebase.firestore().collection('UserNotes');

const NotesScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [visible, setVisible] = useState(false);

  const states = {
    title,
    note,
    setTitle,
    setNote,
    visible,
    setVisible,
  };

  const {user} = useContext(AuthContext);

  const writingNoteToFireStore = async () => {
    try {
      await ref.doc(user).collection('Notes').add({
        Title: title,
        Note: note,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onBackPress = () => {
    writingNoteToFireStore();

    if (visible) {
      setTitle('');
      setNote('');
      console.log('condition log', visible);
      navigation.navigate('DashBoardScreen');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Header onBackPress={onBackPress} />
      </View>
      <View style={{flex: 1, margin: 10}}>
        <Notes {...states} />
      </View>
      <Bottom />
    </SafeAreaView>
  );
};

export default NotesScreen;
