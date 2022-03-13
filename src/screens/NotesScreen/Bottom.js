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
import FireStoreDatabase from '../../Services/Data/FireStoreDatabase';

const Bottom = ({
  handleDeleteButton,
  visible,
  setVisible,
  toggleBottomNavigationView,
}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <IconButton
          icon={'plus-box-outline'}
          size={24}
          onPress={() => alert('hi')}
        />
        <IconButton icon={'palette-outline'} size={24} />
      </View>
      <View style={{justifyContent: 'center'}}>
        <GetTime />
      </View>
      <View>
        <IconButton
          icon={'dots-vertical'}
          size={24}
          onPress={toggleBottomNavigationView}
        />
      </View>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}>
        <View style={styles.bottomNavigationView}>
          <TouchableOpacity onPress={handleDeleteButton}>
            <View style={styles.deleteIconView}>
              <DeleteIcon name="delete" color="black" size={24} />
              <Text style={styles.deleteText}>Delete</Text>
            </View>
          </TouchableOpacity>
        </View>
      </BottomSheet>
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
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: heightPercentage('20%'),
    flexDirection: 'row',
  },
  deleteIconView: {
    flex: 1,
    margin: widthPercentage('3%'),
    flexDirection: 'row',
  },
  deleteText: {
    fontSize: 18,
    color: 'black',
    paddingLeft: widthPercentage('2%'),
  },
});
