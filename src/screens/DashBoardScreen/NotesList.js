import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import {AuthContext} from '../../navigation/AuthContext';
import {firebase} from '@react-native-firebase/firestore';

import Note from './Note';

const NotesList = ({navigation, noteList}) => {
  const renderItem = ({item}) => <Note title={item.Title} note={item.Note} />;

  return (
    <>
      <FlatList numColumns={2} data={noteList} renderItem={renderItem} />
    </>
  );
};

export default NotesList;
