import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { useAuth } from '../../context/AuthProvider';
import loginSchema from '../../../utils/loginSchema';
import { z } from 'zod';
import Loginform from '../../../utils/loginType';
import { email } from 'zod/v4';

export default function Login({ navigation }) {
  const [loginCredential, setLoginCredential] = useState<Loginform>({
    email: '',
    password: '',
  });

  const { login } = useAuth();
  const handleLogin = async () => {
    try {
      loginSchema.parse({
        email: loginCredential.email,
        password: loginCredential.password,
      });
      await login(loginCredential.email, loginCredential.password);
      navigation.navigate('Home');
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.log(err.errors);
      }
    }
  };

  return (
    <View className="flex-1 justify-center items-center gap-5">
      <Text className="text-2xl font-semibold w-80">Login to your Account</Text>
      <TextInput
        value={loginCredential.email}
        placeholder="Email"
        keyboardType="email-address"
        className="px-5 bg-white shadow-black elevation-xl shadow-md rounded w-80"
        onChangeText={text =>
          setLoginCredential(prev => ({ ...prev, email: text }))
        }
      ></TextInput>
      <TextInput
        value={loginCredential.password}
        placeholder="Password"
        textContentType="password"
        secureTextEntry
        className="px-5 bg-white elevation-xl rounded w-80"
        onChangeText={text =>
          setLoginCredential(prev => ({ ...prev, password: text }))
        }
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
