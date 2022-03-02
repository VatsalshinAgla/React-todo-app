
import React,{useState,useEffect} from 'react'

import './style/NewTaskForm.css'
function NewTaskForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || []);
  // console.log(taskList)
  


  const onTitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const onAddTaskHandler = (event) => {
    // event.preventDefault();

    if (event.key === "Enter") {
      if (enteredTitle.trim().length === 0) {
        alert("invalid");
        return;
      }
      // console.log(enteredTitle);
    props.setTask(enteredTitle)
      // props.onAddTask(enteredTitle)
      
      // props.onEscape();
      setEnteredTitle("");
    }
    if (event.key === "Escape") {
      console.log("hello");
      props.onEscape();
      return;
    }
  };
  

  return (
    <div>
      <input
        placeholder="enter new task"
        type="text"
        value={enteredTitle}
        onChange={onTitleChangeHandler}
        onKeyDown={onAddTaskHandler}
      />
    </div>
  );
};

export default NewTaskForm