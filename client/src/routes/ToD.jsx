import React, {Fragment} from 'react'; 
import '../App.css';   
import { useIsAuthenticated } from "@azure/msal-react"; 
import {Navbart} from "../components/Navbart";

//components 
import InputTodo from  "../components/InputTodo"
import ListTodos from "../components/ListTodos";

const Todolist = () => { 
  const isAuthenticated = useIsAuthenticated();
  return (  
   <div> 
       <Navbart/>  
       <Fragment> 
        <div className="container"> 
          <InputTodo /> 
          <ListTodos /> 
        </div>
      </Fragment> 
      </div>
  )
}

export default Todolist
