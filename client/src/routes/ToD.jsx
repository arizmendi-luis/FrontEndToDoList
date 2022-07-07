import React, {Fragment} from 'react'; 
import '../App.css';   

//components 
import InputTodo from  "../components/InputTodo"
import ListTodos from "../components/ListTodos";

const todolist = () => {
  return ( 
   <div>  
       <Fragment> 
        <div className="container"> 
          <InputTodo /> 
          <ListTodos /> 
        </div>
      </Fragment> 
      </div>
  )
}

export default todolist
