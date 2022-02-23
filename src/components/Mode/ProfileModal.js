import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Modal} from 'react-native-paper';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
const ProfileModal = ({modal}) => {
  return (
    <Modal visible={!modal}>
      <View style={styles.centerdView}>
        <View style={styles.modalView}>
          <Text style={{fontSize: 62}}>Helo</Text>
        </View>
        {/* <TouchableOpacity onPress={openGallery}>
        <Avatar.Image size={28} source={imageUri} />
      </TouchableOpacity> */}
      </View>
    </Modal>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  centerdView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentage('-20%'),
  },
  modalView: {
    margin: heightPercentage('-10%'),
    backgroundColor: 'white',
    borderRadius: 20,
    padding: widthPercentage('30%'),
    alignItems: 'center',
  },
});
