/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import Signup from './src/screen/Register';

const stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Signup" component={Signup} />
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Login" component={Login} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
