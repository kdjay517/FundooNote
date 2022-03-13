import React, {useState} from 'react';
import {FlatList, SectionList, Text, View, StyleSheet} from 'react-native';
import NoteCard from './NoteCard';

const NotesList = ({navigation, searchNotes}) => {
  const renderItem = ({item}) => {
    return <NoteCard item={item} navigation={navigation} />;
  };

  return (
    <>
      <FlatList data={searchNotes} renderItem={renderItem} />
    </>
  );
};

export default NotesList;
