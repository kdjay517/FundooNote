import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {AuthContext} from '../../navigation/AuthContext';
import Feather from 'react-native-vector-icons/Feather';
import {Avatar, Modal} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import BottomBar from '../../components/BottomBar/BottomBar';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';

const ImagePicker = ({onPress, modal}) => {
  const {imageUri, setImageUri} = useContext(AuthContext);

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('key');
    setToken(null);
  };

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
    }
  };

  return (
    <View>
      <View style={{paddingHorizontal: 20}}>
        <TouchableOpacity onPress={onPress}>
          <Avatar.Image size={28} source={imageUri} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});
