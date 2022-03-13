import React from 'react';
import {View, TextInput, StyleSheet, FlatList} from 'react-native';
import Labels from './Lables';

const LabelsList = ({labelsList}) => {
  const renderItem = ({item}) => {
    return <Labels item={item} />;
  };

  return (
    <>
      <FlatList
        data={labelsList}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </>
  );
};

export default LabelsList;
