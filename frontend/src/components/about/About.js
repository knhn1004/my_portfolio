import React, {Fragment, Component} from 'react'
import Tabs from './Tabs.js'
import Footer from '../layout/Footer.js'

class About extends Component {
  componentDidMount() {
    setTimeout(() => {
      // eslint-disable-next-line
      $('.collapsible').collapsible()
    }, 800)

    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 500)
  }

  render() {
    return (
      <Fragment>
        <div className="banner" id="about-banner">
          <div className="dark-overlay">
            <div className="valign-wrapper">
              <div className="container">
                <h1 className="white-text text-darken-4">About Me</h1>
                <p className="flow-text white-text">
                  About me, about this site.
                </p>
                <a
                  className="btn-large waves-effect wave-light white orange-text text-darken-3"
                  href="#me">
                  @Me
                </a>
                <a
                  className="btn-large waves-effect wave-light orange darken-3"
                  href="#this-site">
                  @This site
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="brief-about" className="container">
          <div className="row">
            <div className="col s12 m4">
              <div className="indigo-text text-lighten-1 card center">
                <i className="fas fa-plane fa-4x"></i>
                <h4 className="card-title">From Taiwan</h4>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="green-text text-darken-2 card center">
                <i className="fas fa-laptop fa-4x"></i>
                <h4 className="card-title">Into Computer</h4>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="pink-text text-lighten-2 card center">
                <i className="fas fa-music fa-4x"></i>
                <h4 className="card-title">And Music</h4>
              </div>
            </div>
          </div>
        </div>
        <div id="me" className="banner about-banner-3">
          <div className="dark-overlay">
            <div className="container center">
              <h1 className="white-text text-darken-4">@Me</h1>
              <p className="flow-text white-text">Things About Me &gt;</p>
            </div>
          </div>
        </div>
        <Tabs />
        <div id="this-site" className="banner about-banner-2">
          <div className="dark-overlay">
            <div className="container center">
              <h1 className="white-text text-darken-4">@This Site</h1>
              <p className="flow-text white-text">
                What about this portfolio website?
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <ul className="collapsible" data-collapsible="accordion">
                <li className="active">
                  <div className="collapsible-header">
                    <i className="material-icons">assignment</i>Features
                  </div>
                  <div className="collapsible-body center">
                    <p>
                      &nbsp; This site is built with{' '}
                      <a href="https://reactjs.org/" target="_blank">
                        react
                      </a>{' '}
                      on the frontend,{' '}
                      <a href="https://www.djangoproject.com/" target="_blank">
                        django
                      </a>{' '}
                      on the backend, and connected with a{' '}
                      <a href="https://www.postgresql.org/" target="_blank">
                        postgreSQL
                      </a>{' '}
                      database. Also, I used{' '}
                      <a href="https://materializecss.com/" target="_blank">
                        materialize.css
                      </a>{' '}
                      framework and{' '}
                      <a href="https://jquery.com/" target="_blank">
                        jquery
                      </a>{' '}
                      to boost the UI/ UX.
                    </p>
                    <img
                      className="responsive-img"
                      src="/static/frontend/img/sideNav.png"
                      alt=""
                    />
                    <p>
                      &nbsp; Hence, this site is completely responsive; in
                      narrower screens, you can swipe to view the side nav, and
                      all the columns will rearrange to stacked.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">help</i>API Docs
                  </div>
                  <div className="collapsible-body center">
                    <p>
                      &nbsp; The API Docs page is built with{' '}
                      <a href="https://django-rest-swagger.readthedocs.io/en/latest/">
                        Django REST Swagger
                      </a>
                      . In the fronted, react components fetch data from these
                      backend APIs with{' '}
                      <a href="https://github.com/axios/axios">axios</a>, store
                      them in{' '}
                      <a href="https://reactjs.org/docs/state-and-lifecycle.html">
                        states
                      </a>
                      , then utilizes the javascript iteration methods to render
                      these htmls.
                    </p>
                    <img
                      className="responsive-img"
                      src="/static/frontend/img/apiDocs.png"
                      alt=""
                    />
                    <p>
                      &nbsp; You can try out calling these APIs on your own,
                      either with cURL, Postman or whatever you like, but notice
                      that I've set throttling(limitation of maximum calls) to
                      prevent abusement or misuse such as common attacks, and
                      your IP address may be recorded to prevent potential
                      issues.
                    </p>
                    <img
                      className="responsive-img"
                      src="/static/frontend/img/api_try.png"
                      alt=""
                    />
                    <p>
                      &nbsp; The easiest way to try this is to play with the
                      awesome features that swagger framework provides. Simply
                      click on the &quot;try it out&quot; button, and you can
                      view the results of the GET requests on this doc page.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default About
