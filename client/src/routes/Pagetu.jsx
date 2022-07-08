import React, {Fragment} from 'react'; 
import '../App.css';   
import { useIsAuthenticated } from "@azure/msal-react"; 
import {Navbart} from "../components/Navbart"; 

const Pagetu = () => { 
    const isAuthenticated = useIsAuthenticated();
    return (  
     <div> 
         <Navbart/> 
         <p>Hello World</p>
        </div>
    )
  }
  
  export default Pagetu
  