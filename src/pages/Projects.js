import React from 'react';
import './Projects.css'
import Dungeon from './components/Dungeon';
import TicTacToeGame from './components/TicTacToeGame';
import { Col, Row } from 'reactstrap';

export default function Projects() {
    return (
        <Col> 
        <Row> 
        <div className="centred">
        <div id="dungeon-container">
          <Dungeon />
          </div>
          </div>
        </Row>
    
        <div id='tictactoeboard'>
            <TicTacToeGame />
          </div>
         </Col>   
     
    );
  }
