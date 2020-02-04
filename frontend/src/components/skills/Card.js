import React from 'react';

const Card = props => {
  return (
    <div className="card center" style={{ padding: '10px', }}>
      <div className="row">
	<div className="valign-wrapper">
	  <div className="col s6">
	    <div className="card-image">
	      <img className="responsive-image" style={{ height: '150px !important' }} src={ `${props.src}` } alt="" />
	    </div>
	  </div>
	  <div className="col s6">
	    <p className="flow-text">{ props.title }</p>
	    <div className="progress">
	      <div className="determinate" style={{ width: `${props.barWidth}%` }}></div>
	    </div>
	  </div>
	</div>
      </div>
    </div>
  );
}

export default Card;
