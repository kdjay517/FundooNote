import React, {useContext, useEffect, useState} from 'react';
import {} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../navigation/AuthContext';

const ref = firestore().collection('UserNotes');

const FetchingData = () => {
  const [noteList, setNoteList] = useState({});
  const {user} = useContext(AuthContext);

  const fetchingNote = async () => {
    let array = [];
    try {
      const list = await ref.doc(user).collection('Notes').get();

      list.forEach(doc => {
        let data = doc.data();
        data.key = doc.id;
        array.push(data);
      });
    } catch (error) {
      console.log(error);
    }
    setNoteList(array);
  };
  return {fetchingNote, noteList};
};

export default FetchingData;
