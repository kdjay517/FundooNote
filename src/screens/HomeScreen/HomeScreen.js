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
import {AuthContext} from '../../navigation/AuthContext';
import Feather from 'react-native-vector-icons/Feather';
import BottomBar from '../../components/BottomBar/BottomBar';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import ImagePicker from '../../components/ImagePicker/ImagePicker';
import ProfileModal from '../../components/Mode/ProfileModal';

const HomeScreen = ({navigation}) => {
  const {setToken} = useContext(AuthContext);
  const [modal, setModal] = useState(false);

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('key');
    setToken(null);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.border}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather
              name="menu"
              size={24}
              style={{paddingHorizontal: widthPercentage('3%')}}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Search your notes</Text>
          <Feather
            name="grid"
            size={24}
            style={{paddingLeft: widthPercentage('10%')}}
          />
          <View style={styles.centerdView}>
            <Modal visible={modal} transparent={true}>
              <ProfileModal />
            </Modal>
          </View>
          <ImagePicker modal={modal} onPress={handleModal} />
        </View>
      </View>
      <View style={{alignItems: 'center', paddingTop: 50}}>
        <TouchableOpacity onPress={handleSignOut}>
          <Text style={{fontSize: 32, color: 'red'}}>signUp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <BottomBar />
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
    marginTop: heightPercentage('3%'),
    marginLeft: widthPercentage('4%'),
    marginRight: widthPercentage('4%'),
    flex: 1,
  },
  border: {
    backgroundColor: '#E8F1F3',
    padding: heightPercentage('1.5%'),
    flexDirection: 'row',
    borderRadius: 30,
    borderRadius: 30,
  },
  text: {
    fontWeight: 'bold',
    fontSize: widthPercentage('4%'),
    paddingHorizontal: widthPercentage('4%'),
  },
  bottom: {
    marginTop: heightPercentage('64%'),
  },
  centerdView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
