import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {TextInput} from 'react-native-paper';
import {signUp} from '../../Services/Auth/UserServices';

const SignUpScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const [confimpasswordVisibility, setConfimpasswordVisibility] =
    useState(true);
  const [email, setEmail] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [emailError, setEmailError] = useState('');
  const [errorUser, setErrorUser] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigation = useNavigation();

  const UserValidation = () => {
    const userPattern = new RegExp('^[a-z]{3,}$');
    if (userName === '') {
      setErrorUser('*required');
    }
    if (!userPattern.test(userName)) {
      setErrorUser('invalid user name');
    }
    if (userPattern.test(userName)) {
      setErrorUser('');
    }
  };
  const EmailValidation = () => {
    const emailPattern = new RegExp(
      '^[a-zA-Z0-9]+([-_+.]?[a-zA-Z0-9])*[@]([A-Za-z0-9])+[.][A-Za-z]{2,}([.][A-Za-z]{2,}){0,1}$',
    );
    if (email === '') {
      setEmailError('*required');
    } else if (!emailPattern.test(email)) {
      setEmailError('invalid Email');
    }
    if (emailPattern.test(email)) {
      setEmailError('');
    }
  };

  const PasswordValidation = () => {
    const passwordPattern = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );
    if (password === '') {
      setPasswordError('*required');
    }
    if (!passwordPattern.test(password)) {
      setPasswordError('invalid password');
    }
    if (passwordPattern.test(password)) {
      setPasswordError('');
    }
  };

  const onSignInPress = () => {
    setEmail('');
    setUserName('');
    setPassword('');
    setErrorUser('');
    setEmailError('');
    setPasswordError('');
    setConfirmPassword('');
    navigation.navigate('SignIn');
  };

  const signInScreen = () => {
    navigation.navigate('SignIn');
  };
  const onSignUpPress = () => {
    if (
      email === '' ||
      userName === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      setErrorUser('*required');
      setEmailError('*required');
      setPasswordError('*required');
    } else {
      signUp(email, password, signInScreen);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
      </View>
      <View style={styles.boxes}>
        <TextInput
          left={<TextInput.Icon name="account-outline" />}
          label="User Name"
          value={userName}
          mode="outlined"
          placeholder="Enter User Name"
          onChangeText={userName => setUserName(userName)}
          onBlur={UserValidation}
        />
        <Text style={{color: 'red'}}>{errorUser}</Text>
        <TextInput
          left={<TextInput.Icon name="email-outline" />}
          label="Email"
          value={email}
          mode="outlined"
          placeholder="Enter Email"
          onChangeText={text => setEmail(text)}
          onBlur={EmailValidation}
        />
        <Text style={{color: 'red'}}>{emailError}</Text>
        <TextInput
          left={<TextInput.Icon name="lock-outline" />}
          label="Password"
          value={password}
          mode="outlined"
          placeholder="Enter Password"
          secureTextEntry={passwordVisibility}
          right={
            <TextInput.Icon
              name={passwordVisibility ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => {
                setpasswordVisibility(!passwordVisibility);
              }}
            />
          }
          onChangeText={password => setPassword(password)}
          onBlur={PasswordValidation}
        />
        <Text style={{color: 'red'}}>{passwordError}</Text>
        <TextInput
          left={<TextInput.Icon name="lock-outline" />}
          label="Confirm Password"
          value={confirmPassword}
          mode="outlined"
          placeholder="Enter Confirm Password"
          secureTextEntry={confimpasswordVisibility}
          onChangeText={text => setConfirmPassword(text)}
          //onBlur={validateConfimPasswordlOnBlur}
          right={
            <TextInput.Icon
              name={
                confimpasswordVisibility ? 'eye-off-outline' : 'eye-outline'
              }
              onPress={() => {
                setConfimpasswordVisibility(!confimpasswordVisibility);
              }}
            />
          }
        />
        <Text style={{color: 'red'}}>{passwordError}</Text>
        <CustomButton text1="Sign Up" onPress={onSignUpPress} />

        <CustomButton
          text1="Have an account ? "
          text2="Sign In"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    padding: 10,
  },
  boxes: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;
