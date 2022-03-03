import React from 'react';
import {IconButton} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import {heightPercentage} from '../../utility/DynamicDimensions';
import GetTime from '../../components/GetTime';

const Bottom = toggle => {
  console.log(toggle);
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <IconButton icon={'plus-box-outline'} size={24} />
        <IconButton icon={'palette-outline'} size={24} />
      </View>
      <View style={{justifyContent: 'center'}}>
        <GetTime />
      </View>
      <View>
        <IconButton icon={'dots-vertical'} size={24} />
      </View>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  container: {
    padding: heightPercentage('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
