import React from "react";
/* import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'; */
//React Router
import { NavLink } from 'react-router-dom';


const yelpNav = () => {

    return (


        <nav className="navbar navbar-light bg-light">
            <NavLink id="RouterNavLink" to="/"> 
                <span className="navbar-brand mb-0 h1">MiniYelp</span>
            </NavLink>
        </nav>

       /*  <React.Fragment>
            <Navbar className="bg-light" sticky="top"  expand = "lg" >
                <NavLink id="RouterNavLink" to="/"> 
                    <Navbar.Brand href="#home">MusYelp</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment> */
    )
};

export default yelpNav;