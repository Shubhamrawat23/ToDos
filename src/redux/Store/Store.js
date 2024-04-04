import { configureStore } from "@reduxjs/toolkit";
import  todoSlice  from "../Slices/Slices.js";

export const store = configureStore({
    reducer:{
        ToDoLists: todoSlice,
    },
})