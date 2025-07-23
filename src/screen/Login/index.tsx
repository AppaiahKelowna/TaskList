import { Text, View, TextInput, Button } from 'react-native';

export default function Login({ navigation }) {
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
        title="Login"
        onPress={() => navigation.navigate('Home')}
      ></Button>
    </View>
  );
}
