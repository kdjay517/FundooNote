import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AddRemainderScreen from '../screens/AddRemainderScreen';
import ArchiveNoteScreen from '../screens/ArchiveNoteScreen';
import DashBoardScreen from '../screens/DashBoardScreen';
import NotesScreen from '../screens/NotesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TrashScreen from '../screens/TrashScreen';
import DrawerContent from '../components/DrawerContent';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="DashBoardScreen" component={DashBoardScreen} />
      <Drawer.Screen name="AddRemainderScreen" component={AddRemainderScreen} />
      <Drawer.Screen name="ArchiveNoteScreen" component={ArchiveNoteScreen} />
      <Drawer.Screen name="NotesScreen" component={NotesScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      <Drawer.Screen name="TrashScreen" component={TrashScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
