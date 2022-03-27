import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RepeatReminder = ({repeatReminder, hideRepeaterModal}) => {
  const containerStyle = {
    backgroundColor: 'white',
    margin: widthPercentage('8%'),
    marginBottom: heightPercentage('20%'),
    marginLeft: widthPercentage('10%'),
    marginRight: widthPercentage('40%'),
  };

  return (
    <Portal>
      <Modal
        visible={repeatReminder}
        onDismiss={hideRepeaterModal}
        contentContainerStyle={containerStyle}>
        <>
          <TouchableOpacity>
            <View style={styles.iconView}>
              <Text style={styles.text}>Does not repeat</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.iconView}>
              <Text style={styles.text}>Daily</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.iconView}>
              <Text style={styles.text}>Weekly</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.iconView}>
              <Text style={styles.text}>Monthly</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.iconView}>
              <Text style={styles.text}>Yearly</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.iconView}>
              <Text style={styles.text}>Custom...</Text>
            </View>
          </TouchableOpacity>
        </>
      </Modal>
    </Portal>
  );
};

export default React.memo(RepeatReminder);

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
