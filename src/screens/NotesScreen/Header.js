import React from 'react';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';

const Header = ({onBackPress}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: heightPercentage('1.5%'),
        }}>
        <View style={{flexDirection: 'row'}}>
          <IconButton
            icon={'keyboard-backspace'}
            size={24}
            onPress={() => onBackPress()}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <IconButton
            icon={'pin-outline'}
            size={24}
            onPress={() => alert('hi')}
          />
          <IconButton
            icon={'bell-outline'}
            size={24}
            onPress={() => alert('hi')}
          />
          <IconButton icon={'archive'} size={24} onPress={() => alert('hi')} />
        </View>
      </View>
    </>
  );
};

export default Header;
