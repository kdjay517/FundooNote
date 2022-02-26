import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from './Header';
import Bottom from './Bottom';

const NotesScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header />
      </View>

      <Bottom />
    </SafeAreaView>
  );
};

export default NotesScreen;
