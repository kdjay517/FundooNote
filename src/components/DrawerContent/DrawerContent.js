import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BellIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlusIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import LabelsData from '../../Services/Data/LabelsData';
import LabelsList from './LabelsList';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
const DrawerContent = ({props}) => {
  const {fetchLabel, labelsList} = LabelsData();

  useEffect(() => {
    fetchLabel();
  }, []);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView props={props} labelsList={labelsList}>
        <View style={styles.title}>
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
            props.navigation.navigate('DashBoardScreen');
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

        <View style={styles.margins}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 25,
            }}>
            <Text>Label</Text>
            <Text>Edit</Text>
          </View>
          <View>
            <LabelsList labelsList={labelsList} />
          </View>

          <DrawerItem
            icon={({color, size}) => (
              <PlusIcon name="plus" color={color} size={size} />
            )}
            label="Create new label"
            onPress={() => {
              props.navigation.navigate('NewLableScreen');
            }}
          />
        </View>
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

const styles = StyleSheet.create({
  margins: {
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    borderTopColor: 'blue',
    borderTopWidth: 1,
  },
  title: {
    paddingTop: heightPercentage('5%'),
    paddingHorizontal: widthPercentage('10%'),
    flexDirection: 'row',
  },
});
