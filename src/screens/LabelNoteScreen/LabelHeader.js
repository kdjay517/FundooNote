import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import {IconButton} from 'react-native-paper';
import LabelsData from '../../Services/Data/LabelsData';
import {useSelector, useDispatch} from 'react-redux';
import {setGridView} from '../../Services/Redux/Actions';
import userReducer from '../../Services/Redux/Reducers';
import {useRoute} from '@react-navigation/native';
const LabelHeader = ({navigation, states}) => {
  const labels = useRoute().params;
  const [labelName, setLabelName] = useState(labels?.Label || '');
  const {gridView} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.left}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Feather name="menu" size={24} />
          </TouchableOpacity>
          <View style={styles.leftspace}>
            <TouchableOpacity>
              <Text style={styles.text}>{labels?.Label || ''}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.searchIcon}>
            <Feather
              name="search"
              size={24}
              color="black"
              onPress={() => setClicked(!clicked)}
            />
          </View>

          <TouchableOpacity onPress={() => dispatch(setGridView(!gridView))}>
            {gridView ? (
              <Image source={require('../../../assets/equal.png')} />
            ) : (
              <Feather name="grid" size={24} />
            )}
          </TouchableOpacity>
          <IconButton icon={'dots-vertical'} size={24} color="black" />
        </View>
      </View>
    </>
  );
};

export default LabelHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: widthPercentage('3%'),
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftspace: {
    paddingLeft: widthPercentage('5%'),
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  searchIcon: {paddingRight: widthPercentage('5%')},
});
