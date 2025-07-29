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
import { AuthProvider, useAuth } from './src/context/AuthProvider';
import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { user, authLoading } = useAuth();

  if (authLoading) return null;

  useEffect(() => {
    if (!authLoading) {
      const hideBootSplash = async () => await BootSplash.hide({ fade: true });
      hideBootSplash();
    }
  }, [authLoading]);

  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Register" component={Signup} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

export default App;
