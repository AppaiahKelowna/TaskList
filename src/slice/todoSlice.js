import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const TODO_KEY = "@TaskList/todo";

//initial state:
const initialState = {
    value: []
}

//save it local storage.
export const saveToStorage =  createAsyncThunk("todo/SaveInStorage", async(todos) => {
    try {
        await AsyncStorage.setItem(TODO_KEY, JSON.stringify(todos))
        return todos
    } catch (error) {
        console.log(error,"Error in Saving data in Local Storage")
    }
})

//get from local storage.
export const fetchFromStorage =  createAsyncThunk("todo/fetchInStorage",async() => {
    try {
        const todoJson = await AsyncStorage.getItem(TODO_KEY) 
        return todoJson ? JSON.parse(todoJson) : [];
    } catch (error) {
        console.log(error,"Error in fetching data in Local Storage")
    }
})

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // add each todo item to the list:
        addTodo: (state, action) => {
            state.value = [...state.value, action.payload];
        } 
    }
    ,extraReducers: (builder) => {
    builder
      .addCase(saveToStorage.fulfilled, (state, action) => {
          state.value = action.payload
      })
      .addCase(fetchFromStorage.fulfilled, (state, action) => {
          state.value = action.payload; // replaces list
      });
}
})

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;
