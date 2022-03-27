import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Chip = ({labels}) => {
  let labelData = [];
  for (let i = 0; i < labels?.length; i++) {
    labelData.push(
      <View style={styles.container} key={labels[i].Label}>
        <View>
          <Text style={styles.text}>{labels[i].Label}</Text>
        </View>
      </View>,
    );
  }
  return labelData;
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C5EBF8',
    marginHorizontal: '2%',
    paddingHorizontal: '3%',
    borderRadius: 10,
    padding: '2%',
    alignSelf: 'baseline',
    justifyContent: 'center',
    marginBottom: '1%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});
