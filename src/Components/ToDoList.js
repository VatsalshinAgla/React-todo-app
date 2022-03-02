import React, { useEffect, useState } from "react";
import Button from "./Button";
import DateandTime from "./DateandTime";
import List from "./List";



import './style/ToDoList.css'

function ToDoList(){
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || []);
   
function settask(title){
  setTaskList((preState) => {
    return [
      ...preState,
      {
        id:Math.random().toString(),
        title : title,
        completed : false
      }
    ]
  })
  
}
useEffect(()=>{
  localStorage.setItem('taskList', JSON.stringify(taskList));
  
},[taskList])
  return(
        <>
        <div className="container">
         <DateandTime/>
         <List taskList={taskList}/> <br/>
         <footer><Button setTask={settask}/></footer>
        </div>
        </>
    );
}
export default ToDoList;