import React from 'react';

const SocialCards = () => {
  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <div className="row">
	<div className="col s12 m3">
	  <a href="https://facebook.com/chz1004" target="_blank">
	    <div className="card center">
	      <i className="fab fa-facebook fa-4x"></i>
	      <h4 className="card-title">Facebook</h4>
	    </div>
	  </a>
	</div>
	<div className="col s12 m3">
	  <a href="https://instagram.com/chz1004" target="_blank">
	    <div className="card center">
	      <i className="fab fa-instagram fa-4x"></i>
	      <h4 className="card-title">Instagram</h4>
	    </div>
	  </a>
	</div>
	<div className="col s12 m3">
	  <a href="https://github.com/knhn1004" target="_blank">
	    <div className="card center">
	      <i className="fab fa-github fa-4x"></i>
	      <h4 className="card-title">Github</h4>
	    </div>
	  </a>
	</div>
	<div className="col s12 m3">
	  <a href="https://www.linkedin.com/in/chia-hong-chou-66bb33197/" target="_blank">
	    <div className="card center">
	      <i className="fab fa-linkedin fa-4x"></i>
	      <h4 className="card-title">LinkedIn</h4>
	    </div>
	  </a>
	</div>
      </div>
    
    </div>
  );
}

export default SocialCards;
