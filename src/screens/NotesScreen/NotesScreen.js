import React, {useState, useContext} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Header from './Header';
import Bottom from './Bottom';
import Notes from './Notes';
import Chip from '../../components/Chip';
import FireStoreDatabase from '../../Services/Data/FireStoreDatabase';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
const NotesScreen = ({navigation}) => {
  const noteData = useRoute().params;
  const {labelData} = useSelector(state => state.userReducer);
  const {writingNoteToFireStore, updateNote} = FireStoreDatabase();
  const labelKeys = noteData?.labelKeys || noteData?.LabelKey;
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
      await updateNote(id, title, note, pin, archive, del, labelKeys);
    } else {
      await writingNoteToFireStore(title, note, pin, archive, del, labelKeys);
      setNote('');
      setTitle('');
    }
    navigation.goBack();
  };

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  const handleDeleteButton = async () => {
    await updateNote(id, title, note, pin, archive, true);
    toggleBottomNavigationView();
    navigation.navigate('DashBoardScreen');
  };

  let labels = labelData.filter(label => {
    for (let i = 0; i < labelKeys.length; i++) {
      if (label.key === labelKeys[i]) {
        return true;
      }
    }
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Header states={states} onBackPress={onBackPress} />
      </View>
      <View style={{flex: 1, margin: 10}}>
        <Notes {...states} />
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {labelKeys?.length ? <Chip labels={labels} /> : null}
        </View>
      </View>
      <Bottom
        navigation={navigation}
        visible={visible}
        labelKeys={labelKeys}
        setVisible={setVisible}
        handleDeleteButton={handleDeleteButton}
        toggleBottomNavigationView={toggleBottomNavigationView}
      />
    </SafeAreaView>
  );
};

export default NotesScreen;
