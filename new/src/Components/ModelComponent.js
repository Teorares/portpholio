import React from 'react'


function ModelComponent(props) {
    return(
        <div>
            <li><a href={props.href}>{props.text}</a></li>
        </div>
    )
}

export default ModelComponent