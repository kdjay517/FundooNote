import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddRemainderScreen from '../screens/AddRemainderScreen';
import ArchiveNoteScreen from '../screens/ArchiveNoteScreen';
import HomeScreen from '../screens/HomeScreen';
import NotesScreen from '../screens/NotesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DrawerNavigation from './DrawerNavigation';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  //   const CustomTabBarButton = ({children, onPress}) => (
  //     <TouchableOpacity style={{backgroundColor: 'E8F1F3'}} onPress={onPress}>
  //       <View style={{marginTop: -25, marginLeft: -70}}>{children}</View>
  //     </TouchableOpacity>
  //   );
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {backgroundColor: '#E8F1F3'},
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View style={{paddingLeft: -250}}>
              <Image
                source={require('../../assets/icons8-checked-checkbox-24.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="NotesScreen"
        component={NotesScreen}
        options={{
          tabBarIcon: () => (
            <View style={{paddingLeft: -140}}>
              <Image source={require('../../assets/brush.png')} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ArchiveNoteScreen"
        component={ArchiveNoteScreen}
        options={{
          tabBarIcon: () => (
            <View style={{paddingLeft: -250}}>
              <Image
                source={require('../../assets/icons8-microphone-24.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <View style={{paddingLeft: -360}}>
              <Image source={require('../../assets/gallery.png')} />
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="AddRemainderScreen"
        component={AddRemainderScreen}
        options={{
          tabBarIcon: () => <Image source={require('../../assets/plus.png')} />,
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      /> */}
    </Tab.Navigator>
  );
};
export default Tabs;
