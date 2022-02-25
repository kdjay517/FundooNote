import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {Avatar, Button} from 'react-native-paper';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import ImagePicker from '../ImagePicker/ImagePicker';
import {firebase} from '@react-native-firebase/firestore';

const ProfileModal = ({modal, onPress, toggle}) => {
  return (
    <Modal visible={modal} transparent={true}>
      <View style={styles.centerdView}>
        <View style={styles.modalView}>
          <View style={styles.profileView}>
            <ImagePicker
              modal={modal}
              onPress={onPress}
              size={64}
              toggle={toggle}
            />
          </View>
          <View style={styles.cancelButton}>
            <Button mode="contained" onPress={onPress}>
              cancle
            </Button>
            <Button mode="contained" onPress={onPress}>
              signOut
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  centerdView: {
    marginTop: widthPercentage('50%'),
    marginLeft: widthPercentage('8%'),
    marginRight: widthPercentage('10%'),
  },
  modalView: {
    borderRadius: 20,
    borderColor: 'blue',
    borderWidth: 2,
  },
  profileView: {
    alignItems: 'center',
    paddingTop: heightPercentage('5%'),
  },
  cancelButton: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: widthPercentage('2%'),
    paddingRight: widthPercentage('2%'),
    paddingBottom: heightPercentage('2%'),
  },
});
