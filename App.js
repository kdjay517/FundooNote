import React from 'react';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import Navigation from './src/navigation';
import {AuthContext} from './src/navigation/AuthContext';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['EventEmitter.removeListener']);
const App = () => {
  return <Navigation />;
};

export default App;
