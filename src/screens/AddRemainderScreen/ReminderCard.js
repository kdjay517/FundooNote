import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import {useSelector} from 'react-redux';
import Chip from '../../components/Chip';
import ReminderChip from '../../components/Chip/ReminderChip';

const ReminderCard = ({navigation, item, gridView, showModal}) => {
  const {labelData} = useSelector(state => state.userReducer);
  const reminder = item.Reminder;
  const labels = labelData.filter(label => {
    for (let i = 0; i < labelData.length; i++) {
      if (label.key === item?.LabelKey?.[i]) {
        return true;
      }
    }
  });

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NotesScreen', {...item});
      }}>
      <View
        style={[
          {width: gridView ? widthPercentage('46%') : null},
          styles.container,
        ]}>
        <Text style={styles.title}>{item.Title}</Text>
        <Text style={styles.note}>{item.Note}</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {labelData?.length ? <Chip labels={labels} /> : null}
          {reminder?.length ? (
            <ReminderChip reminder={reminder} navigation={navigation} />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ReminderCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: widthPercentage('1%'),
    paddingHorizontal: widthPercentage('2%'),
    borderColor: '#75848e',
    marginHorizontal: widthPercentage('2%'),
    marginBottom: heightPercentage('1%'),
    paddingBottom: heightPercentage('1%'),
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  note: {
    fontSize: 18,
    color: 'black',
  },
});
