import React, { useState } from 'react';


export default function RenderHpBar(props) {
    

    if(props.health < props.healthmax) {
        
        var hpPercent = props.health/props.healthmax*100;

        if(hpPercent < 100) {
            var hpSize = 3 + Math.round(Math.sqrt(props.healthmax))*2;
            return (
                <>
                <div className='hp-bar' style ={{width: `${hpSize}px`, left:`(33-${hpSize})/2px`}}>
                <div className='hp-bar-sub' style={{width: hpPercent+'%'}}></div></div>
                </>
                )
            }
        }
    return "";
  }