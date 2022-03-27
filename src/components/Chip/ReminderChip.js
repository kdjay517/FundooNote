import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
const ReminderChip = ({reminder}) => {
  return reminder?.length ? (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Icon name={'alarm'} size={24} color="black" />
        <Text style={styles.text}>{reminder}</Text>
      </View>
    </View>
  ) : null;
};

export default ReminderChip;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C5EBF8',
    marginHorizontal: '2%',
    paddingHorizontal: '3%',
    borderRadius: 10,
    padding: '2%',
    alignSelf: 'baseline',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: heightPercentage('0.5%'),
  },
  text: {
    fontSize: 16,
    color: 'black',
    paddingLeft: widthPercentage('2%'),
  },
});
