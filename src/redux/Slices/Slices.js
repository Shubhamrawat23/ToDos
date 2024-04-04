import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

export const todoSlice = createSlice({
    initialState,
    name:"ToDoLists",
    reducers:{
        addTask: (state,action)=>{
            const task ={
                id:nanoid(),//Used to get different id
                data:action.payload,
                completed:false,
            }
            state.push(task)
            localStorage.setItem("tasks", JSON.stringify(state));
        },
        deleteTask: (state,action)=>{
            state = state.filter((value) => value.id !== action.payload);
            localStorage.setItem("tasks", JSON.stringify(state));
            return state;
        },
        toggleTask: (state,action)=>{
            const completedTodo = state.find((value)=>value.id === action.payload)
            if (completedTodo) {
                completedTodo.completed = !completedTodo.completed
                localStorage.setItem("tasks", JSON.stringify(state));
            } 
        },
    }
})

export const {addTask,deleteTask,toggleTask} = todoSlice.actions;

export default todoSlice.reducer