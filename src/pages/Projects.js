import React from 'react';
import './Projects.css'
import Dungeon from './components/Dungeon';

export default function Projects() {
    return (
        <div className="centred">
        <div id="dungeon-container">
          <Dungeon />
        </div>
      </div>
    );
  }
