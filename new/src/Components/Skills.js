import React from 'react'


function Skills(props) {
    return(
        <div>
            <li>{props.skillName} : <span>{props.level}</span></li>
        </div>
    )
}

export default Skills