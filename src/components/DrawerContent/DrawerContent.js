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
          label={() => (
            <Text style={{color: 'black', fontSize: 14}}>Notes</Text>
          )}
          icon={() => (
            <Icon name="lightbulb-outline" color={'black'} size={24} />
          )}
          onPress={() => {
            props.navigation.navigate('DashBoardScreen');
          }}
          activeTintColor="blue"
          style={styles.drawerItems}
        />
        <DrawerItem
          icon={() => (
            <BellIcon name="bell-outline" color={'black'} size={24} />
          )}
          label={() => (
            <Text style={{color: 'black', fontSize: 14}}>Remainders</Text>
          )}
          onPress={() => {
            props.navigation.navigate('AddRemainderScreen');
          }}
          style={styles.drawerItems}
        />
        {labelData.length ? (
          <View style={styles.margins}>
            <View style={styles.labelview}>
              <Text style={styles.text}>Label</Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('NewLableScreen');
                }}>
                <Text style={styles.text}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Labels labelData={labelData} props={props} />
            </View>

            <DrawerItem
              icon={() => <PlusIcon name="plus" color={'black'} size={24} />}
              label={() => (
                <Text style={{color: 'black', fontSize: 14}}>
                  Create new label
                </Text>
              )}
              onPress={() => {
                props.navigation.navigate('NewLableScreen');
              }}
              style={styles.drawerItems}
            />
          </View>
        ) : (
          <DrawerItem
            icon={() => <PlusIcon name="plus" color={'black'} size={24} />}
            label={() => (
              <Text style={{color: 'black', fontSize: 14}}>
                Create new label
              </Text>
            )}
            onPress={() => {
              props.navigation.navigate('NewLableScreen');
            }}
            style={styles.drawerItems}
          />
        )}

        <DrawerItem
          icon={() => (
            <Ionicons name="archive-outline" color={'black'} size={24} />
          )}
          label={() => (
            <Text style={{color: 'black', fontSize: 14}}>Archive</Text>
          )}
          onPress={() => {
            props.navigation.navigate('ArchiveNoteScreen');
          }}
          style={styles.drawerItems}
        />
        <DrawerItem
          icon={() => <DeleteIcon name="delete" color={'black'} size={24} />}
          label={() => (
            <Text style={{color: 'black', fontSize: 14}}>Deleted</Text>
          )}
          onPress={() => {
            props.navigation.navigate('TrashScreen');
          }}
          style={styles.drawerItems}
        />
        <DrawerItem
          icon={() => (
            <Ionicons name="settings-outline" color={'black'} size={24} />
          )}
          label={() => (
            <Text style={{color: 'black', fontSize: 14}}>Settings</Text>
          )}
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
    marginTop: heightPercentage('1%'),
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    borderTopColor: 'blue',
    borderTopWidth: 1,
    paddingBottom: heightPercentage('2%'),
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
  text: {
    color: 'black',
  },
  drawerItems: {
    marginBottom: heightPercentage('-1%'),
  },
});
