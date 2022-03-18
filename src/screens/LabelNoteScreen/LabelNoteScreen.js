import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';

import BottomBar from '../../components/BottomBar/BottomBar';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import LabelHeader from './LabelHeader';
import FireStoreDatabase from '../../Services/Data/FireStoreDatabase';
import LablesData from '../../Services/Data/LabelsData';
import NotesList from '../../components/NotesList';
import {useRoute} from '@react-navigation/native';
const LabelNoteScreen = ({navigation}) => {
  const labels = useRoute().params;
  const {fetchLabel} = LablesData();
  const {pinnedList, fetchingNote, unpinnedList, pin} = FireStoreDatabase();

  const pinnedLabels = pinnedList.filter(notes => {
    for (let i = 0; i < notes.LabelKey.length; i++) {
      if (labels.key === notes.LabelKey[i]) {
        return true;
      }
    }
  });

  const unpinnedLabels = unpinnedList.filter(notes => {
    for (let i = 0; i < notes.LabelKey.length; i++) {
      if (labels.key === notes.LabelKey[i]) {
        return true;
      }
    }
  });

  useEffect(() => {
    const unSubscribe = navigation.addListener('focus', () => {
      fetchLabel();
      fetchingNote();
    });
    return unSubscribe;
  }, [navigation, fetchLabel, fetchingNote]);
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <LabelHeader navigation={navigation} />
      </View>
      <View style={styles.notes}>
        <NotesList
          navigation={navigation}
          pinnedLabels={pinnedLabels}
          unpinnedLabels={unpinnedLabels}
          pin={pin}
        />
      </View>
      {/* <BottomBar navigation={navigation} /> */}
    </SafeAreaView>
  );
};

export default LabelNoteScreen;

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
