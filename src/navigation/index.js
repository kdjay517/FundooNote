import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import {AuthProvider} from './AuthContext';
import DrawerNavigation from './DrawerNavigation';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <AuthProvider>
      {token => (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {token ? (
              <>
                {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
                {/* <Stack.Screen name="Tabs" component={Tabs} /> */}
                <Stack.Screen
                  name="DrawerNavigation"
                  component={DrawerNavigation}
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
  );
};

export default Navigation;
