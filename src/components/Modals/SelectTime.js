import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TimePicker from './TimePicker';
const SelectTime = ({timeModal, hideTimeModal, setTime}) => {
  const containerStyle = {
    backgroundColor: 'white',
    margin: widthPercentage('8%'),
    marginTop: heightPercentage('43%'),
    marginLeft: widthPercentage('10%'),
    marginRight: widthPercentage('40%'),
  };

  const [visible, setVisible] = React.useState(false);
  const [modalvisibe, setModalVisible] = React.useState(false);

  const handleMonring = useCallback(() => {
    setTime('8.00 a.m.');
    hideTimeModal();
  });

  const handleAfternoon = useCallback(() => {
    setTime('1.00 p.m.');
    hideTimeModal();
  });

  const handleEvening = useCallback(() => {
    setTime('6.00 p.m.');
    hideTimeModal();
  });

  const handleNight = useCallback(() => {
    setTime('8.00 p.m.');
    hideTimeModal();
  });

  const handleVisible = useCallback(() => {
    setVisible(!visible);
  });

  return (
    <Portal>
      <Modal
        visible={timeModal}
        onDismiss={hideTimeModal}
        contentContainerStyle={containerStyle}>
        <>
          <TouchableOpacity onPress={handleMonring}>
            <View style={styles.iconView}>
              <Text style={styles.text}>Morning</Text>
              <Text style={styles.text}>8.00 a.m</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAfternoon}>
            <View style={styles.iconView}>
              <Text style={styles.text}>Afternoon</Text>
              <Text style={styles.text}>1.00 p.m</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEvening}>
            <View style={styles.iconView}>
              <Text style={styles.text}>Evening</Text>
              <Text style={styles.text}>6.00 a.m</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNight}>
            <View style={styles.iconView}>
              <Text style={styles.text}>Night</Text>
              <Text style={styles.text}>8.00 p.m</Text>
            </View>
          </TouchableOpacity>
          <TimePicker visible={visible} setVisible={setVisible} />
          <TouchableOpacity onPress={handleVisible}>
            <View style={styles.iconView}>
              <Text style={styles.text}>Select a time...</Text>
            </View>
          </TouchableOpacity>
        </>
      </Modal>
    </Portal>
  );
};

export default React.memo(SelectTime);

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
