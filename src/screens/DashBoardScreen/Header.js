import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import {IconButton} from 'react-native-paper';
import Profile from './Profile';
import LabelsData from '../../Services/Data/LabelsData';
import {useSelector, useDispatch} from 'react-redux';
import {setGridView} from '../../Services/Redux/Actions';
import userReducer from '../../Services/Redux/Reducers';

const Header = ({navigation, states}) => {
  const {fetchLabel, labelsList} = LabelsData();
  const {gridView} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const handleSearchNote = () => {
    navigation.navigate('SearchNotesScreen');
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.left}>
          <TouchableOpacity
            onPress={() => {
              fetchLabel();
              navigation.openDrawer();
            }}>
            <Feather name="menu" size={24} color={'black'} />
          </TouchableOpacity>
          <View style={styles.leftspace}>
            <TouchableOpacity onPress={handleSearchNote}>
              <Text style={styles.text}>Search yours notes</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.rightspace}>
            <TouchableOpacity onPress={() => dispatch(setGridView(!gridView))}>
              {gridView ? (
                <Image source={require('../../../assets/equal.png')} />
              ) : (
                <Feather name="grid" size={24} color={'black'} />
              )}
            </TouchableOpacity>
          </View>
          <Profile />
        </View>
      </View>
    </>
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
    fontSize: 16,
    color: 'black',
  },
});
