import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {addTask} from '../../redux/Slices/Slices.js';
import './TaskInput.css';

export default function TaskInput(){
  const [inputText, setInputText] = useState("")
  const dispatch = useDispatch() 
  const allToDos = useSelector((state)=>state.ToDoLists)


  const handleAddTask = ()=>{
    if (inputText==="") {
      return alert("Please Enter some Task in Input Field")
    }
    dispatch(addTask(inputText))
    setInputText("")
  }
  const handlescrollToBottom=()=>{
    /*ensures that scroll occurs after the tasks have been added and rendered.*/
    setTimeout(()=>{
      window.scroll(({
        top:document.body.scrollHeight,
        behavior:"smooth"
      }))
    },100)
  }
    return (
      <>
        <input type='text'
          placeholder='Enter your tasks'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          id='inputText' />

        <button onClick={() => {
          handleAddTask()
          handlescrollToBottom()
        }}
        id='addTask'>
          Add Task
        </button>

        <p style={{display:allToDos.length===0?"block":"none"}} id="noTaskText">---No To Dos---</p>
      </>
    )
}