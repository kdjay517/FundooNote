import React from 'react';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import Navigation from './src/navigation';
import {AuthContext} from './src/navigation/AuthContext';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['EventEmitter.removeListener']);
import DashBoardScreen from './src/screens/DashBoardScreen';
import {Provider} from 'react-native-paper';

const App = () => {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
};

export default App;
