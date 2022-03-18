import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
const LabelsList = ({item, labelKeys, setLabelKeys, labels}) => {
  const [checkBox, setCheckBox] = useState(
    labels.includes(item.key) ? true : false,
  );
  const onPressHandler = item => {
    if (labelKeys.includes(item.key)) {
      const selected = labelKeys.filter(key => key !== item.key);
      setLabelKeys(selected);
    } else setLabelKeys([...labelKeys, item.key]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.labelView}>
        <Icons name={'label-outline'} size={32} color="black" />
        <Text style={styles.text}>{item.Label}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.checkBox}
        onPress={() => {
          setCheckBox(!checkBox);
          onPressHandler(item);
        }}>
        <Icons
          name={checkBox ? 'checkbox-marked' : 'checkbox-blank-outline'}
          size={24}
          color={checkBox ? 'blue' : 'black'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LabelsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: widthPercentage('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: widthPercentage('3%'),
  },
  checkBox: {
    marginRight: widthPercentage('5%'),
  },
  text: {
    marginLeft: widthPercentage('3%'),
    fontSize: 18,
    color: 'black',
  },
});
