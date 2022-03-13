import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import LableHeader from './LableHeader';
import NewLabel from './NewLabel';
import {heightPercentage} from '../../utility/DynamicDimensions';
import LabelsData from '../../Services/Data/LabelsData';
import Labels from './Labels';
import LabelsList from './LabelsList';

const NewLableScreen = ({navigation}) => {
  const [cross, setCross] = useState(true);
  const [plus, setPlus] = useState(false);
  const [right, setRight] = useState(true);
  const [input, setInput] = useState('');

  console.log('input length =>', input.length);

  const states = {
    cross,
    plus,
    right,
    input,
    setInput,
    setCross,
    setPlus,
    setRight,
  };

  const {writingLabelToFireStore, fetchLabel, labelsList} = LabelsData();
  const handleDoneIcon = async () => {
    if (input.length) {
      await writingLabelToFireStore(input);
      await fetchLabel();
      setInput('');
    } else {
      setCross(!cross);
      setRight(!right);
    }
  };

  useEffect(() => {
    fetchLabel();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LableHeader navigation={navigation} states={states} />
      <NewLabel states={states} handleDoneIcon={handleDoneIcon} />
      <View style={styles.labelView}>
        {labelsList.length ? <LabelsList labelsList={labelsList} /> : null}
      </View>
    </SafeAreaView>
  );
};

export default NewLableScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelView: {
    flex: 1,
    marginTop: heightPercentage('-5%'),
  },
});
