import React from 'react';
import {IconButton} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import {heightPercentage} from '../../utility/DynamicDimensions';

const Bottom = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <IconButton icon={'plus-box-outline'} size={24} />
        <IconButton icon={'palette-outline'} size={24} />
      </View>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  container: {padding: heightPercentage('1%')},
});
