import React from 'react'
import { skills } from '../Assets/data'
// install react circular progressbar
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  return (
    <>
      {skills.map(({title, percentage}, index ) => {
        return(
            <div className="progress_box" key={index}>
              <div className="progress_circle">
                <CircularProgressbar
                 strokeWidth={7.5}
                 text={`${percentage}%`} 
                 value={percentage}/>
                <h3 className="skills_title">{title}</h3>
              </div>
            </div>
        )
      })}
    </>
  )
}

export default Skills