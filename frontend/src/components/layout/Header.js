import React, {Fragment} from 'react';
import {Navbar, NavItem} from 'react-materialize';
import {NavLink} from 'react-router-dom';

const Header = () => {
  const activeLink = {
    color: '#4dd0e1',
    fontWeight: 'bold',
    fontStyle: 'italic',
  };

  return (
    <Fragment>
      <div id="navFix" className="navbar-fixed">
	<Navbar
	  className="grey darken-4"
	  brand={<a href="#">Oliver</a>}
	  alignLinks="right"
	  sidenav={
	    <Fragment>
	      <li>
		<div className="background">
		  <img
		    src="https://source.unsplash.com/random/300x200?coding"
		    alt=""
		  />
		</div>
	      </li>
	      <li className="center" style={{marginBottom: '30px'}}>
		<h5>Oliver's Portfolio</h5>
		<div className="divider"></div>
	      </li>
	      <li>
		<NavLink activeStyle={activeLink} exact to="/">
		  Home
		</NavLink>
	      </li>
	      <li>
		<NavLink activeStyle={activeLink} to="/about">
		  About
		</NavLink>
	      </li>
	      <li>
		<NavLink activeStyle={activeLink} to="/skills">
		  Skills
		</NavLink>
	      </li>
	      <li>
		<NavLink activeStyle={activeLink} to="/projects">
		  Projects
		</NavLink>
	      </li>
	      <li>
		<NavLink activeStyle={activeLink} to="/contact">
		  Contact
		</NavLink>
	      </li>
	      <li>
		<NavItem className="btn red accent-2 waves-effect waves-light" href="/docs">
		  API Docs
		</NavItem>
	      </li>
	    </Fragment>
	  }>
	  <NavLink activeStyle={activeLink} exact to="/">
	    Home
	  </NavLink>
	  <NavLink activeStyle={activeLink} to="/about">
	    About
	  </NavLink>
	  <NavLink activeStyle={activeLink} to="/skills">
	    Skills
	  </NavLink>
	  <NavLink activeStyle={activeLink} to="/projects">
	    Projects
	  </NavLink>
	  <NavLink activeStyle={activeLink} to="/contact">
	    Contact
	  </NavLink>
	  <NavItem
	    className="btn red accent-2 waves-effect waves-light api-docs-btn"
	    href="/docs">
	    API Docs
	  </NavItem>
	</Navbar>
      </div>
    </Fragment>
  );
};

export default Header;
