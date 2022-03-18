import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
const Labels = ({labelData, props}) => {
  let myLoop = [];
  for (let i = 0; i < labelData.length; i++) {
    myLoop.push(
      <TouchableOpacity
        key={labelData[i].Label}
        onPress={() =>
          props.navigation.navigate('LabelNoteScreen', {...labelData[i]})
        }>
        <View style={styles.container}>
          <View style={styles.lableView}>
            <MaterialIcons name="label-outline" size={24} color="black" />
            <View style={styles.textView}>
              <Text style={styles.text}>{labelData[i].Label}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>,
    );
  }
  return <>{myLoop}</>;
};
export default Labels;

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentage('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthPercentage('4%'),
    padding: widthPercentage('1%'),
  },
  lableView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textView: {paddingLeft: widthPercentage('4%')},
  text: {
    fontSize: 18,
    color: 'black',
  },
});
