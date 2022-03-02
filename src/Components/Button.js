import React ,{useState} from 'react'
import NewTaskForm from './NewTaskForm';
import './style/Button.css'
function Button(props) {
  const [isAdding, setIsAdding] = useState(false);
  
  const forwardTaskToList = (task) =>{
    props.getTask(task)

  }
  const startAddingHandler = () => {
    setIsAdding(true)
  }
  const stopAddingHandler = () => {
    setIsAdding(false)
  }
  return(
   <div className='button'>
    {!isAdding && <button onClick={startAddingHandler} className='plus' >+</button>}
    {isAdding && <NewTaskForm onEscape = {stopAddingHandler} onAddTask={forwardTaskToList} setTask={props.setTask}/>}
      
  </div>
  // return (
  //   <div className='button'>
  //           <button className='plus'>+</button>
  //   </div>
  );
}

export default Button