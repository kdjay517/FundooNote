import {signUpAuth} from './Authentication';
import {SignInAuth} from './Authentication';
//import {handleUserData} from '../UserData/DataManipulation';
export const signUp = async (userName, email, password, callback) => {
  try {
    await signUpAuth(userName, email, password);
    callback();
  } catch (e) {
    console.log(e);
  }
};

export const SignIn = async (email, password, callback) => {
  try {
    await SignInAuth(email, password, callback);
  } catch (e) {
    console.error(e);
  }
};
