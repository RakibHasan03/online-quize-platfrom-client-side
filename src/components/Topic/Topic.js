import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Topic.css'

const Topic = ({ topic }) => {
    const { name, logo, total } = topic
    return (
        <Col >
            <Card className='card-background border-0 shadow'>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Total Quiz: {total}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Topic;