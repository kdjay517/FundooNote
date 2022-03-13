import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';

import BottomBar from '../../components/BottomBar/BottomBar';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import Header from './Header';
import NotesList from './NotesList';
import FireStoreDatabase from '../../Services/Data/FireStoreDatabase';
import LablesData from '../../Services/Data/LabelsData';
const DashBoardScreen = ({navigation}) => {
  const {pinnedList, fetchingNote, unpinnedList, pin} = FireStoreDatabase();
  const [modalVisible, setModalVisible] = useState(false);
  const [icon, setIcon] = useState(false);

  const states = {
    modalVisible,
    setModalVisible,
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
        <NotesList
          navigation={navigation}
          pinnedList={pinnedList}
          unpinnedList={unpinnedList}
          pin={pin}
          states={states}
        />
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
