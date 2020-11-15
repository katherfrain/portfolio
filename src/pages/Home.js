import React from 'react';
import { Col, Row } from 'reactstrap';
import ProfileCard from './components/ProfileCard';
import Resume from './components/Resume'
import './Home.css';

export default function Home(){
    return (
        <div id='totalHome'>
            <Row lg="6"> 
            <Col lg="2">
            <ProfileCard />
            </Col>

            <Col lg="2">
            <Resume />
            </Col>
            </Row>
            
        </div>
    )
}