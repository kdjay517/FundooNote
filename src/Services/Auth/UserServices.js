import {signUpAuth} from './UserFireBaseServices';
export const signUp = async (email, password, callback) => {
  try {
    await signUpAuth(email, password);
    callback();
  } catch (e) {
    console.log(e);
  }
};
