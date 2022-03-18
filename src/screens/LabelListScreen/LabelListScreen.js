import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LabelSearchBar from './LabelSearchBar';
import {useSelector} from 'react-redux';
import LablesData from '../../Services/Data/LabelsData';
import {FlatList} from 'react-native-gesture-handler';
import LabelsList from './LabelsList';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import {useRoute} from '@react-navigation/native';
const LabelListScreen = ({navigation}) => {
  const labels = useRoute().params;
  const {labelData} = useSelector(state => state.userReducer);
  const [value, setValue] = useState();
  const [labelVisible, setLabelVisible] = useState(false);
  const [filterLabel, setFilterLabel] = useState([]);
  const {fetchLabel, writingLabelToFireStore} = LablesData();
  const [labelKeys, setLabelKeys] = useState(labels ?? []);

  let data = labelData.filter(label => {
    console.log('label =>', label.key);
    for (let i = 0; i < labels.length; i++) {
      if (label.key === labels[i]) {
        return true;
      }
    }
  });

  useEffect(() => {
    const unSubscribe = navigation.addListener('focus', () => {
      fetchLabel();
    });
    return unSubscribe;
  }, [navigation, fetchLabel]);

  const onChangeText = text => {
    setValue(text);
    let label = labelData.filter(item =>
      item.Label.toLowerCase().includes(text.toLowerCase()),
    );
    setFilterLabel(label);
  };

  const onBlur = () => {
    setLabelVisible(false);
    setValue('');
  };

  const onPressHandler = async () => {
    await writingLabelToFireStore(value);
    fetchLabel();
    setLabelVisible(false);
  };

  return (
    <View>
      <LabelSearchBar
        navigation={navigation}
        onChangeText={onChangeText}
        onBlur={onBlur}
        setLabelVisible={setLabelVisible}
        labelKeys={labelKeys}
      />
      <View style={styles.container}>
        {labelVisible ? (
          filterLabel.length ? (
            <FlatList
              data={filterLabel}
              renderItem={({item}) => <LabelsList item={item} />}
            />
          ) : (
            <TouchableOpacity onPress={onPressHandler} style={styles.newLabel}>
              <Icon name={'add-sharp'} size={32} color={'blue'} />
              <Text style={styles.text}>Create </Text>
              <Text style={styles.text}>"{value}"</Text>
            </TouchableOpacity>
          )
        ) : (
          <FlatList
            data={labelData}
            renderItem={({item}) => (
              <LabelsList
                item={item}
                labelKeys={labelKeys}
                setLabelKeys={setLabelKeys}
                labels={labels}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default LabelListScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  newLabel: {
    flexDirection: 'row',
    marginTop: heightPercentage('3%'),
    marginHorizontal: widthPercentage('10%'),
    alignItems: 'center',
  },
  text: {
    marginLeft: widthPercentage('3%'),
    fontSize: 18,
    color: 'black',
  },
});
