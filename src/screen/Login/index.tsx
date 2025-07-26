import { Text, View, TextInput, Button } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View className=" flex-1 bg-orange-600 justify-center items-center">
      <TextInput
        placeholder="Appaiah@mail.com"
        keyboardType="email-address"
        className="text-red-400"
      ></TextInput>
      <TextInput
        placeholder="password"
        textContentType="password"
        secureTextEntry
      ></TextInput>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Home')}
      ></Button>
    </View>
  );
}
