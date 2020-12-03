import React from 'react';
import profPic from './images/profpic.png';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import './ProfileCard.css'

export default function ProfileCard() {
    return (
        <Card className='profCard' id='zeroMarginHere'>
            <CardBody>
                <CardImg className='profpic' src={profPic}></CardImg>
                <CardTitle tag="h3">Katherine Frain</CardTitle>
                <CardText>
                    Aspiring Software Developer. I used to write poetry, now I write D&D adventures. Fan of all animation, including She-Ra and @keyframes.
                </CardText>
            </CardBody>
        </Card>
    )
}