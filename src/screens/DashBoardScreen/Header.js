import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import Profile from './Profile';
const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={24} />
      </TouchableOpacity>
      <Text>Search yours notes</Text>
      <TouchableOpacity>
        <Feather name="grid" size={24} />
      </TouchableOpacity>
      <Profile />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    padding: heightPercentage('1.5%'),
    paddingHorizontal: widthPercentage('8%'),
    justifyContent: 'space-between',
  },
});
