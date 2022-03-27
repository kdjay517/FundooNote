import React, {useState} from 'react';
import {FlatList, SectionList, Text, View, StyleSheet} from 'react-native';
import NoteCard from './NoteCard';
import {useSelector} from 'react-redux';

const NotesList = ({
  navigation,
  unpinnedList,
  pinnedList,
  pinnedLabels,
  unpinnedLabels,
}) => {
  const {gridView} = useSelector(state => state.userReducer);
  let numCols = gridView ? 2 : 0;
  const renderItem = ({item}) => {
    return <NoteCard gridView={gridView} item={item} navigation={navigation} />;
  };

  const sections = [
    {title: 'pinned', data: [{list: pinnedList || pinnedLabels}]},
    {title: 'others', data: [{list: unpinnedList || unpinnedLabels}]},
  ];
  const renderSection = ({item}) => {
    return (
      <FlatList
        numColumns={numCols}
        data={item.list}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        key={numCols}
      />
    );
  };

  return (
    <>
      <SectionList
        sections={sections}
        renderSectionHeader={({section}) =>
          pinnedList?.length || pinnedLabels?.length ? (
            <Text> {section.title}</Text>
          ) : null
        }
        renderItem={renderSection}
      />
    </>
  );
};

export default NotesList;
