import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';

const BottomBar = () => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.image}>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/icons8-checked-checkbox-24.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.image}>
        <TouchableOpacity>
          <Image source={require('../../../assets/brush.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.image}>
        <TouchableOpacity>
          <Image source={require('../../../assets/icons8-microphone-24.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.image}>
        <TouchableOpacity>
          <Image source={require('../../../assets/gallery.png')} />
        </TouchableOpacity>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#E8F1F3',
    paddingBottom: heightPercentage('4%'),
    paddingTop: heightPercentage('3%'),
  },
  image: {
    paddingLeft: widthPercentage('5%'),
    alignItems: 'center',
  },
});
