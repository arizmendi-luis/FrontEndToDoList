import React from 'react'; 
import '../App.css';   
import logo from '../logo.svg' 
import '../App.jsx';    
import Navbar from "react-bootstrap/Navbar";
import { SignInButton } from "../components/SignInButton";
import { SignOutButton } from "../components/SignOutButton"; 
import { useIsAuthenticated } from "@azure/msal-react";

const SignInPage = (props) => {  
    const isAuthenticated = useIsAuthenticated();
        return ( 
            <><Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">Welome to StrongHandTools</a>
                {isAuthenticated ? <SignOutButton /> : <SignInButton />}
            </Navbar><div className='App'>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" width={450} height={450} />
                    </header>
                </div></> 
        ); 
      }  
    
    export default SignInPage; 