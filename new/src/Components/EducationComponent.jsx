import React from 'react'
import education from '../img/education.png'

function EducationComponent(props) {
    return (
        <div>
            <img className='smallsocialIcon' src={education} alt="educationIcon"/>
              {props.defaultText} <span>{props.textInSpan} </span>
        </div>
    )
}

export default EducationComponent