import React, { Component, Fragment } from 'react'
import TimeLineEvent from './TimeLineEvent.js'
import axios from 'axios'
import ReactHTMLParser from 'react-html-parser'

class Tabs extends Component {
  state = {
    expCat: null,
    exps: null,
    loading: true
  }

  componentDidMount() {
    Promise.all([
      axios.get('/api/v1/exp_categories/'),
      axios.get('/api/v1/exps/')
    ]).then(res => {
      // console.log(res);
      this.setState({
        expCat: res[0].data,
        exps: res[1].data,
        loading: false
      })
      $('#tabs-swipe-demo').tabs({
        swipeable: true
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            {this.state.loading ? (
              <div className="center">
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
              <ul id="tabs-swipe-demo" className="tabs">
                {this.state.expCat.map(cat => (
                  <li className="tab col s4">
                    <a href={cat.tag}>{cat.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {this.state.loading ? (
          <div className="center">
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
          this.state.expCat.map(cat => (
            <section id={cat.tag.slice(1)} className="section col s12">
              <h4 className="center">
                {ReactHTMLParser(cat.icon)}
                &nbsp; {cat.name}
              </h4>
              <div className="timeline">
                {this.state.exps
                  .filter(exp => exp.category === cat.id)
                  .map(exp => (
                    <TimeLineEvent
                      src={exp.img}
                      bgColor={cat.bg_color}
                      title={exp.name}
                      date={exp.date}
                      content={exp.desc}
                    />
                  ))}
              </div>
            </section>
          ))
        )}
      </div>
    )
  }
}

export default Tabs
