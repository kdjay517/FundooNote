import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Dots from 'react-native-vector-icons/Entypo';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.leftspace}>
          <Text style={styles.text}>Deleted</Text>
        </View>
      </View>
      <View style={styles.right}>
        <TouchableOpacity>
          <Dots name="dots-three-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: heightPercentage('1.5%'),
    paddingHorizontal: widthPercentage('2%'),
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  right: {
    flexDirection: 'row',
  },
  leftspace: {
    paddingLeft: widthPercentage('5%'),
  },
  rightspace: {
    paddingRight: widthPercentage('5%'),
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
});
