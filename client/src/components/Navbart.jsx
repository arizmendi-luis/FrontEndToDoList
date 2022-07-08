import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";  
import Navbar from "react-bootstrap/Navbar";  
import { SignInButton } from "../components/SignInButton";
import { SignOutButton } from "../components/SignOutButton"; 
import { useIsAuthenticated } from "@azure/msal-react"; 
import Container from "react-bootstrap/Container";   
import Nav from "react-bootstrap/Nav";  
import NavDropdown from "react-bootstrap/NavDropdown";

export const Navbart = () => { 
    const isAuthenticated = useIsAuthenticated();
    const { instance } = useMsal();

    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">StrongHandTools</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Option">Option</Nav.Link>
                    <Nav.Link href="/Option">AnotherOption</Nav.Link>
                </Nav>
            </Container>
            {isAuthenticated ? <SignOutButton /> : <SignInButton />} 
      </Navbar>
    );
} 
{/* <Navbar bg="dark" variant="dark">   
<Container> 
    <Nav></Nav>
</Container> 
    <a className="navbar-brand" href="/">Welome to PERN ToDo List</a>
</Navbar> */}