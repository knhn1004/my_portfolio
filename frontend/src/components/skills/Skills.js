import React, {Fragment, Component} from 'react';
import Card from './Card.js';
import {Link} from 'react-router-dom';
import Footer from '../layout/Footer.js';
import SkillList from './SkillList.js';
import axios from 'axios';

class Skills extends Component {
  state = {
    skillCat: null,
    skills: null,
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);

    Promise.all([
      axios.get('/api/v1/skill_categories/'),
      axios.get('/api/v1/skills/'),
    ]).then(res => {
      // console.log(res);
      this.setState({
        skillCat: res[0].data,
        skills: res[1].data,
        loading: false,
      });
    });
  }

  render() {
    return (
      <Fragment>
        <div className="banner" id="skills-banner">
          <div className="dark-overlay">
            <div className="valign-wrapper">
              <div className="container">
                <h1 className="white-text text-darken-4">My Skills</h1>
                <p className="flow-text white-text">
                  Below are my skills related to computer science.
                </p>
                <a
                  className="btn-large waves-effect wave-light white orange-text text-darken-3"
                  href="#skills">
                  SEE SKILLS
                </a>
                <Link
                  className="btn-large waves-effect wave-light orange darken-3"
                  to="/projects">
                  See Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="skills"></div>
        {this.state.loading ? (
	  <div className="center">
	    <div className="preloader-wrapper big active">
	      <div className="spinner-layer spinner-blue-only">
		<div className="circle-clipper left">
		  <div className="circle"></div>
		</div><div className="gap-patch">
		  <div className="circle"></div>
		</div><div className="circle-clipper right">
		  <div className="circle"></div>
		</div>
	      </div>
	    </div>
	  </div>
        ) : (
          <SkillList cats={this.state.skillCat} skills={this.state.skills} />
        )}
        <Footer />
      </Fragment>
    );
  }
}

export default Skills;
