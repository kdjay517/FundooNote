import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import {Avatar, Button, Portal, Dialog, Paragraph} from 'react-native-paper';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {firebase} from '@react-native-firebase/firestore';
import {AuthContext} from '../../navigation/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ref = firebase.firestore().collection('UserDetails');
const Profile = () => {
  const [visible, setVisible] = useState(false);
  const [gallaryVisible, setgallaryVisible] = useState(false);
  const [imageUri, setImageUri] = useState({});
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');

  const {user, setUser} = useContext(AuthContext);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('key');
    setUser(null);
  };

  const showgallaryDialog = () => {
    setgallaryVisible(true);
    setVisible(false);
  };
  const hidegallaryDialog = () => setgallaryVisible(false);

  const fetchUserDetails = async () => {
    const data = await ref.doc(user).get();
    setUserName(data._data.userName);
    setImageUri(data._data.imagePath);
    setEmail(data._data.email);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

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
        await ref.doc(user).update({
          imagePath: source,
        });
      } catch (error) {
        console.error(error);
      }
    }
    setgallaryVisible(!gallaryVisible);
    fetchUserDetails();
  };
  const openCamera = async () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    const response = await launchCamera(options);

    if (response) {
      const source = {
        uri: 'data: image/jpeg;base64,' + response.base64,
      };
      setImageUri(source);
      try {
        await ref.doc(user).update({
          imagePath: source,
        });
      } catch (error) {
        console.error(error);
      }
    }
    setgallaryVisible(!gallaryVisible);
    fetchUserDetails();
  };

  return (
    <>
      <TouchableOpacity onPress={showDialog}>
        <Avatar.Image size={24} source={imageUri} />
      </TouchableOpacity>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog} style={{zIndex: 100}}>
          <Dialog.Content style={styles.content}>
            <TouchableOpacity onPress={showgallaryDialog}>
              <Avatar.Image size={80} source={imageUri} />
            </TouchableOpacity>
            <View>
              <Paragraph>{userName}</Paragraph>
              <Paragraph>{email}</Paragraph>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={handleSignOut}>SignOut</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Portal>
        <Dialog
          visible={gallaryVisible}
          onDismiss={hidegallaryDialog}
          style={{zIndex: 100}}>
          <Dialog.Content style={styles.content}>
            <TouchableOpacity onPress={openGallery}>
              <Avatar.Image size={80} source={imageUri} />
            </TouchableOpacity>
          </Dialog.Content>
          <Dialog.Actions>
            <View style={styles.button}>
              <Button onPress={openCamera}>TakePic</Button>
              <Button onPress={hidegallaryDialog}>Cancel</Button>
            </View>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
  },
});
