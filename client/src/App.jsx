import React, { Component, Fragment } from "react"; 
import './App.css';    
import { config } from './Config'; 
import {PublicClientApplication} from '@azure/msal-browser';  
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

//components 
import InputTodo from "./components/InputTodo"; 
import ListTodos from "./components/ListTodos";
import ToD from "./routes/ToD";
import Home from "./routes/Home";


  const App = () => {  
    return ( 
      <Router> 
          <Routes> 
            { <Route exact path = "/" element = {<Home /*login = {this.login} this = {this} state = {state}
            thislogout = {this.logout} thisrender = {this.render}*/ />}/>  } 
            {}
            <Route path = "/PERNList" element = {<ToD/>}/> 
          </Routes>
      </Router>
    ); 
  } 
//changes?
export default App; 

