import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BellIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlusIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeleteIcon from 'react-native-vector-icons/AntDesign';

const DrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            paddingTop: '20%',
            paddingHorizontal: 30,
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 28, color: 'blue'}}>F</Text>
          <Text style={{fontSize: 28, color: 'red'}}>u</Text>
          <Text style={{fontSize: 28, color: 'yellow'}}>n</Text>
          <Text style={{fontSize: 28, color: 'blue'}}>d</Text>
          <Text style={{fontSize: 28, color: 'green'}}>o</Text>
          <Text style={{fontSize: 28, color: 'red'}}>o</Text>
          <Text style={{fontSize: 28, color: '#7D7A7A'}}> Note</Text>
        </View>

        <DrawerItem
          label="Notes"
          icon={({color, size}) => (
            <Icon name="lightbulb-outline" color={color} size={size} />
          )}
          onPress={() => {
            props.navigation.navigate('HomeScreen');
          }}
          activeTintColor="blue"
        />
        <DrawerItem
          icon={({color, size}) => (
            <BellIcon name="bell-outline" color={color} size={size} />
          )}
          label="Remainders"
          onPress={() => {
            props.navigation.navigate('AddRemainderScreen');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <PlusIcon name="plus" color={color} size={size} />
          )}
          label="Create new label"
          onPress={() => {
            props.navigation.navigate('AddRemainderScreen');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Ionicons name="archive-outline" color={color} size={size} />
          )}
          label="Archive"
          onPress={() => {
            props.navigation.navigate('ArchiveNoteScreen');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <DeleteIcon name="delete" color={color} size={size} />
          )}
          label="Deleted"
          onPress={() => {
            props.navigation.navigate('TrashScreen');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          )}
          label="Settings"
          onPress={() => {
            props.navigation.navigate('SettingsScreen');
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
