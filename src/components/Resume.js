import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardTitle, Container, UncontrolledCollapse } from 'reactstrap';
import './Resume.css'
import pythonicon from './icons/python.png'
import html5icon from './icons/html-5.png'
import jsxicon from './icons/jsx.png'
import postgresicon from './icons/icons8-postgresql-48.png'
import cssicon from './icons/icons8-css-filetype-50.png'
import reacticon from './icons/icons8-react-50.png'
import restfulicon from './icons/icons8-api-50.png'

export default function Resume() {

    return (
        <>
        <Container>
            <h2>Katherine Frain's Resume</h2>
            <Button id='education'>Education</Button>
            <UncontrolledCollapse toggler='#education'>
            
                    <CardBody> 
                        <CardTitle> DigitalCrafts </CardTitle>
                        <CardSubtitle>August 2020 – May 2020 </CardSubtitle>
                            <ul><li>Learned to utilize Javascript, Node.js, React.js, CSS, and HTML5 to create full-stack web applications.</li>
                            <li>Developed individual projects like Memory Game (see Github/portfolio link) using object-oriented programming concepts. </li>
                            <li>Worked to utilize third-party APIs like DogCEO and create personal APIs to understand functionality.</li>
                            <li>Developed group projects like Team-Me by using NPM packages like passport to route users to sitemaps, and using CSS to make the project appealing to potential clients.</li></ul>
                    </CardBody>
               
                    <CardBody>
                        <CardTitle>Princeton University, GPA 3.65    September 2014 – June 2018</CardTitle> 
                        <CardSubtitle> September 2014 – June 2018 </CardSubtitle>
                        <ul><li>A.B. in English, Summa Cum Laude.</li>
                            <li>Minors in Creative Writing, Gender & Sexuality Studies.</li>
                            <li>Thesis awarded the 2018 Joyce Carol Oates Award for promising young creative writers.</li>
                            <li>Recipient of Class of 1870 Old English Prize for Shakespearean literature analysis. </li></ul>
                </CardBody>
             
            </UncontrolledCollapse>
          
            <br />
            
        <Button id='experience'>Experience</Button>
        <UncontrolledCollapse toggler='#experience'>

                <CardBody>
                    <CardTitle>Research Assistant, David Dent (New York University, Write for the Future)</CardTitle>
                    <CardSubtitle>June 2018-October 2018</CardSubtitle>
                        <ul>
                            <li>Created up-to-date dossiers on broad political journalism topics (e.g. gender gap in Millennial political affiliation).</li>
                            <li>Taught academic, personal writing skills to Write for the Future clients, helped clients improve reading comprehension skills and develop academic confidence. </li>
                            <li>Organized, transcribed, and filed interview tapes as needed, also designed ‘table of contents’ file to streamline access.</li>
                        </ul>
                    </CardBody>
       
            <CardBody>
                <CardTitle>Agency Intern, Stuart Krichevsky Literary Agency</CardTitle>
                <CardSubtitle>June 2017 - August 2017</CardSubtitle>
                    <ul>
                    <li>Cleared around six months’ worth of general queries in around one month by judging sample pages’ writing quality, plot strength, and marketability and requesting or rejecting further engagement.</li>
                    <li>Prepared reader reports of select proposals and general queries for agents. </li>
                    <li>Filed over a decade’s worth of back royalties by language of printing and date. </li>
                    <li>Aided with general office work (e.g. fixing printer, Nielsen BookScan research).</li>
                    </ul>
                </CardBody>
            
                <CardBody>
                    <CardTitle>Grant Writer, Princeton-Blairstown Center</CardTitle>
                    <CardSubtitle>September 2016 - June 2018</CardSubtitle>
                    <ul>
                        <li>Prepared grant requests to major organizations (e.g. Wells Fargo) in support of education charity. </li>
                        <li>Raised $19,000 of funding from local and national grant-giving organizations. </li>
                        <li>Researched and compiled relevant educational and demographic statistics, including hunger statistics that had not been previously included on grants.</li>
                        </ul>
                </CardBody>
         
        </UncontrolledCollapse>
        <br />
        <Button id ='languages'>Languages</Button>
        <UncontrolledCollapse toggler='#languages'>
        <br />
        <div id='icons'>
            <div>Python<br></br><img src={pythonicon} style={{width:'50px'}} alt='python icon from https://www.flaticon.com/free-icon/python_919852'/>
            </div>
            <div>HTML 5<br /><img src={html5icon} style={{margin:'3%', width:'50px'}} alt='html 5 icon from https://www.flaticon.com/free-icon/html-5_919827' />
            </div>
            <div>JSX<br /><img src={jsxicon} style={{margin:'3%', width:'50px'}} alt='jsx icon from https://www.flaticon.com/free-icon/jsx_541490?term=jsx&page=1&position=4&related_item_id=541490' />
            </div>
            <div> PostgreSQL<br /> <img src={postgresicon} style={{margin:'3%', width:'50px'}} alt ='postgres icon from https://icons8.com/icons/set/postgresql' />
            </div>
            <div>CSS <br /><img src={cssicon} style={{margin:'3%', width: '50px'}} alt='css icon from https://icons8.com/icons/set/css' />
            </div>
            <div>React <br /><img src={reacticon} style={{margin:'3%', width: '50px'}} alt='react icon from https://icons8.com/icons/set/react' />
            </div>
            <div>Restful APIs <br /> <img src={restfulicon} style={{margin: '3%', width:'50px'}} alt='restful API icon from https://icons8.com/icons/set/restful-api' />
            </div></div>
               </UncontrolledCollapse>
        </Container>

        </>
    )
}