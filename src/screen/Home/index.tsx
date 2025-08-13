import {
  Button,
  Text,
  TouchableOpacity,
  View,
  TextView,
  TextInput,
  FlatList,
} from 'react-native';
import { useAuth } from '../../context/AuthProvider';
import { useEffect, useState } from 'react';
import { addTodo, saveToStorage } from '../../slice/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Home({ navigation }) {
  const { logOut, user } = useAuth();
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const todoList = useSelector((state: any) => state.todo);

  useEffect(() => {
    console.log('todoList is updated');
    console.log(todoList);
    dispatch(saveToStorage(todoList));
  }, [todoList, dispatch]);

  const handleLogOut = () => {
    logOut();
  };

  const handleTodoInput = () => {
    const trimmedText = inputValue.trim();
    if (trimmedText) {
      dispatch(addTodo(trimmedText));
    }
  };

  return (
    <View className="gap-10 items-center flex-1">
      <View className="flex-row justify-center items-center">
        {' '}
        <TouchableOpacity
          onPress={handleLogOut}
          className=" bg-blue-900 items-center p-2"
        >
          <Text className="color-white">log out</Text>
        </TouchableOpacity>
        <Text>
          {' '}
          Hello <Text className="font-bold color-red-600">
            {user?.email}
          </Text>{' '}
        </Text>{' '}
      </View>
      <View className="items-center justify-start flex-col gap-2  p-5">
        <View className="flex-row gap-2 justify-center items-center">
          <TextInput
            className="border p-2 h-12 w-60"
            placeholder="Enter the Todo"
            value={inputValue}
            onChangeText={setInputValue}
          ></TextInput>
          <TouchableOpacity
            className="h-12 p-2 bg-blue-800 justify-center items-center rounded-md"
            onPress={handleTodoInput}
          >
            <Text className="color-white">Add Item</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={todoList}
          className="flex-none h-100 border border-black"
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View className="p-5  border w-50">
              <Text>{item}</Text>
            </View>
          )}
        ></FlatList>
      </View>
    </View>
  );
}
