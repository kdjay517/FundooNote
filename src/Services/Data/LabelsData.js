import React, {useContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../navigation/AuthContext';
import {useSelector, useDispatch} from 'react-redux';
import {setLabelData} from '../../Services/Redux/Actions';

const ref = firestore().collection('UserNotes');
const LablesData = () => {
  const {user} = useContext(AuthContext);
  const [labelsList, setLabelsList] = useState([]);
  const {lableData} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
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
    dispatch(setLabelData(labelsArray));
  };

  return {
    writingLabelToFireStore,
    fetchLabel,
    updateLabel,
    labelsList,
  };
};

export default LablesData;
