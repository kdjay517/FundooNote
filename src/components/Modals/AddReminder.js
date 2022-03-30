import React, {useState, useCallback, useReducer} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectDay from './SelectDay';
import SelectTime from './SelectTime';
import moment from 'moment';
import CancelNotification from '../../Services/Notifications/CancelNotification';
const AddReminder = ({
  modalVisible,
  hideModal,
  showRepeaterModal,
  setReminder,
  setAlarm,
  alarm,
  edit,
  setEdit,
}) => {
  const containerStyle = {
    backgroundColor: 'white',
    margin: widthPercentage('8%'),
    borderRadius: widthPercentage('5%'),
  };

  const [date, setDate] = useState(moment().format('DD MMMM'));
  const [fullDate, setFullDate] = useState(moment().format('YYYY-MM-DD'));
  const [time, setTime] = useState(moment().format('HH:mm a'));
  const [alarmTime, setAlarmTime] = useState(moment().format('hh:mm'));
  const [dayModal, setDayModal] = useState(false);
  const [timeModal, setTimeModal] = useState(false);

  const handleSaveButton = () => {
    setReminder(date + ',' + time);
    setAlarm(fullDate + ' ' + alarmTime);
    hideModal();
  };

  const handleCancelButton = () => {
    hideModal();
  };

  const handleDeleteButton = id => {
    setReminder('');
    CancelNotification(id);
    setEdit(false);
    hideModal();
  };

  const showDayModal = () => {
    setDayModal(!dayModal);
  };
  const hideDayModal = () => {
    setDayModal(!dayModal);
  };

  const showTimeModal = () => {
    setTimeModal(!timeModal);
  };
  const hideTimeModal = () => {
    setTimeModal(!timeModal);
  };

  return (
    <Portal>
      <Modal
        visible={modalVisible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <View style={styles.reminderView}>
          <Text style={styles.header}>
            {edit ? 'Edit reminder' : 'Add reminder'}
          </Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.text}>Time</Text>
        </View>
        <>
          <SelectDay
            dayModal={dayModal}
            hideDayModal={hideDayModal}
            setDate={setDate}
            showDayModal={showDayModal}
            setFullDate={setFullDate}
          />
          <TouchableOpacity onPress={showDayModal}>
            <View style={styles.iconView}>
              <Text style={styles.text}>{date}</Text>
              <Icon name="menu-down" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <SelectTime
            timeModal={timeModal}
            hideTimeModal={hideTimeModal}
            setTimeModal={setTimeModal}
            setTime={setTime}
            setAlarmTime={setAlarmTime}
          />
          <TouchableOpacity onPress={showTimeModal}>
            <View style={styles.iconView}>
              <Text style={styles.text}>{time}</Text>
              <Icon name="menu-down" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={showRepeaterModal}>
            <View style={styles.iconView}>
              <Text style={styles.text}>Does not repeat</Text>
              <Icon name="menu-down" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingHorizontal: widthPercentage('4%'),
            paddingBottom: heightPercentage('2%'),
            paddingTop: heightPercentage('2%'),
            alignContent: 'center',
          }}>
          {edit ? (
            <TouchableOpacity
              style={{paddingRight: widthPercentage('2%')}}
              onPress={handleDeleteButton}>
              <Text style={{color: 'blue', fontSize: 16}}>delete</Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            style={{paddingRight: widthPercentage('2%')}}
            onPress={handleCancelButton}>
            <Text style={{color: 'blue', fontSize: 16}}>cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              borderRadius: widthPercentage('2%'),
              justifyContent: 'center',
            }}
            onPress={handleSaveButton}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                padding: widthPercentage('1%'),
                paddingHorizontal: widthPercentage('4%'),
              }}>
              save
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Portal>
  );
};

export default React.memo(AddReminder);

const styles = StyleSheet.create({
  reminderView: {
    justifyContent: 'flex-start',
    padding: widthPercentage('2%'),
    paddingLeft: widthPercentage('8%'),
    paddingTop: heightPercentage('2%'),
  },
  header: {
    fontSize: 24,
    color: 'black',
    justifyContent: 'flex-start',
  },
  time: {
    paddingLeft: widthPercentage('10%'),
    marginBottom: heightPercentage('1%'),
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingBottom: heightPercentage('1%'),
    marginTop: heightPercentage('3%'),
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  iconView: {
    paddingHorizontal: widthPercentage('5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingTop: heightPercentage('1%'),
  },
});
