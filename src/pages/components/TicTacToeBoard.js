import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleturn } from '../redux/actions'
import Square from './TicTacToeSquare';
import TicTacToeSquare from './TicTacToeSquare'


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}

export default class TicTacToeBoard extends React.Component{
        constructor(props){
          super(props);
          this.state = {
            squares: Array(9).fill(null),
            xNext: true,
          }
        }
        handleClick(i) {
          const squares = this.state.squares.slice();
          squares[i] = this.state.xNext ? 'X': 'O';
          this.setState({
            squares: squares,
            xNext: !this.state.xNext
          })
        }
        renderSquare(i) {
          return <Square value= {this.state.squares[i]} 
          onClick ={() => {
           this.handleClick(i) 
          }}/>
        }
        render () {
          const winner = calculateWinner(this.state.squares);
          let status = null;    
          if(winner) {
            status = 'Winner: ' + winner;
          }
          else{
            status = 'Next player: ' + (this.state.xNext ? 'X' : 'O')
          }
      
          return (
            <div>
              <div className="status">{status}</div>
              <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
            </div>
          )
          }
      }


// export default function TicTacToeBoard(props) {

//     const score = useSelector((state) => state)[props.id]
//     const dispatchEvent = useDispatch();
//     const [whoseTurn, setWhoseturn] = useState('X')

//     const handleClick = (chosenSquare) => {
//         dispatchEvent(handleturn(), props.id)
//         //decision made to only put in handling of turns for now
//         const squares = this.state.squares.slice();
//         squares[chosenSquare] = this.state.xNext ? 'X' : 'O'
//     }
//     const renderSquare = (square) => {
//         return <Square value={this.state.squares[square]}
//             onClick={() => {
//                 this.handleClick(square)
//             }} />
//     }

//     render() {
//         const winner = calculateWinner(this.state.squares);
//         let status = null;

//         if (winner) {
//             status = 'Winner: ' + winner;
//         }
//         else {
//             status = 'Next player: ' + (this.state.xNext ? 'X' : 'O')
//         }

//         return (
//             <div>
//                 <div className="status">{status}</div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         )
//     }
// }
