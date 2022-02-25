import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ref = firebase.firestore().collection('UserDetails');
export const signUpAuth = async (userName, email, password) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    await ref.doc(response.user.uid).set({
      userName: userName,
      email: email,
    });
  } catch (error) {
    console.log(error);
  }
};

export const SignInAuth = async (email, password, callback) => {
  try {
    const signInResponse = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    await AsyncStorage.setItem('key', signInResponse.user.uid);
    callback(signInResponse.user.uid);
  } catch (e) {
    console.error(e);
  }
};

export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('key');
    console.warn(value);
    return value;
  } catch (error) {
    console.error(error);
  }
};
