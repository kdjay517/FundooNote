import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Avatar} from 'react-native-paper';
const TopBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.border}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={24} style={{paddingHorizontal: 10}} />
          </TouchableOpacity>
          <Text style={styles.text}>Search your notes</Text>
          <Feather name="grid" size={24} style={{paddingLeft: 30}} />
          <View style={{paddingHorizontal: 20}}>
            <TouchableOpacity onPress={openGallery}>
              <Avatar.Image size={28} source={{imageUri}} />
            </TouchableOpacity>
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

export default TopBar;

const styles = StyleSheet.create({
  header: {
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
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
