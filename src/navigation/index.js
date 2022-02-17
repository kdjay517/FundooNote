import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import {AuthProvider} from './AuthContext';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <AuthProvider>
      {token => (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {token ? (
              <>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
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
