import React from 'react';
import { NavLink } from 'react-router-dom';
import Tasks from '../../../containers/organisms/Tasks';

const HomePage = () => {
  return (
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
          <div>
            <h1 className="display-3">Hello, World!</h1>
          </div>
        </div>
      </nav>
      <Tasks />
    </div>
  );
};

export default HomePage;
