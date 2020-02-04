import React, { Fragment, Component } from 'react';
import Form from './Form.js';
import SocialCards from './SocialCards.js';
import Footer from '../layout/Footer.js';

class Contact extends Component {

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500)
  }

  render() {
    return (
      <Fragment>
	<div className="banner" id="contact-banner">
	  <div className="dark-overlay">
	    <div className="valign-wrapper">
	      <div className="container">
		<h1 className="white-text text-darken-4">Get In Touch</h1>
		<p className="flow-text white-text">
		  Below are my social links and a simple contact form. If you have any question, feel free to ask me!
		</p>
		<a className="btn-large waves-effect wave-light orange darken-3" href="#contact-form">Leave a Message</a>
	      </div>
	    </div>
	  </div>
	</div>
	<SocialCards />
	<Form />
	<Footer />
      </Fragment>
    );
  }
}

export default Contact;
