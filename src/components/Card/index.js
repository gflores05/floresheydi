import React from 'react';

import { Card } from 'react-bootstrap';

import './Card.scss';

const card = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <button className="primary" onClick={props.onClick}>{props.buttonText}</button>
            </Card.Body>
        </Card>
    );
}

export default card;