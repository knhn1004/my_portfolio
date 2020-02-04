import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Footer from './layout/Footer.js';

const NotFound = () => {
  return (
    <Fragment>
      <div className="container center">
	<h1>404 PAGE NOT FOUND!</h1>
	<img src="https://media.giphy.com/media/jkZtSdwKOx05BOlapR/giphy.gif" alt="" style={{ width: '100%' }}/>
	<Link to="/" className="btn-large pink accent-2 waves-effect waves-light" style={{ width: '80%', margin: '40px auto' }}>Back to Home</Link>
      </div>
      <Footer />
    </Fragment>
  );
}

export default NotFound;
