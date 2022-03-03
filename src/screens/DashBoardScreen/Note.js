import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
const Note = ({navigation, title, note}) => {
  return (
    <TouchableOpacity
      style={{flex: 1}}
      onPress={() => navigation.navigate('NotesScreen')}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.note}>{note}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Note;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: heightPercentage('2%'),
    margin: widthPercentage('2%'),
    borderColor: '#75848e',
    width: widthPercentage('40%'),
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
