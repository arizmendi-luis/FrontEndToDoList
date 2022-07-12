import React, {useState} from "react";
//import { PageLayout } from "./components/PageLayout";  
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
//import { ProfileData } from "./components/ProfileData";
//import { callMsGraph } from "./graph"; 
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SignInPage from "./routes/SignInPage"; 
import ToD from "./routes/ToD";
import Pagetu from "./routes/Pagetu";
import Pagethree from "./routes/Pagethree";

function App() {
  return ( 
    <><AuthenticatedTemplate> 
      <Router> 
        <Routes> 
          <Route exact path = "/" element = {<ToD/>}/>  
          <Route exact path = "/Home" element = {<ToD/>}/> 
          <Route exact path = "/Option" element = {<Pagetu/>}/>  
          <Route exact path = "/AnotherOption" element = {<Pagethree/>}/> 
        </Routes>
      </Router>
    </AuthenticatedTemplate> 
    <UnauthenticatedTemplate>
    <Router> 
        <Routes>
          <Route exact path = "/" element = {<SignInPage/>}/> 
        </Routes>
      </Router>   
    </UnauthenticatedTemplate></>  
);
}

export default App; 
/*
function ProfileContent() {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestProfileData() {
      const request = {
          ...loginRequest,
          account: accounts[0]
      };

      // Silently acquires an access token which is then attached to a request for Microsoft Graph data
      instance.acquireTokenSilent(request).then((response) => {
          callMsGraph(response.accessToken).then(response => setGraphData(response));
      }).catch((e) => {
          instance.acquireTokenPopup(request).then((response) => {
              callMsGraph(response.accessToken).then(response => setGraphData(response));
          });
      });
  }

  return (
      <>
          <h5 className="card-title">Welcome {name}</h5>
          {graphData ? 
              <ProfileData graphData={graphData} />
              :
              <Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>
          }
      </>
  );
}; 
*/
/* <AuthenticatedTemplate>  
            <PageLayout>
              <ProfileContent />
              <p>You are signed in!</p>
          </AuthenticatedTemplate> 
          <UnauthenticatedTemplate>
                  <p>You are not signed in! Please sign in.</p>
          </UnauthenticatedTemplate>  
          </PageLayout> */

// import React, { Component, Fragment } from "react"; 
// import './App.css';    
// //import { config } from './Config'; 
// import {PublicClientApplication} from '@azure/msal-browser';  
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

// //components 
// import InputTodo from "./components/InputTodo"; 
// import ListTodos from "./components/ListTodos";
// import ToD from "./routes/ToD";
// //import Home from "./routes/Home";


//   const App = () => {  
//     return ( 
//       <Router> 
//           <Routes> 
           
//           </Routes>
//       </Router>
//     ); 
//   } 
// //changes?
// export default App; 
// // { <Route exact path = "/" element = {<Home /*login = {this.login} this = {this} state = {state}
// // thislogout = {this.logout} thisrender = {this.render}*/ />}/>  } 
// // {}
// // <Route path = "/PERNList" element = {<ToD/>}/> 
