import React, {Fragment} from 'react';
import {Icon} from 'react-materialize';
import Card from './Card.js';
import SkillSection from './SkillSection.js';

const SkillList = props => {
  let sections;
  sections = props.cats.map(cat => (
    <SkillSection key={cat.id} name={cat.category} icon={cat.icon} skills={props.skills.filter( skill => skill.category === cat.id )}/>
  ))

  return (
    <Fragment>
      { sections }
    </Fragment>
  );
}

export default SkillList;
