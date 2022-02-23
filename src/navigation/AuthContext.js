import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useEffect} from 'react';

const AuthContext = createContext({});
const AuthProvider = ({children}) => {
  const [token, setToken] = useState(null);
  const [imageUri, setImageUri] = useState({});
  const [modal, setModal] = useState(false);

  const getKey = async () => {
    try {
      const value = await AsyncStorage.getItem('key');
      setToken(value);
      const imgPath = JSON.parse(await AsyncStorage.getItem('image'));
      setImageUri(imgPath);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getKey();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        imageUri,
        setImageUri,
        modal,
        setModal,
      }}>
      {children(token, imageUri, modal)}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
