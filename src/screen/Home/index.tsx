import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthProvider';

export default function Home({ navigation }) {
  const { logOut, user } = useAuth();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <View className="items-center justify-center gap-5">
      <Text>
        {' '}
        Hello <Text className="font-bold color-red-600">
          {user?.email}
        </Text>{' '}
      </Text>
      <TouchableOpacity
        onPress={handleLogOut}
        className="w-80 bg-blue-900 items-center"
      >
        <Text className="color-white">log out</Text>
      </TouchableOpacity>
    </View>
  );
}
