import React, {useState, useReducer, useCallback} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Header from './Header';
import Bottom from './Bottom';
import Notes from './Notes';
import Chip from '../../components/Chip';
import FireStoreDatabase from '../../Services/Data/FireStoreDatabase';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AddReminder from '../../components/Modals/AddReminder';
import moment from 'moment';
import ReminderChip from '../../components/Chip/ReminderChip';
const NotesScreen = ({navigation}) => {
  const noteData = useRoute().params;
  const {labelData} = useSelector(state => state.userReducer);
  const {writingNoteToFireStore, updateNote} = FireStoreDatabase();
  const labelKeys = noteData?.labelKeys || noteData?.LabelKey || [];
  const [title, setTitle] = useState(noteData?.Title || '');
  const [note, setNote] = useState(noteData?.Note || '');
  const [id, setId] = useState(noteData?.key || '');
  const [archive, setArchive] = useState(noteData?.Archive || false);
  const [del, setDel] = useState(noteData?.Delete || false);
  const [pin, setPin] = useState(noteData?.Pin || false);
  const [visible, setVisible] = useState(false);
  const [reminderVisible, setReminderVisible] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);
  const [repeatReminder, setRepeatReminder] = useState(false);

  const [reminder, setReminder] = useState(noteData?.Reminder || '');

  const showModal = useCallback(() => {
    setmodalVisible(!modalVisible);
  }, [modalVisible]);
  const hideModal = useCallback(() => {
    setmodalVisible(!modalVisible);
  }, [modalVisible]);

  const showRepeaterModal = useCallback(() => {
    setRepeatReminder(!repeatReminder);
  }, [repeatReminder]);

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
      await updateNote(id, title, note, pin, archive, del, labelKeys, reminder);
    } else {
      await writingNoteToFireStore(
        title,
        note,
        pin,
        archive,
        del,
        labelKeys,
        reminder,
      );
      setNote('');
      setTitle('');
    }
    navigation.goBack();
  };

  const toggleBottomNavigationView = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const handleReminderSheet = useCallback(() => {
    setReminderVisible(!reminderVisible);
  }, [reminderVisible]);

  const handleDeleteButton = async () => {
    await updateNote(id, title, note, pin, archive, true);
    toggleBottomNavigationView();
    navigation.navigate('DashBoardScreen');
  };

  let labels = labelData.filter(label => labelKeys?.includes(label.key));

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Header
          states={states}
          onBackPress={onBackPress}
          navigation={navigation}
          reminderVisible={reminderVisible}
          handleDeleteButton={handleDeleteButton}
          handleReminderSheet={handleReminderSheet}
        />
      </View>
      <View style={{flex: 1, margin: 10}}>
        <Notes {...states} />
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {reminder?.length ? <ReminderChip reminder={reminder} /> : null}
          {labelKeys?.length ? <Chip labels={labels} /> : null}
        </View>
        <AddReminder
          modalVisible={modalVisible}
          hideModal={hideModal}
          showRepeaterModal={showRepeaterModal}
          handleReminderSheet={handleReminderSheet}
        />
      </View>
      <Bottom
        navigation={navigation}
        visible={visible}
        labelKeys={labelKeys}
        setVisible={setVisible}
        handleDeleteButton={handleDeleteButton}
        toggleBottomNavigationView={toggleBottomNavigationView}
        handleReminderSheet={handleReminderSheet}
        reminderVisible={reminderVisible}
        modalVisible={modalVisible}
        showModal={showModal}
        hideModal={hideModal}
        setReminder={setReminder}
        setReminerVisible={setReminderVisible}
      />
    </SafeAreaView>
  );
};

export default NotesScreen;
