import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              about
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <div>
      <h1>About page</h1>
    </div>
  </div>
);

export default About;
