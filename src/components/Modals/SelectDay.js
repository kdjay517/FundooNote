import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from './DatePicker';
import moment from 'moment';

const SelectDay = ({
  dayModal,
  hideDayModal,
  setDate,
  showDayModal,
  setFullDay,
  setFullDate,
}) => {
  const [visible, setVisible] = React.useState(false);

  const handleTodayDate = useCallback(() => {
    setDate(moment().format('DD MMMM'));
    setFullDate(moment().format('YYYY-MM-DD'));
    hideDayModal();
  });

  const handleTomorrowDate = useCallback(() => {
    setDate(moment().add(1, 'days').format('DD MMMM'));
    setFullDay(moment().add(1, 'days').format('DD MM YYYY'));
    hideDayModal();
  });

  const handleNextWeek = useCallback(() => {
    setDate(moment().add(7, 'days').format('DD MMMM'));
    setFullDay(moment().add(1, 'days').format('DD MM YYYY'));
    hideDayModal();
  });
  const handleVisible = useCallback(() => {
    setVisible(!visible);
  });
  const containerStyle = {
    backgroundColor: 'white',
    margin: widthPercentage('8%'),
    marginTop: heightPercentage('25%'),
    marginLeft: widthPercentage('10%'),
    marginRight: widthPercentage('40%'),
  };

  return (
    <Portal>
      <Modal
        visible={dayModal}
        onDismiss={hideDayModal}
        contentContainerStyle={containerStyle}>
        <>
          <TouchableOpacity onPress={handleTodayDate}>
            <View style={styles.iconView}>
              <Text style={styles.text}>Today</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTomorrowDate}>
            <View style={styles.iconView}>
              <Text style={styles.text}>Tomorrow</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextWeek}>
            <View style={styles.iconView}>
              <Text style={styles.text}>Next {moment().format('dddd')}</Text>
            </View>
          </TouchableOpacity>
          <DatePicker
            visible={visible}
            setVisible={setVisible}
            hideDayModal={hideDayModal}
            setDate={setDate}
            showDayModal={showDayModal}
            setFullDate={setFullDate}
          />
          <TouchableOpacity onPress={handleVisible}>
            <View style={styles.iconView}>
              <Text style={styles.text}>Select a date...</Text>
            </View>
          </TouchableOpacity>
        </>
      </Modal>
    </Portal>
  );
};

export default React.memo(SelectDay);

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
    paddingBottom: heightPercentage('2%'),
  },
});
