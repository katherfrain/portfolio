import React from 'react'
import portrait from './images/output-onlinepngtools.png'


export default class GameUI extends React.Component {
    constructor(props){
        super();
        
    }
    render() {

        
        const { level, playerHP, playerHPmax, playerWeapon, playerLevel, xpToNextLevel } = this.props;
        return (
<>
            <div>
            <div className='uiDungeonTitle'>Hive</div> 
            <p style = {{fontSize:'12px', width:'20vw'}}>Belinda the Fae Queen went out last night in search of a buzz.
            Waking up with a headache like a beehive, she knew she had to get out of here before the bees turned her into another drone.</p>
            
            <div className='uiLevel'>Level: {level}</div>
            <hr key='line1' />
           
            <img className='portrait' src={portrait} alt="queen portrait" />
      
            <div className='uiContainer'>
            <div id='uiHPLabel'>HP: {playerHP}/{playerHPmax}</div>
            <div id='upPlayerLevelLabel'>Your Level: {playerLevel}</div>
            <div id='uiXPLabel'>XP to Next Level: {xpToNextLevel}</div>
      
            { playerWeapon && (<>
                <div id='uiWeaponLabel'> Weapons? {playerWeapon.title} </div> 
                <div id='uiWeaponDesc'>{playerWeapon.desc} </div>
                <div id='uiWeaponDamage:'>Damage: {'0-'+(playerLevel*2)+' (+'+playerWeapon.damage+')'} </div>
            </>)}
            
            </div> 
          </div>

            </>
        )
    }
}