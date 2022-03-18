import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {IconButton} from 'react-native-paper';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';

const LabelSearchBar = ({
  navigation,
  onChangeText,
  onBlur,
  setLabelVisible,
  labelKeys,
}) => {
  return (
    <View style={styles.container}>
      <IconButton
        icon={'keyboard-backspace'}
        size={24}
        color="black"
        onPress={() =>
          navigation.navigate('NotesScreen', (labelKeys = {labelKeys}))
        }
      />
      <TextInput
        style={styles.text}
        placeholder="Enter label name"
        onChangeText={text => {
          onChangeText(text);
          setLabelVisible(true);
        }}
        onBlur={onBlur}
      />
    </View>
  );
};

export default LabelSearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: heightPercentage('1%'),
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});
