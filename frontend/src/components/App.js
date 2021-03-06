import React, {Component, lazy, Suspense} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import {AnimatedSwitch} from 'react-router-transition'

import Header from './layout/Header.js'
import Home from './home/Home.js'
import TopButton from './layout/TopButton.js'
import Spinner from './layout/Spinner'
import Contact from './contact/Contact.js'
import Skills from './skills/Skills.js'
import About from './about/About.js'
import Projects from './projects/Projects.js'
import NotFound from './404.js'

class App extends Component {
  aboutInit() {
    $('#tabs-swipe-demo').tabs({
      swipeable: true,
    })
    $('.collapsible').collapsible()
  }

  componentDidMount() {
    $('.sidenav').on('click tap', 'li a', () => {
      setTimeout(() => {
        $('.sidenav').sidenav('close')
      }, 500)
    })
  }

  render() {
    return (
      <div className="main-wrapper">
        <BrowserRouter>
          <Header />
          <div className="main-wrapper-inner">
            <AnimatedSwitch
              atEnter={{opacity: 0}}
              atLeave={{opacity: 0}}
              atActive={{opacity: 1}}
              className="switch-wrapper">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/skills" component={Skills} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/404" component={NotFound} />
              <Redirect to="/404" />
            </AnimatedSwitch>
          </div>
        </BrowserRouter>
        <TopButton />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
