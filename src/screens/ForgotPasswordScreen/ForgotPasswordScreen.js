import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';

const ForgotPasswordScreen = () => {
  const [userName, setUserName] = React.useState('');
  const [errorUserName, setErrorUserName] = useState('');

  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.title}>Reset your password</Text>
        <View style={{paddingHorizontal: 5}}>
          <TextInput
            style={styles.textInput}
            label="Email"
            value={userName}
            mode="outlined"
            placeholder="Enter Your Email"
            onChangeText={userName => setUserName(userName)}
            //onBlur={validateUserNameOnBlur}
          />
          <Text style={{color: 'red'}}>{errorUserName}</Text>

          <CustomButton
            text1="Send" //onPress={onSendPressed}
          />
        </View>
        <CustomButton
          text1="Back to "
          text2="Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ForgotPasswordScreen;
