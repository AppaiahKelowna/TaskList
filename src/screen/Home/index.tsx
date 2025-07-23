import { Button, Text, View } from 'react-native';
export default function Home({ navigation }) {
  return (
    <View>
      <Text> Hello Home</Text>
      <Button
        title="navigate to Register"
        onPress={() => navigation.navigate('Signup')}
      ></Button>
    </View>
  );
}
