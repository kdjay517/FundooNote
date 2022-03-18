import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import {AuthProvider} from './AuthContext';
import DrawerNavigation from './DrawerNavigation';
import NotesScreen from '../screens/NotesScreen';
import LabelListScreen from '../screens/LabelListScreen';
import SearchNotesScreen from '../screens/SearchNotesScreen/SearchNotesScreen';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {Store} from '../Services/Redux/Store';

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <Provider store={Store}>
      <AuthProvider>
        {user => (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              {user ? (
                <>
                  <Stack.Screen
                    name="DrawerNavigation"
                    component={DrawerNavigation}
                  />
                  <Stack.Screen name="NotesScreen" component={NotesScreen} />
                  <Stack.Screen
                    name="SearchNotesScreen"
                    component={SearchNotesScreen}
                  />
                  <Stack.Screen
                    name="LabelListScreen"
                    component={LabelListScreen}
                  />
                </>
              ) : (
                <>
                  <Stack.Screen name="SignIn" component={SignInScreen} />
                  <Stack.Screen name="SignUp" component={SignUpScreen} />
                  <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPasswordScreen}
                  />
                  <Stack.Screen
                    name="NewPassword"
                    component={NewPasswordScreen}
                  />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </AuthProvider>
    </Provider>
  );
};

export default Navigation;
