import React, {Fragment, Component} from 'react'
import Footer from '../layout/Footer.js'
import axios from 'axios'
import Spinner from '../layout/Spinner'

class Projects extends Component {
  state = {
    projects: null,
    loading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 500)

    axios.get('/api/v1/projects/').then(res => {
      // console.log(res);
      this.setState({
        projects: res.data,
        loading: false,
      })
      $('.carousel').carousel()
      $('.modal').modal()
    })
  }

  render() {
    return (
      <Fragment>
        <div className="banner" id="projects-banner">
          <div className="dark-overlay">
            <div className="valign-wrapper">
              <div className="container">
                <h1 className="white-text text-darken-4">Projects</h1>
                <p className="flow-text white-text">
                  These is a collection of my projects, if you want to see more,
                  including smaller projects, visit my github page!
                </p>
                <a
                  className="btn-large waves-effect wave-light orange darken-3"
                  href="https://github.com/knhn1004"
                  target="_blank">
                  <i className="fab fa-github"></i> &nbsp; Github Page
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card-panel projects-card">
            <h3 className="valign-wrapper">
              <i className="material-icons medium">view_list</i>
              My Projects
            </h3>
            <span
              className="badge blue white-text"
              data-badge-caption="click/touch to show modal"></span>
            {this.state.loading ? (
              <Spinner />
            ) : (
              <div className="carousel">
                {this.state.projects.map(project => (
                  <a
                    key={project.id}
                    className="carousel-item modal-trigger"
                    href={project.tag}>
                    <img src={project.img} alt="" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        {this.state.loading ? (
          <div className="contianer center">
            <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div>
                <div className="gap-patch">
                  <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          this.state.projects.map(project => (
            <div
              id={project.tag.slice(1)}
              key={project.id}
              className="modal card">
              <div className="card-image">
                <img className="responsive-img" src={project.img} alt="" />
              </div>
              <div className="card-content">
                <span className="card-title">{project.name}</span>
                <p>{project.desc}</p>
              </div>
              <div className="card-action">
                <a href={project.link} target="_blank">
                  project link
                </a>
                <a href={project.github} target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          ))
        )}
        <Footer />
      </Fragment>
    )
  }
}

export default Projects
