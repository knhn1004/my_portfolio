import React from 'react'
import PropTypes from 'prop-types'

const TimeLineEvent = props => {
  return (
    <div className="timeline-event">
      <div className="card timeline-content">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activate" src={`${props.src}`} />
          <span className="card-title gradient white-text text-darken-4">
            {props.title}
            <br />
            <small>{props.date}</small>
          </span>
        </div>
        <div className={`card-content ${props.bgColor} white-text`}>
          <p>{props.content}</p>
        </div>
      </div>
      <div className="timeline-badge deep-orange accent-3 white-text"></div>
    </div>
  )
}
TimeLineEvent.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default TimeLineEvent
