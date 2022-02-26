import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  Modal,
} from 'react-native';
import {Provider} from 'react-native-paper';
import {AuthContext} from '../../navigation/AuthContext';
import Feather from 'react-native-vector-icons/Feather';
import BottomBar from '../../components/BottomBar/BottomBar';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import ImagePicker from '../../components/ImagePicker/ImagePicker';
import ProfileModal from '../../components/Mode/ProfileModal';
import Header from './Header';

const DashBoardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <Header navigation={navigation} />
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
    flex: 1,
    paddingTop: heightPercentage('2%'),
    backgroundColor: '#fff',
    padding: 8,
  },
});
