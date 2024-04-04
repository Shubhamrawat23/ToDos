import React from "react";
import "./TaskList.css"
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleTask} from '../../redux/Slices/Slices.js'

export default function TaskList(){
    const dispatch = useDispatch() 

    const handleDeleteTask = (id)=>{
      dispatch(deleteTask(id))
    }
    const handleToggleTask = (id)=>{
      dispatch(toggleTask(id))
    } 

    const allToDos = useSelector((state)=>state.ToDoLists)
    return(
        <section id='todoBox'>
            {allToDos.map((value, index) => (
                <div key={value.id} className="todoTask" id={value.completed?"completedTodoTask":""}>
                    
                    <span id="serialNo">{`${index + 1}.`}</span>

                    <label htmlFor={`taskCheckbox${index}`} id="completedText">Completed: </label>
                    <input type='checkBox' checked={value.completed} onChange={() => handleToggleTask(value.id)} id={`taskCheckbox${index}`} className="taskCheckbox"/>

                    <span className="tasks" id={value.completed?"completedTask":""}>
                        {value.data}
                    </span>

                    <button onClick={() => handleDeleteTask(value.id)} id="deleteBtn">X</button>
                </div>
            ))}
        </section>
    )
}