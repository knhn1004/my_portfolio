import React, {Fragment} from 'react';
import {Icon} from 'react-materialize';
import Card from './Card.js';
import ReactHTMLParser from 'react-html-parser';

const SkillSection = props => {
  return (
    <section className="section container">
      <h3 className="valign-wrapper">
	{ReactHTMLParser(props.icon)}
	{ props.name }
      </h3>
      <div className="row">
	{props.skills.map(skill => (
	  <div className="col s12 m4">
	    <Card
	      key={skill.id}
	      title={skill.name}
	      barWidth={skill.width}
	      src={skill.img}
	    />
	  </div>
	))}
      </div>
    </section>
  );
}

export default SkillSection;
