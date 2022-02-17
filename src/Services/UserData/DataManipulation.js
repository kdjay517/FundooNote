import firestore from '@react-native-firebase/firestore';
const ref = firestore().collection('UserDetails');
export const handleUserData = async (userName, email) => {
  try {
    await ref.add({
      userName: userName,
      email: email,
    });
  } catch (e) {
    console.log(e);
  }
};
