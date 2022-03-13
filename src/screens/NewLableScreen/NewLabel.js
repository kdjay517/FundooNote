import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';

const NewLabel = ({states, handleDoneIcon}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.lableView}>
          {states.cross ? (
            <Entypo
              name="cross"
              size={24}
              color="black"
              onPress={() => {
                states.setCross(!states.cross);
                states.setRight(!states.right);
                states.setInput('');
              }}
            />
          ) : (
            <Feather
              name="plus"
              size={24}
              color="black"
              onPress={() => {
                states.setCross(!states.cross);
                states.setRight(!states.right);
              }}
            />
          )}
          <View style={styles.textView}>
            <TextInput
              value={states.input}
              placeholder={'Create new label'}
              style={styles.text}
              onChangeText={text => {
                states.setInput(text);
              }}
            />
          </View>
        </View>

        <View>
          {states.right ? (
            <MaterialIcons
              name="done"
              size={24}
              color="black"
              onPress={handleDoneIcon}
            />
          ) : null}
        </View>
      </View>
    </>
  );
};

export default NewLabel;

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentage('2%'),
    marginBottom: heightPercentage('6%'),
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderTopColor: 'grey',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthPercentage('4%'),
  },
  lableView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textView: {
    paddingLeft: widthPercentage('4%'),
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
  },
});
