import { Button, Text, TextInput, View } from 'react-native';

export default function Register({ navigation }) {
  return (
    <View>
      <TextInput
        placeholder="joe@mail.com"
        keyboardType="email-address"
      ></TextInput>
      <TextInput
        placeholder="password"
        textContentType="password"
        secureTextEntry
      ></TextInput>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Login')}
      ></Button>
    </View>
  );
}
