import PushNotification from 'react-native-push-notification';

const CancelNotification = id => {
  PushNotification.cancelLocalNotification(id);
};

export default CancelNotification;
