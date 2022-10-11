import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Topic.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic
    return (
        <Col>
            <Card className='border-0 shadow pb-3'>
                <div className='special'>
                    <Card.Img variant="top" src={logo}  />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Total Quiz: {total}
                    </Card.Text>
                </Card.Body>
                <Link to={`/topic/${id}`}>
                    <button className='btn btn-primary'> Start practice <span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </span></button>
                </Link>
                
                
            </Card>
        </Col>
    );
};

export default Topic;