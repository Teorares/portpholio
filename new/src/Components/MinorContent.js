import React from 'react'
import gps from '../img/gps.png'
import gmail from '../img/gmail.png'

import education from '../img/education.png'

import skillsData from '../Data/Skills'
import Skills from './Skills'

import Educationcard from '../Data/EducationData'
import EducationComponent from './EducationComponent'



function MinorContent() {

    const skillsComponent = skillsData.map ( skill => {
        return (
           <Skills skillName={skill.skillName} level={skill.level}/>
        )
    })

    const educationItem = Educationcard.map ( item => {
        return (
           <EducationComponent defaultText={item.defaultText} textInSpan={item.textInSpan}/>
        )
    })

    return(

        <div>

            <div className='infoBlock location'>
                <div>
                    <img className='smallsocialIcon' src={gps} alt=""/>
                    Kyiv, Ukraine
                </div>

                <div>
                    <img className='smallsocialIcon'src={gmail}alt=""/>
                    olexandr248@gmail.com
                </div>

            </div>

            <div className='infoBlock'>
                <div>
                    <h2>Skills</h2>
                </div>

                <div className='skills'>
                    <ul>
                        {skillsComponent}
                    </ul>
                </div>

            </div>

            <div className='infoBlock'>
                <div>
                    <h2>Education</h2>
                </div>

                {educationItem}

            </div>

        </div>
    )
}

export default MinorContent