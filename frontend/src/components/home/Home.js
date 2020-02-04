import React, { Fragment, Component } from 'react';
import Footer from '../layout/Footer.js';

class Home extends Component {

  componentDidMount() {
    setTimeout(() => {
      $('nav').addClass('transparent').removeClass('grey');
      $('#navFix').removeClass('navbar-fixed');
      $('.slider').slider({
	indicators: false,
	height: 800,
	transition: 500,
	interval: 3000,
      })
    }, 600)
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500)
  }

  componentWillUnmount() {
    $('nav').addClass('grey').removeClass('transparent');
    $('#navFix').addClass('navbar-fixed');
  }

  render() {
    return (
      <Fragment>
	<div className="showcase">
	  <div className="slider">
	    <ul className="slides">
	      <li>
		<img src="/static/frontend/img/slides/slide1.jpg" alt="" />
		<div id="nameCap" className="caption left-align">
		  <h2>Hi, I'm Oliver Chou</h2>
		</div>
	      </li>
	      <li>
		<img src="/static/frontend/img/slides/slide2.jpg" alt="" />
		<div id="webCap" className="caption right-align">
		  <h2>I'm into Web Development</h2>
		</div>
	      </li>
	      <li>
		<img src="/static/frontend/img/slides/slide3.jpg" alt="" />
		<div id="musicCap" className="caption right-align">
		  <h2>Also, I love music & sports</h2>
		</div>
	      </li>
	    </ul>
	  </div>
	  <a className="btn-floating white waves-effect waves-pink" href="#home-main">
	    <i className="material-icons black-text large">keyboard_arrow_down</i>
	  </a>
	</div>
	<div id="home-main" className="home-cards">
	  <div className="row">
	    <div className="col s12 m8 offset-m2">
	      <div className="card-panel center">
		<h4 className="valign-wrapper">
		  <i className="material-icons medium">info_outline</i>
		  About this site
		</h4>
		<hr />
		<p className="flow-text">
		  &nbsp; This site is built with <a href="https://reactjs.org/" target="_blank">react</a> on the frontend, <a href="https://www.djangoproject.com/" target="_blank">django</a> on the backend, and connected with a <a href="https://www.postgresql.org/" target="_blank">postgreSQL</a> database.
		  Also, I used <a href="https://materializecss.com/" target="_blank">materialize.css</a> framework and <a href="https://jquery.com/" target="_blank">jquery</a> to boost the UI/ UX.
		  If your'e interested in how I built this site, click <a href="/about">here</a> to see more!
		</p>
	      </div>
	    </div>
	    <div className="col s12 m8 offset-m2">
	      <div className="card-panel center">
		<h4 className="valign-wrapper">
		  <i className="material-icons medium">live_help</i>
		  View my CV
		</h4>
		<hr />
		<p className="flow-text">
		  &nbsp; If you're interested in viewing my CV, leave a message on the <a href="/contact">contact form</a>, tell me who you are (i.g. school, organization) and I'll possibly send you my CV via email. If you expect a more instant reply, contact me on <a href="https://facebook.com/chz1004" target="_blank">facebook</a> is a better option.
		</p>
	      </div>
	    </div>
	  </div>
	</div>
	<Footer />
      </Fragment>
    );
  }
}

export default Home;
