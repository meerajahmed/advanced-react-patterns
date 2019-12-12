import React from 'react';
import {NavLink} from 'react-router-dom';

const About = () => (
    <Container fluid className="py-2">
        <Navbar color="faded" light toggleable="sm">
            <Nav navbar className="mr-auto">
                <NavItem>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/about" className="nav-link">about</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
        <Header className="d-flex justify-content-center my-5 p-2">
            <H1 className="display-3">About page</H1>
        </Header>
    </Container>
);

export default About;