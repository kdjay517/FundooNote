import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {AuthContext} from '../../navigation/AuthContext';
import Feather from 'react-native-vector-icons/Feather';
import {Avatar} from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  const {setToken} = useContext(AuthContext);

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('key');
    setToken(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.border}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={24} style={{paddingHorizontal: 10}} />
          </TouchableOpacity>
          <Text style={styles.text}>Search your notes</Text>
          <Feather name="grid" size={24} style={{paddingLeft: 80}} />
          <View style={{paddingHorizontal: 20}}>
            <Avatar.Image
              size={28}
              source={require('../../../assets/boy.png')}
            />
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center', paddingTop: 50}}>
        <TouchableOpacity onPress={handleSignOut}>
          <Text style={{fontSize: 32, color: 'red'}}>signUp</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  border: {
    backgroundColor: '#E8F1F3',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 30,
    borderRadius: 30,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 15,
    paddingBottom: 5,
  },
});
