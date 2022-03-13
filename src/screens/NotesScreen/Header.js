import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import {color} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';

const Header = ({states, onBackPress}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.arrow}>
          <IconButton
            icon={'keyboard-backspace'}
            size={24}
            onPress={() => onBackPress()}
          />
        </View>
        <View style={styles.group}>
          <IconButton
            icon={'pin-outline'}
            size={24}
            color={states.pin ? 'blue' : 'black'}
            onPress={() => states.setPin(!states.pin)}
          />
          <View style={{paddingRight: widthPercentage('3%')}}>
            <IconButton
              icon={'bell-outline'}
              size={24}
              onPress={() => alert('hi')}
            />
          </View>

          <Ionicons
            name="archive-outline"
            color={states.archive ? 'blue' : 'black'}
            size={24}
            onPress={() => states.setArchive(!states.archive)}
          />
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPercentage('1.5%'),
  },
  arrow: {flexDirection: 'row', paddingRight: widthPercentage('2%')},
  group: {
    flexDirection: 'row',
    alignItems: 'center',

    // paddingRight: widthPercentage('2%'),
    // paddingLeft: widthPercentage('2%'),
    paddingHorizontal: widthPercentage('5%'),
  },
});
