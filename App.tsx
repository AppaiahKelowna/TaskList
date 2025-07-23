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

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View className="flex-1 justify-center items-center">
      <Text> Home Screen</Text>
    </View>
  );
}

export default App;
