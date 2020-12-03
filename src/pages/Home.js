import React from 'react';
import { Col, Row } from 'reactstrap';
import ProfileCard from '../components/ProfileCard';
import Resume from '../components/Resume'
import './Home.css';

export default function Home(){
    return (
        <div id='totalHome'>
            <Row>
                <Col>
                    <ProfileCard />
                </Col>
                
                <Col >
                    <Resume />
                </Col>

            </Row>
            
        </div>
    )
}