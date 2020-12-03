import React from 'react';


export default function SpawnParticle(props) {    
    return (
        <div dangerouslySetInnerHTML={{__html:props.html}} className = 'particle' style={props.style}>
        
        </div>
    )
}