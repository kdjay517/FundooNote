import React, {useState, useContext} from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from './Header';
import Bottom from './Bottom';
import Notes from './Notes';
import FireStoreDatabase from '../../Services/Data/FireStoreDatabase';
import {useRoute} from '@react-navigation/native';
const NotesScreen = ({navigation}) => {
  const noteData = useRoute().params;

  const {writingNoteToFireStore, updateNote} = FireStoreDatabase();
  const [title, setTitle] = useState(noteData?.Title || '');
  const [note, setNote] = useState(noteData?.Note || '');
  const [id, setId] = useState(noteData?.key || '');
  const [archive, setArchive] = useState(noteData?.Archive || false);
  const [del, setDel] = useState(noteData?.Delete || false);
  const [pin, setPin] = useState(noteData?.Pin || false);
  const [visible, setVisible] = useState(false);

  const states = {
    title,
    note,
    setTitle,
    setNote,
    pin,
    setPin,
    archive,
    setArchive,
    del,
    setDel,
  };

  const onBackPress = async () => {
    if (id) {
      await updateNote(id, title, note, pin, archive, del);
    } else {
      await writingNoteToFireStore(title, note, pin, archive, del);
      setNote('');
      setTitle('');
    }
    navigation.navigate('DashBoardScreen');
  };

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  const handleDeleteButton = async () => {
    await updateNote(id, title, note, pin, archive, true);
    toggleBottomNavigationView();
    navigation.navigate('DashBoardScreen');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Header states={states} onBackPress={onBackPress} />
      </View>
      <View style={{flex: 1, margin: 10}}>
        <Notes {...states} />
      </View>
      <Bottom
        navigation={navigation}
        visible={visible}
        setVisible={setVisible}
        handleDeleteButton={handleDeleteButton}
        toggleBottomNavigationView={toggleBottomNavigationView}
      />
    </SafeAreaView>
  );
};

export default NotesScreen;
