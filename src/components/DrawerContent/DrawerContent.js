import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BellIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PlusIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeleteIcon from 'react-native-vector-icons/AntDesign';
import LabelsData from '../../Services/Data/LabelsData';
import Labels from './Lables';
import {
  heightPercentage,
  widthPercentage,
} from '../../utility/DynamicDimensions';
import {useSelector} from 'react-redux';
const DrawerContent = ({props}) => {
  const {labelData} = useSelector(state => state.userReducer);
  const {fetchLabel} = LabelsData();

  useEffect(() => {
    const unSubscribe = props.navigation.addListener('focus', () => {
      fetchLabel();
    });
    return unSubscribe;
  }, [props.navigation, fetchLabel]);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView props={props}>
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
        {labelData.length ? (
          <View style={styles.margins}>
            <View style={styles.labelview}>
              <Text>Label</Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('NewLableScreen');
                }}>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Labels labelData={labelData} props={props} />
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
        ) : (
          <DrawerItem
            icon={({color, size}) => (
              <PlusIcon name="plus" color={color} size={size} />
            )}
            label="Create new label"
            onPress={() => {
              props.navigation.navigate('NewLableScreen');
            }}
          />
        )}

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
  labelview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPercentage('2%'),
    marginHorizontal: widthPercentage('5%'),
  },
});
