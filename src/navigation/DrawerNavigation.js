import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AddRemainderScreen from '../screens/AddRemainderScreen';
import ArchiveNoteScreen from '../screens/ArchiveNoteScreen';
import DashBoardScreen from '../screens/DashBoardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TrashScreen from '../screens/TrashScreen';
import DrawerContent from '../components/DrawerContent';
import NewLableScreen from '../screens/NewLableScreen';
import LabelNoteScreen from '../screens/LabelNoteScreen';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent props={props} />}>
      <Drawer.Screen name="DashBoardScreen" component={DashBoardScreen} />
      <Drawer.Screen name="AddRemainderScreen" component={AddRemainderScreen} />
      <Drawer.Screen name="LabelNoteScreen" component={LabelNoteScreen} />
      <Drawer.Screen name="NewLableScreen" component={NewLableScreen} />
      <Drawer.Screen name="ArchiveNoteScreen" component={ArchiveNoteScreen} />
      <Drawer.Screen name="TrashScreen" component={TrashScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
