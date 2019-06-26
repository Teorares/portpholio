import React from 'react';
import git from '../img/git.png'
import ModelComponent from './ModelComponent'
import model from '../Data/Models'


function MainContent() {

    const modelComponents = model.map ( modelfunc => {
        return (
           <ModelComponent href={modelfunc.href} text={modelfunc.text}/>
        )
    })

    return(
        <div className='mainContent'>
            
            <div  className='infoBlock'>
                    <h2>About me</h2>
                        <br/>
                        <p>
                            Hello. My name is Oliinuk Olexandr nad i`m a 18 years old Kyiv student.
                            I consider myself as very hardworking and sociable human being. I like to develop myself in every way
                            and become better than i was. My hobby is computers an everything connected with it. Also i like cats because they are cute. 
                        </p>
            </div>

            <div className='infoBlock'>
                <h2>My Git Hub</h2>
                <br/>
                
                    Here is some of my works that i've putted on my github account
                    <ul>
                        {modelComponents}
                    </ul>
                
                <img className='screenshot' src={git} alt=""/>
            </div>

        </div>
    )
}

export default MainContent