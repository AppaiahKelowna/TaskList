import { useState } from 'react';
import { Button, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthProvider';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const { signup } = useAuth();
  const handleRegister = () => {
    if (email && password && rePassword) {
      if (password == rePassword) {
        try {
          signup(email, password);
          navigation.navigate('Login');
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <View className="flex-1 justify-center items-center gap-5">
      <Text className="text-2xl font-semibold w-80">Create Your Account</Text>
      <TextInput
        value={email}
        placeholder="joe@mail.com"
        keyboardType="email-address"
        className="elevation-xl w-80 bg-white rounded p-5"
        onChangeText={setEmail}
      ></TextInput>
      <TextInput
        value={password}
        placeholder="password"
        textContentType="password"
        secureTextEntry
        className="elevation-xl w-80 bg-white rounded p-5"
        onChangeText={setPassword}
      ></TextInput>
      <TextInput
        value={rePassword}
        placeholder="Confirm Password"
        textContentType="password"
        secureTextEntry
        className="elevation-xl w-80 bg-white rounded p-5"
        onChangeText={setRePassword}
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
