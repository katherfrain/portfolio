import React from 'react'


export default class GameUI extends React.Component {
    constructor(props){
        super();
        
    }
    render() {

        
        const { level, playerHP, playerHPmax, playerWeapon, playerLevel, xpToNextLevel } = this.props;
        return (
<>
            <div>
            <div className='uiDungeonTitle'>Hive Level: {level}</div>
            <hr key='line1' />
           
            <div alt="queen portrait" className="portrait" />
      
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