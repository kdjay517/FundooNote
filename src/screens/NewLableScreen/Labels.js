import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import LablesData from '../../Services/Data/LabelsData';

const Labels = ({item}) => {
  const [editLabel, setEditLabel] = useState(item.Label);
  const [icon, setIcon] = useState(false);

  const {updateLabel} = LablesData();

  const handleUpdate = () => {
    updateLabel(editLabel, item.key);
  };

  const handleIcon = () => {
    setIcon(!icon);
  };

  return (
    <View style={styles.container}>
      <View style={styles.lableView}>
        {icon ? (
          <DeleteIcon name="delete" size={24} color="black" />
        ) : (
          <MaterialIcons name="label-outline" size={24} color="black" />
        )}
        <View style={styles.textView}>
          <TextInput
            style={styles.text}
            value={editLabel}
            onChangeText={text => setEditLabel(text)}
            onPressIn={handleIcon}
            onBlur={() => {
              handleUpdate();
              setIcon(false);
            }}
          />
        </View>
      </View>
      <View>
        {icon ? (
          <MaterialIcons
            name="done"
            size={24}
            color="blue"
            onPress={handleUpdate}
          />
        ) : (
          <MaterialIcons
            name="edit"
            size={24}
            color="black"
            onPress={handleIcon}
          />
        )}
      </View>
    </View>
  );
};
export default Labels;

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentage('-1%'),
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
