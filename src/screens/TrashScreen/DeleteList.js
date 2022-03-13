import React from 'react';
import {FlatList} from 'react-native';
import NoteCard from './NoteCard';

const DeleteList = ({navigation, deleteList}) => {
  const renderItem = ({item}) => (
    <NoteCard navigation={navigation} item={item} />
  );

  return (
    <>
      <FlatList data={deleteList} renderItem={renderItem} />
    </>
  );
};

export default DeleteList;
