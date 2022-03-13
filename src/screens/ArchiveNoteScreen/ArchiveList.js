import React from 'react';
import {FlatList} from 'react-native';
import NoteCard from './NoteCard';

const ArchiveList = ({navigation, archiveList, states}) => {
  let numCols = states.icon ? 2 : 0;
  const renderItem = ({item}) => (
    <NoteCard navigation={navigation} item={item} states={states} />
  );

  return (
    <>
      <FlatList
        numColumns={numCols}
        data={archiveList}
        renderItem={renderItem}
        key={numCols}
      />
    </>
  );
};

export default ArchiveList;
