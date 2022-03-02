import React,{useState,useEffect} from 'react'
import Listitems from './ListItems'
import './style/list.css'

function List(props) {

let todoList=JSON.parse(localStorage.getItem('taskList'))||[];
  
  
  // const [todolist, settodolist] = useState(JSON.parse(localStorage.getItem('taskList')))
  // useEffect(()=>{
  //   localStorage.setItem('taskList', JSON.stringify(taskList));
    
  // },[taskList])

return (
  <div className='card'>
    {props.taskList.map((d) => {
      return (
        <div>
        <Listitems title = {d.title} key={d.id} completed={d.completed} />
        </div>
      );
    })}
  </div>
);
};

export default List