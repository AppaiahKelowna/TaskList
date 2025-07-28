import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { useAuth } from '../../context/AuthProvider';

export default function Login({ navigation }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const handleLogin = async () => {
    if (userName && password) {
      try {
        await login(userName, password);
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View className="flex-1 justify-center items-center gap-5">
      <Text className="text-2xl font-semibold w-80">Login to your Account</Text>
      <TextInput
        value={userName}
        placeholder="Email"
        keyboardType="email-address"
        className="px-5 bg-white shadow-black elevation-xl shadow-md rounded w-80"
        onChangeText={setUserName}
      ></TextInput>
      <TextInput
        value={password}
        placeholder="Password"
        textContentType="password"
        secureTextEntry
        className="px-5 bg-white elevation-xl rounded w-80"
        onChangeText={setPassword}
      ></TextInput>
      <TouchableOpacity
        onPress={handleLogin}
        className=" w-80 h-20 shadow-md shadow-black justify-center items-center bg-blue-900 rounded"
      >
        <Text className="text-white"> Login</Text>
      </TouchableOpacity>
      <Text className="font-medium text-gray-600">
        Don't have an account?{' '}
        <Text
          className="text-blue-600 font-medium"
          onPress={() => navigation.navigate('Register')}
        >
          Sign up
        </Text>
      </Text>
    </View>
  );
}
