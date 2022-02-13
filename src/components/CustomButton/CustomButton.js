import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text1, text2, type = 'PRIMARY'}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>
        {text1} <Text style={{color: 'blue'}}>{text2}</Text>
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },

  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text_PRIMARY: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
  text_SECONDARY: {
    color: 'blue',
    fontSize: 24,
  },
  text_one: {
    color: 'blue',
    fontSize: 18,
  },

  text_TERTIARY: {
    color: 'black',
    fontSize: 18,
  },
});

export default CustomButton;
