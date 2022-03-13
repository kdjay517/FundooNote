import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Header from './Header';
import FireStoreDatabase from '../../Services/Data/FireStoreDatabase';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import ArchiveList from './ArchiveList';

const ArchiveNoteScreen = ({navigation}) => {
  const {archiveList, fetchingNote} = FireStoreDatabase();
  const [icon, setIcon] = useState(false);

  const states = {
    icon,
    setIcon,
  };

  useEffect(() => {
    const unSubscribe = navigation.addListener('focus', () => {
      fetchingNote();
    });
    return unSubscribe;
  }, [navigation, fetchingNote]);

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <Header navigation={navigation} states={states} />
      </View>
      <View style={styles.notes}>
        <ArchiveList
          navigation={navigation}
          archiveList={archiveList}
          states={states}
        />
      </View>
    </SafeAreaView>
  );
};

export default ArchiveNoteScreen;

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
