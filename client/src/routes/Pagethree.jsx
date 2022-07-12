import React, {Fragment} from 'react'; 
import '../App.css';   
import { useIsAuthenticated } from "@azure/msal-react"; 
import {Navbart} from "../components/Navbart"; 

const Pagethree = () => { 
    const isAuthenticated = useIsAuthenticated();
    return (  
     <div> 
         <Navbart/> 
         <p>Hello World 2</p>
        </div>
    )
  }
  
  export default Pagethree
  