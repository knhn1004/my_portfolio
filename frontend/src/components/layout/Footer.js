import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer grey darken-2">
      <div className="container">
	<div className="row">
	  <div className="col l6 s12">
	    <h5>Chia-hong Chou (Oliver Chou)'s Portfolio</h5>
	  </div>
	  <div className="col l4 offset-l2 s12">
	    <h5 className="white-text">Social Links</h5>
	    <ul>
	      <li><a className="grey-text text-lighten-3" href="https://facebook.com/chz1004" target="_blank">
		Facebook &nbsp;
		<i className="fab fa-facebook"></i>
	      </a></li>
	      <li><a className="grey-text text-lighten-3" href="https://instagram.com/chz1004" target="_blank">
		Instagram &nbsp;
		<i className="fab fa-instagram"></i>
	      </a></li>
	      <li><a className="grey-text text-lighten-3" href="https://github.com/knhn1004" target="_blank">
		Github &nbsp;
		<i className="fab fa-github"></i>
	      </a></li>
	      <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/chia-hong-chou-66bb33197/" target="_blank">
		LinkedIn  &nbsp;
		<i className="fab fa-linkedin"></i>
	      </a></li>
	    </ul>
	  </div>
	</div>
      </div>
      <div className="footer-copyright grey darken-3">
	<div className="container">
	  &copy; Chia-hong Chou 2019
	  <span className="right">Taichung, Taiwan</span>
	</div>
      </div>
    </footer>
  );
}

export default Footer;
