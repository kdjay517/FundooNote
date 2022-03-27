import React, {useContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../navigation/AuthContext';

const ref = firestore().collection('UserNotes');
const ReminderList = () => {
  const [reminder, setReminder] = useState('');
  const {user} = useContext(AuthContext);
  const fetchReminder = async () => {
    let reminders = [];
    try {
      const list = await ref.doc(user).collection('Notes').get();
      list.forEach(doc => {
        let data = doc.data();
        data.key = doc.id;
        if (data.Reminder) {
          reminders.push(data);
        }
      });
    } catch (error) {
      console.log(error);
    }
    setReminder(reminders);
  };

  return {reminder, fetchReminder};
};

export default ReminderList;
