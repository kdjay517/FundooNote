import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext} from 'react';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import {AuthContext} from '../../navigation/AuthContext';
import {TextInput} from 'react-native-paper';
const HomeScreen = ({navigation}) => {
  const {setToken} = useContext(AuthContext);

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('key');
    setToken(null);
  };

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={handleSignOut}>
          <Text>signUp</Text>
        </TouchableOpacity>
      </View>
      <TextInput></TextInput>
    </SafeAreaView>
  );
};

export default HomeScreen;
