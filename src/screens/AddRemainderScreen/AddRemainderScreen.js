import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import Header from './Header';
import BottomBar from '../../components/BottomBar';
import ReminderList from '../../Services/Data/ReminderList';
import Reminder from './Reminder';
import FireStoreDatabase from '../../Services/Data/FireStoreDatabase';
const AddRemainderScreen = ({navigation}) => {
  const {reminder, fetchReminder} = ReminderList();
  React.useEffect(() => {
    const unSubscribe = navigation.addListener('focus', () => {
      fetchReminder();
    });
    return unSubscribe;
  }, [navigation, ReminderList]);
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <Header navigation={navigation} />
      </View>
      <View style={{flex: 1}}>
        <Reminder navigation={navigation} reminder={reminder} />
      </View>
      <BottomBar />
    </SafeAreaView>
  );
};

export default AddRemainderScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingTop: heightPercentage('2%'),
    padding: 8,
  },
  notes: {
    flex: 1,
    backgroundColor: '#fff',
    padding: heightPercentage('2%'),
    paddingHorizontal: widthPercentage('5%'),
  },
});
