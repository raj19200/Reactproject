import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

const Nevbar = () => {
  return (<>
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">


          <nav className="navbar navbar-expand-lg navbar-light" >
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">React Project</NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link" exact activeClassName="menu_active" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" exact activeClassName="menu_active" to="/service">service</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" exact activeClassName="menu_active" to="/about">about</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="menu_active" to="/contact">contact</NavLink>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </>);
}

export default Nevbar;