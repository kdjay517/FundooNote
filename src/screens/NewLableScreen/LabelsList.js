import React from 'react';
import {View, TextInput, StyleSheet, FlatList} from 'react-native';
import Labels from './Labels';

const LabelsList = ({labelData}) => {
  const renderItem = ({item}) => {
    return <Labels item={item} />;
  };

  return (
    <>
      <FlatList
        data={labelData}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </>
  );
};

export default LabelsList;
