import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';

const NoteCard = ({navigation, item}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('NotesScreen', {...item})}>
      <View style={[styles.container]}>
        <Text style={styles.title}>{item.Title}</Text>
        <Text style={styles.note}>{item.Note}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default NoteCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: heightPercentage('2%'),
    margin: widthPercentage('2%'),
    borderColor: '#75848e',
    width: widthPercentage('85%'),
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  note: {
    fontSize: 18,
  },
});
