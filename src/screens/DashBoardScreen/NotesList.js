import React, {useState} from 'react';
import {FlatList, SectionList, Text, View, StyleSheet} from 'react-native';
import NoteCard from './NoteCard';

const NotesList = ({navigation, unpinnedList, pinnedList, states}) => {
  let numCols = states.icon ? 2 : 0;

  const renderItem = ({item}) => (
    <NoteCard states={states} item={item} navigation={navigation} />
  );

  const sections = [
    {title: 'pinned', data: [{list: pinnedList}]},
    {title: 'others', data: [{list: unpinnedList}]},
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
      {pinnedList.length > 0 ? (
        <SectionList
          sections={sections}
          renderSectionHeader={({section}) => <Text> {section.title}</Text>}
          renderItem={renderSection}
        />
      ) : (
        <FlatList
          numColumns={numCols}
          data={unpinnedList}
          renderItem={renderItem}
          key={numCols}
        />
      )}
    </>
  );
};

export default NotesList;
