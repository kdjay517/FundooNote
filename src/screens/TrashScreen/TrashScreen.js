import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Header from './Header';
import FireStoreDatabase from '../../Services/Data/FireStoreDatabase';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import DeleteList from './DeleteList';

const TrashScreen = ({navigation}) => {
  const {deleteList, fetchingNote} = FireStoreDatabase();

  useEffect(() => {
    const unSubscribe = navigation.addListener('focus', () => {
      fetchingNote();
    });
    return unSubscribe;
  }, [navigation, fetchingNote]);

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <Header navigation={navigation} />
      </View>
      <View style={styles.notes}>
        <DeleteList navigation={navigation} deleteList={deleteList} />
      </View>
    </SafeAreaView>
  );
};

export default TrashScreen;

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
