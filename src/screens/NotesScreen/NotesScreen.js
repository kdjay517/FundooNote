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
import LocalNotification from '../../Services/Notifications/LocalNotification';
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
  const [reminder, setReminder] = useState('');
  const [alarm, setAlarm] = useState(noteData?.Reminder || '');
  const [edit, setEdit] = useState(false);

  console.log(new Date('2023-03-30 9:16'));
  console.log(alarm);
  console.log(new Date(alarm));
  console.log(new Date(moment(alarm, 'YYYY-MM-DD hh:mm')));

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
    reminder,
    setReminder,
  };

  const onBackPress = async () => {
    if (id) {
      await updateNote(id, title, note, pin, archive, del, labelKeys, alarm);
    } else {
      await writingNoteToFireStore(
        title,
        note,
        pin,
        archive,
        del,
        labelKeys,
        alarm,
      );
      setNote('');
      setTitle('');
    }
    if (alarm !== null) {
      // if (alarm > moment().format('YYYY-MM-DD hh:mm')) {
      LocalNotification(title, note, alarm);
      // }
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
          {alarm?.length ? (
            <ReminderChip
              alarm={alarm}
              showModal={showModal}
              hideModal={hideModal}
              setEdit={setEdit}
              edit={edit}
            />
          ) : null}
          {labelKeys?.length ? <Chip labels={labels} /> : null}
        </View>
        <AddReminder
          modalVisible={modalVisible}
          hideModal={hideModal}
          showRepeaterModal={showRepeaterModal}
          handleReminderSheet={handleReminderSheet}
          setReminder={setReminder}
          setAlarm={setAlarm}
          alarm={alarm}
          setEdit={setEdit}
          edit={edit}
          id={id}
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
        states={states}
        setAlarm={setAlarm}
        id={id}
      />
    </SafeAreaView>
  );
};

export default NotesScreen;
