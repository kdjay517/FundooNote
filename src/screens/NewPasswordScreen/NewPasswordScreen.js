import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordVisibility, setpasswordVisibility] = useState(true);
  const [errorPassword, setErrorPassword] = useState('');

  const navigation = useNavigation();

  // const onSubmitPressed = () => {
  //   navigation.navigate("Home");
  // };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.title}>Reset your password</Text>
      </View>
      <View style={{paddingHorizontal: 5}}>
        <TextInput
          style={styles.textInput}
          value={code}
          mode="outlined"
          placeholder="Enter Code"
          onChangeText={text => setCode(text)}
          //onBlur={validateUserNameOnBlur}
        />

        <TextInput
          style={styles.textInput}
          label="Password"
          value={newPassword}
          mode="outlined"
          placeholder="Enter New Password"
          secureTextEntry={passwordVisibility}
          right={
            <TextInput.Icon
              name={passwordVisibility ? 'eye-off-outline' : 'eye-outline'}
              onPress={() => {
                setpasswordVisibility(!passwordVisibility);
              }}
            />
          }
          onChangeText={password => setNewPassword(password)}
          //onBlur={validatePasswordlOnBlur}
        />
        <Text style={{color: 'red'}}>{errorPassword}</Text>

        <CustomButton
          text1="Submit" //onPress={onSubmitPressed}
        />
      </View>
      <CustomButton
        text1="Back to"
        text2="Sign in"
        onPress={onSignInPress}
        type="TERTIARY"
      />
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

export default NewPasswordScreen;
