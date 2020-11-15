import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardTitle, Collapse, Container } from 'reactstrap';

export default function Resume() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        console.log('fired')
        setIsOpen(!isOpen);
    }

    return (
        <>
        <Container>
            <h2>Katherine Frain's Resume</h2>
            <Button onClick={toggle} className='education'>Education</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody> 
                        <h3> DigitalCrafts    August 2020 – May 2020 </h3>
                            <ul><li>Learned to utilize Javascript, Node.js, React.js, CSS, and HTML5 to create full-stack web applications.</li>
                            <li>Developed individual projects like Memory Game (see Github/portfolio link) using object-oriented programming concepts. </li>
                            <li>Worked to utilize third-party APIs like DogCEO and create personal APIs to understand functionality.</li>
                            <li>Developed group projects like Team-Me by using NPM packages like passport to route users to sitemaps, and using CSS to make the project appealing to potential clients.</li></ul>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <h3>Princeton University, GPA 3.65    September 2014 – June 2018</h3> 
                        <ul><li>A.B. in English, Summa Cum Laude.</li>
                            <li>Minors in Creative Writing, Gender & Sexuality Studies.</li>
                            <li>Thesis awarded the 2018 Joyce Carol Oates Award for promising young creative writers.</li>
                            <li>Recipient of Class of 1870 Old English Prize for Shakespearean literature analysis. </li></ul>
                </CardBody>
                </Card>
            </Collapse>
        <Button onClick={toggle} className='experience'>Experience</Button>
        <Collapse isOpen={isOpen}>
            <Card>
                    <CardTitle>Research Assistant</CardTitle>
                    <CardSubtitle>June 2018-October 2018</CardSubtitle>
                    <CardBody>
                        <ul>
                            <li>Created up-to-date dossiers on broad political journalism topics (e.g. gender gap in Millennial political affiliation).</li>
                                <li>Taught academic, personal writing skills to Write for the Future clients, helped clients improve reading comprehension skills and develop academic confidence. </li>
                                <li>Organized, transcribed, and filed interview tapes as needed, also designed ‘table of contents’ file to streamline access.</li>
                        </ul>
                    </CardBody>
                    </Card>
        </Collapse>
        </Container>

        </>
    )
}