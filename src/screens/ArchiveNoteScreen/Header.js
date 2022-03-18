import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import {setGridView} from '../../Services/Redux/Actions';

import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';

const Header = ({navigation, states}) => {
  const {gridView} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.leftspace}>
          <Text style={styles.text}>Archive</Text>
        </View>
      </View>
      <View style={styles.right}>
        <View style={styles.rightspace}>
          <TouchableOpacity>
            <Feather name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => dispatch(setGridView(!gridView))}>
          {gridView ? (
            <Image source={require('../../../assets/equal.png')} />
          ) : (
            <Feather name="grid" size={24} />
          )}
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
  },
});
