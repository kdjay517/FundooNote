import React, {useContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../navigation/AuthContext';

const ref = firestore().collection('UserNotes');
const LablesData = () => {
  const {user} = useContext(AuthContext);
  const [labelsList, setLabelsList] = useState([]);
  const writingLabelToFireStore = async label => {
    try {
      if (label !== '') {
        await ref.doc(user).collection('Labels').add({
          Label: label,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateLabel = async (label, key) => {
    console.log('hi update =>', label, key);
    try {
      if (label !== '') {
        await ref.doc(user).collection('Labels').doc(key).update({
          Label: label,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLabel = async () => {
    let labelsArray = [];
    const list = await ref.doc(user).collection('Labels').get();
    list.forEach(doc => {
      let data = doc.data();
      data.key = doc.id;
      labelsArray.push(data);
    });
    setLabelsList(labelsArray);
  };

  return {
    writingLabelToFireStore,
    fetchLabel,
    updateLabel,
    labelsList,
  };
};

export default LablesData;
