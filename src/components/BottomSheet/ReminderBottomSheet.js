import React, {useState, useEffect, useReducer, useCallback} from 'react';
import {IconButton} from 'react-native-paper';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import GetTime from '../../components/GetTime';
import {BottomSheet} from 'react-native-btr';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import moment from 'moment';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LocalNotification from '../../Services/Notifications/LocalNotification';
const ReminderBottomSheet = ({
  reminderVisible,
  handleReminderSheet,
  showModal,
  setReminder,
  states,
  id,
}) => {
  const [fullDay, setFullDay] = useState('');
  const [shortDay, setShortDay] = useState('');

  const handleTodayTime = () => {
    setReminder('Today, ' + moment().format('hh:mm a'));
    handleReminderSheet();
    LocalNotification(states.title, states.note);
  };

  const handleTomorrowTime = useCallback(() => {
    dispatch('Tomorrow, 8.00 a.m.');
    handleReminderSheet();
  });

  const handleNextTime = useCallback(() => {
    dispatch(moment().format('ddd') + ', ' + moment().format('hh:mm a'));
    handleReminderSheet();
  });

  const handleModalView = () => {
    handleReminderSheet();
    showModal();
  };

  useEffect(() => {
    var fDay, sDay;
    var day = new Date().getDay();

    if (day === 1) {
      fDay = 'Monday';
      sDay = 'Mon';
    }
    if (day === 2) {
      fDay = 'Tuesday';
      sDay = 'Tue';
    }
    if (day === 3) {
      fDay = 'Wednsday';
      sDay = 'Wed';
    }
    if (day === 4) {
      fDay = 'Thursday';
      sDay = 'Thu';
    }
    if (day === 5) {
      fDay = 'Friday';
      sDay = 'Fri';
    }
    if (day === 6) {
      fDay = 'Saturday';
      sDay = 'Sat';
    }
    if (day === 7) {
      fDay = 'Sunday';
      sDay = 'Sun';
    }
    setFullDay(fDay);
    setShortDay(sDay);
  }, []);

  return (
    <BottomSheet
      visible={reminderVisible}
      onBackButtonPress={handleReminderSheet}
      onBackdropPress={handleReminderSheet}>
      <View style={styles.bottomContainer}>
        <View style={styles.firstView}>
          <TouchableOpacity onPress={handleTodayTime}>
            <View style={styles.deleteIconView}>
              <MaterialIcons
                name="clock-time-four-outline"
                color="black"
                size={24}
              />
              <Text style={styles.text}>Later today</Text>
              <Text style={styles.todaytime}>6.00 p.m.</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.secondView}>
          <TouchableOpacity onPress={handleTomorrowTime}>
            <View style={styles.deleteIconView}>
              <MaterialIcons
                name="clock-time-four-outline"
                size={24}
                color="black"
              />
              <Text style={styles.text}>Tomorrow morning</Text>
              <Text style={styles.tomorrowtime}>8.00 a.m.</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.secondView}>
          <TouchableOpacity onPress={handleNextTime}>
            <View style={styles.deleteIconView}>
              <MaterialIcons
                name="clock-time-four-outline"
                size={24}
                color="black"
              />
              <Text style={styles.text}>{fullDay} morning</Text>
              <Text style={styles.time}>{shortDay} 8.00 a.m.</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.secondView}>
          <TouchableOpacity onPress={handleModalView}>
            <View style={styles.deleteIconView}>
              <MaterialIcons
                name="clock-time-four-outline"
                size={24}
                color="black"
              />
              <Text style={styles.text}>Choose a date {'&'} time </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

export default ReminderBottomSheet;

const styles = StyleSheet.create({
  container: {
    padding: heightPercentage('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: heightPercentage('35%'),
    flexDirection: 'column',
  },
  firstView: {
    flexDirection: 'row',
    flex: 1,
    marginTop: heightPercentage('2%'),
  },
  secondView: {
    flexDirection: 'row',
    flex: 1,
    marginTop: heightPercentage('-4%'),
  },
  deleteIconView: {
    flex: 1,
    margin: widthPercentage('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelMargin: {
    backgroundColor: '#fff',
    width: '100%',
    height: heightPercentage('2%'),
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    color: 'black',
    paddingLeft: widthPercentage('8%'),
  },
  todaytime: {
    fontSize: 18,
    color: 'black',
    paddingLeft: widthPercentage('35%'),
  },
  tomorrowtime: {
    fontSize: 18,
    color: 'black',
    paddingLeft: widthPercentage('20%'),
  },
  time: {
    fontSize: 18,
    color: 'black',
    paddingLeft: widthPercentage('15%'),
  },
});
