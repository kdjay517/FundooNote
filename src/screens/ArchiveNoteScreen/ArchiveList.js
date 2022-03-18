import React from 'react';
import {FlatList} from 'react-native';
import NoteCard from './NoteCard';
import {useSelector, useDispatch} from 'react-redux';

const ArchiveList = ({navigation, archiveList, states}) => {
  const {gridView} = useSelector(state => state.userReducer);
  let numCols = gridView ? 2 : 0;
  const renderItem = ({item}) => (
    <NoteCard navigation={navigation} item={item} gridView={gridView} />
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
