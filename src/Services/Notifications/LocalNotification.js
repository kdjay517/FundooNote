import PushNotification from 'react-native-push-notification';
import moment from 'moment';
const LocalNotification = (title, note, alarm) => {
  PushNotification.localNotificationSchedule({
    channelId: 'channel-id',
    channelName: 'My channel',
    autoCancel: true,
    title: title,
    message: note,
    date: new Date(moment(alarm, 'YYYY-MM-DD hh:mm')),
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    actions: '["Yes", "No"]',
  });
};

export default LocalNotification;
