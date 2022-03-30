import React, {useState} from 'react';
import {IconButton} from 'react-native-paper';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import GetTime from '../../components/GetTime';
import {BottomSheet} from 'react-native-btr';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReminderBottomSheet from '../../components/BottomSheet/ReminderBottomSheet';

const Bottom = ({
  handleDeleteButton,
  visible,
  toggleBottomNavigationView,
  navigation,
  labelKeys,
  reminderVisible,
  handleReminderSheet,
  modalVisible,
  showModal,
  hideModal,
  setReminder,
  setReminderVisible,
  states,
  setAlarm,
  id,
}) => {
  const handleLabel = () => {
    toggleBottomNavigationView();
    navigation.navigate('LabelListScreen', labelKeys);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <IconButton
          icon={'plus-box-outline'}
          size={24}
          color="black"
          onPress={() => alert('hi')}
        />
        <IconButton icon={'palette-outline'} size={24} color="black" />
      </View>
      <View style={{justifyContent: 'center'}}>
        <GetTime />
      </View>
      <View>
        <IconButton
          icon={'dots-vertical'}
          size={24}
          color="black"
          onPress={toggleBottomNavigationView}
        />
      </View>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}>
        <View style={styles.bottomContainer}>
          <View style={styles.deleteView}>
            <TouchableOpacity onPress={handleDeleteButton}>
              <View style={styles.deleteIconView}>
                <DeleteIcon name="delete" color="black" size={24} />
                <Text style={styles.text}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.labelView}>
            <TouchableOpacity onPress={handleLabel}>
              <View style={styles.deleteIconView}>
                <MaterialIcons name="label-outline" size={24} color="black" />
                <Text style={styles.text}>Label</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
      <ReminderBottomSheet
        reminderVisible={reminderVisible}
        handleReminderSheet={handleReminderSheet}
        showModal={showModal}
        setReminder={setReminder}
        setReminderVisible={setReminderVisible}
        states={states}
        setAlarm={setAlarm}
        id={id}
      />
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  container: {
    padding: heightPercentage('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: heightPercentage('20%'),
    flexDirection: 'column',
  },
  deleteView: {
    flexDirection: 'row',
    flex: 1,
  },
  labelView: {
    flexDirection: 'row',
    flex: 1,
    marginTop: heightPercentage('-8%'),
  },
  deleteIconView: {
    flex: 1,
    margin: widthPercentage('3%'),
    flexDirection: 'row',
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
    paddingLeft: widthPercentage('2%'),
  },
});
