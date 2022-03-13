import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import {SignIn} from '../../Services/Auth/IAuthentication';
import {AuthContext} from '../../navigation/AuthContext';

const SignInScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordVisibility, setpasswordVisibility] = useState(true);

  const {setUser} = useContext(AuthContext);

  const setUserValue = uid => {
    setUser(uid);
  };

  const homeScreen = () => {
    navigation.navigate('HomeScreen');
  };

  const onSignInPressed = async () => {
    if (email === '' && password === '') {
      setEmailError('*required');
      setPasswordError('*required');
    } else if (email !== '' && password === '') {
      setPasswordError('*required');
    } else if (email === '' && password !== '') {
      setEmailError('*required');
    } else if (!(emailError !== '' || passwordError !== '')) {
      await SignIn(email, password, setUserValue);
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

  const onForgotPasswordPressed = () => {
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.headerView}>
        <Text style={styles.header}>Fundoo Note</Text>
      </View>
      <View style={styles.inputfield}>
        <TextInput
          label="Email"
          value={email}
          mode="outlined"
          placeholder="Enter Email"
          onChangeText={text => setEmail(text)}
          onBlur={EmailValidation}
          left={<TextInput.Icon name="email-outline" />}
        />
        <Text style={{color: 'red'}}>{emailError}</Text>
        <TextInput
          label="Password"
          value={password}
          mode="outlined"
          onChangeText={text => setPassword(text)}
          placeholder="Enter Password"
          secureTextEntry={passwordVisibility}
          onBlur={PasswordValidation}
          right={
            <TextInput.Icon
              name={passwordVisibility ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => {
                setpasswordVisibility(!passwordVisibility);
              }}
            />
          }
          left={<TextInput.Icon name="lock-outline" />}
        />
        <Text style={{color: 'red'}}>{passwordError}</Text>
        <CustomButton
          text1="Sign In"
          onPress={onSignInPressed}
          type="PRIMARY"
        />
        <CustomButton
          text1="Forgot password ?"
          onPress={onForgotPasswordPressed}
          type="one"
        />
        <CustomButton
          text1="Don't have an account ? "
          text2="Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};
export default SignInScreen;
const styles = StyleSheet.create({
  headerView: {
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'red',
  },

  inputfield: {
    paddingHorizontal: 5,
    paddingTop: 30,
  },
});
