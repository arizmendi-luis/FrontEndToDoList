import React, {Fragment, Component} from 'react'; 
import '../App.css';   
import logo from '../logo.svg' 
import '../App.jsx';    
import { config } from '../Config'; 
import {PublicClientApplication} from '@azure/msal-browser';  
import {BrowserRouter as Router,Routes,Route, Navigate, useNavigate} from "react-router-dom"; 

class Home extends Component/*function App()*/ {
  constructor(props) { 
    super(props);  
    this.state = { 
      error:null, 
      isAuthenticated: false, 
      user: {} 
    }; 
    this.login = this.login.bind(this) 
    //Initialize the MSAL application object 
    this.PublicClientApplication = new PublicClientApplication({ 
      auth: { 
        clientId: config.appId, 
        redirectUri: config.redirecturi, 
        authority: config.authority
      }, 
      cache: { 
        caheLocation: "sessionStorage", 
        storeAuthStateInCookie: true 
      }
    }); 
  } 
  async login() { 
    try {
      // Login via group  
      await this.PublicClientApplication.loginPopup( 
        { 
          scopes: config.scopes, 
          prompt: "select_account"
        }); 
        this.setState({isAuthenticated:true}) 
    } catch (err) {  
      this.setState({ 
        isAuthenticated: false, 
        user: {}, 
        error: err  
      });  
      console.log(err);
    }
  } 

  logout() { 
    this.PublicClientApplication.logout(); 
  }   
  render () { 
    return (
      <div className='App'> 
        <header className="App-header">
          <img src = {logo} className = "App-logo" alt = "logo" width={450} height = {450}/> 
          {this.state.isAuthenticated ? <p>   
              Successful logged in  
              {/* <button onClick = {navigate("/PERNList")}> Continue</button> */}
          </p>:
          <p> 
              <button onClick = {() => this.login()} >Login Here</button>  
          </p> 
          } 
          </header>
      </div> 
    ); 
  }  
  
}

export default Home;
