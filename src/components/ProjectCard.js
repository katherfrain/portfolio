import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import './ProjectCard.css'


export default function projCard(props) { 
        return (
            <>
            <Card centered className='projCard'>
                <CardImg top width = '100%' src={props.screenshotsrc} alt={props.title} />
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>{props.cardtext}</CardText>
                    <Button>
                        <Link to={props.buttonlink}>
                        Check out {props.title} on Github!
                        </Link>
                    </Button>
                </CardBody> 
                </Card>
                <div className ='gamble'>
                    <Switch>
                        <Route path={props.buttonlink} component={() => {
                            window.location.href = props.buttonlink
                        }}/>
                    </Switch>
                </div>

                </>
        )
    }


