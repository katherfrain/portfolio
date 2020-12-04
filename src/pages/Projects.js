import React from 'react';
import './Projects.css'
import Dungeon from '../components/Dungeon';
import { Container} from 'reactstrap';
import ProjectCard from '../components/ProjectCard';
import dineindoggospic from '../components/images/frontendscreenShot.png'
import teammepic from '../components/images/team-me-screenshot.png'

export default function Projects() {
    return (
      <>
      <Container>
        <div className="centred">
        <div id="dungeon-container">
          <Dungeon />
        </div>
      </div>
      
      </Container>
      <Container>
        <ProjectCard title ='Team-Me'
        cardtext='An app developed mostly to develop our database skills, Team-Me uses PostgreSQL and bcrypt to allow users to store and track multiple teams.'
        screenshotsrc={teammepic}
        buttonlink='https://github.com/phamand2/full-stack-project'
        />
        <br></br>
        <ProjectCard 
        title='Dine-In Doggos' 
        cardtext="Ever want to go out to eat, but your pupper just won't be left alone? In 2020, we developed Dine-In Doggos, using the Google Locations API, to help solve that problem." 
        screenshotsrc= {dineindoggospic}
        buttonlink ='https://github.com/plooney81/front-end-project'
        />
      </Container>
      </>
    );
  }
