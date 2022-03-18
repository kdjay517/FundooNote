import React, {useContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../navigation/AuthContext';
import {set} from 'react-native-reanimated';

const ref = firestore().collection('UserNotes');
const FireStoreDatabase = () => {
  const [pinnedList, setPinnedList] = useState([]);
  const [unpinnedList, setunpinnedList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);
  const [deleteList, setDeleteList] = useState([]);
  const {user} = useContext(AuthContext);
  const [notesList, setNotesList] = useState([]);

  const fetchingNote = async () => {
    let pinnedArray = [];
    let unpinnedArray = [];
    let archiveArray = [];
    let deleteArray = [];
    let notesArray = [];

    try {
      const list = await ref.doc(user).collection('Notes').get();
      list.forEach(doc => {
        let data = doc.data();
        data.key = doc.id;
        notesArray.push(data);
        if (data.Delete) {
          deleteArray.push(data);
        } else if (data.Pin && !data.Archive && !data.Delete) {
          pinnedArray.push(data);
        } else if (!data.Pin && !data.Archive && !data.Delete) {
          unpinnedArray.push(data);
        } else {
          archiveArray.push(data);
        }
      });
    } catch (error) {
      console.log(error);
    }
    setNotesList(notesArray);
    setPinnedList(pinnedArray);
    setunpinnedList(unpinnedArray);
    setArchiveList(archiveArray);
    setDeleteList(deleteArray);
  };

  const writingNoteToFireStore = async (
    title,
    note,
    pin,
    archive,
    del,
    labelKeys,
  ) => {
    console.log('delete =>', del);
    try {
      if (title !== '' || note !== '') {
        await ref.doc(user).collection('Notes').add({
          Title: title,
          Note: note,
          Pin: pin,
          Archive: archive,
          Delete: del,
          LabelKeys: labelKeys,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (id, title, note, pin, archive, del, labelKeys) => {
    try {
      await ref.doc(user).collection('Notes').doc(id).update({
        Title: title,
        Note: note,
        Pin: pin,
        Archive: archive,
        Delete: del,
        LabelKey: labelKeys,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchingNote,
    pinnedList,
    unpinnedList,
    writingNoteToFireStore,
    updateNote,
    archiveList,
    deleteList,
    notesList,
  };
};

export default FireStoreDatabase;
