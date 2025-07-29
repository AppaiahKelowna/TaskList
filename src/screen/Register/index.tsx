import { useState } from 'react';
import { Button, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthProvider';
import Loginform from '../../../utils/loginType';
import registerForm from '../../../utils/registerType';
import registerSchema from '../../../utils/registerSchema';
import { email } from 'zod/v4';
import z from 'zod';

const Register = ({ navigation }) => {
  const [registerCred, setRegisterCred] = useState<registerForm>({
    email: '',
    password: '',
    rePassword: '',
  });

  const { signup } = useAuth();
  const handleRegister = async () => {
    try {
      registerSchema.parse({
        email: registerCred.email,
        password: registerCred.password,
        rePassword: registerCred.rePassword,
      });
      await signup(registerCred.email, registerCred.password);
      navigation.navigate('Login');
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.log(err.errors);
      }
    }
  };

  return (
    <View className="flex-1 justify-center items-center gap-5">
      <Text className="text-2xl font-semibold w-80">Create Your Account</Text>
      <TextInput
        value={registerCred.email}
        placeholder="joe@mail.com"
        keyboardType="email-address"
        className="elevation-xl w-80 bg-white rounded p-5"
        onChangeText={value =>
          setRegisterCred(prev => ({ ...prev, email: value }))
        }
      ></TextInput>
      <TextInput
        value={registerCred.password}
        placeholder="password"
        textContentType="password"
        secureTextEntry
        className="elevation-xl w-80 bg-white rounded p-5"
        onChangeText={value =>
          setRegisterCred(prev => ({ ...prev, password: value }))
        }
      ></TextInput>
      <TextInput
        value={registerCred.rePassword}
        placeholder="Confirm Password"
        textContentType="password"
        secureTextEntry
        className="elevation-xl w-80 bg-white rounded p-5"
        onChangeText={value =>
          setRegisterCred(prev => ({ ...prev, rePassword: value }))
        }
      ></TextInput>
      <TouchableOpacity
        onPress={handleRegister}
        className=" w-80 h-20 shadow-md shadow-black justify-center items-center bg-blue-900 rounded"
      >
        <Text className="text-white">Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
