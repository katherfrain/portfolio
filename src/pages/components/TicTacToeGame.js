import React from 'react';
import './TicTacToeGame.css'
import TicTacToeBoard from './TicTacToeBoard';

export default class TicTacToeGame extends React.Component{
    render() {
      return (
        <div className="game">
          <div className="gameBoard">
            <TicTacToeBoard />
          </div>
          <div className="gameInfo">
  
          </div>
        </div>
      )
    }
  }