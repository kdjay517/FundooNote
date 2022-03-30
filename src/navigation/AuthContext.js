import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useEffect} from 'react';
import {firebase} from '@react-native-firebase/firestore';
import PushNotification from 'react-native-push-notification';
const AuthContext = createContext({});
const ref = firebase.firestore().collection('UserDetails');
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const fetching = async () => {
    try {
      const value = await AsyncStorage.getItem('key');
      setUser(value);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetching();
    createChannels();
  }, []);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'channel-id',
      channelName: 'My channel',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}>
      {children(user)}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
