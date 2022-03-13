import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';

const LableHeader = ({navigation, states}) => {
  return (
    <View style={styles.icon}>
      <Ionicons
        name="arrow-back"
        size={24}
        color="black"
        onPress={() => {
          states.setInput('');
          states.setCross(true);
          states.setRight(false);
          states.setPlus(true);
          navigation.goBack();
        }}
      />
      <View style={styles.textView}>
        <Text style={styles.text}>Edit labels</Text>
      </View>
    </View>
  );
};
export default LableHeader;

const styles = StyleSheet.create({
  icon: {
    margin: heightPercentage('2%'),
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  textView: {
    paddingHorizontal: widthPercentage('3%'),
  },
});
