import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleQuiz = ({ allQuestion }) => {

    const { question, options, correctAnswer } = allQuestion
    return (
        <Col>
            <Card className='border border-0 shadow'>   
                <Card.Body>
                    <Card.Title>{ question}</Card.Title>
                    <div>

                    </div>  
                </Card.Body>    
            </Card>
        </Col>
    );
};

export default SingleQuiz;