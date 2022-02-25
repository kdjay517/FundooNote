import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {AuthContext} from '../../navigation/AuthContext';
import {Avatar} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import {firebase} from '@react-native-firebase/firestore';

const ref = firebase.firestore().collection('UserDetails');
const ImagePicker = ({onPress, toggle, size}) => {
  const {imageUri, setImageUri, user} = useContext(AuthContext);

  const openGallery = async () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    const response = await launchImageLibrary(options);
    if (response.assets) {
      const source = {
        uri: 'data: image/jpeg;base64,' + response.assets[0].base64,
      };
      setImageUri(source);
      try {
        await AsyncStorage.setItem('image', JSON.stringify(source));
      } catch (e) {
        console.error(e);
      }
      try {
        await ref.doc(user).update({
          imagePath: source,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View>
      <View style={{paddingHorizontal: 20}}>
        {toggle ? (
          <TouchableOpacity onPress={onPress}>
            <Avatar.Image size={size} source={imageUri} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPress}>
            <TouchableOpacity onPress={openGallery}>
              <Avatar.Image size={size} source={imageUri} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ImagePicker;
