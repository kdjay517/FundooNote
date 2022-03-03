import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';

import {AuthContext} from '../../navigation/AuthContext';

import BottomBar from '../../components/BottomBar/BottomBar';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import Header from './Header';
import NotesList from './NotesList';
import FetchingData from '../../Services/Data/FetchingData';

const DashBoardScreen = ({navigation}) => {
  const {noteList, fetchingNote} = FetchingData();

  useEffect(() => {
    const unSubscribe = navigation.addListener('focus', () => fetchingNote());
    return unSubscribe;
  }, []);
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <Header navigation={navigation} />
      </View>
      <View style={styles.notes}>
        <NotesList navigation={navigation} noteList={noteList} />
      </View>
      <BottomBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default DashBoardScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  container: {
    paddingTop: heightPercentage('2%'),
    backgroundColor: '#fff',
    padding: 8,
  },
  notes: {
    flex: 1,
    backgroundColor: '#fff',
    padding: heightPercentage('2%'),
    paddingHorizontal: widthPercentage('5%'),
  },
});
