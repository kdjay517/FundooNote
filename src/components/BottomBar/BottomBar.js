import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';

const BottomBar = ({navigation, labels}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/icons8-checked-checkbox-24.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../../assets/brush.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../../assets/icons8-microphone-24.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../../assets/gallery.png')} />
        </TouchableOpacity>

        <View style={styles.plusicon}>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotesScreen', {...labels})}>
            <Image source={require('../../../assets/plus.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8F1F3',
    padding: heightPercentage('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plusicon: {paddingLeft: widthPercentage('25%')},
});
