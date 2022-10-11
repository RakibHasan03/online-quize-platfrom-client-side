import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Option from '../option/Option';

const SingleQuiz = ({ allQuestion }) => {

    const { question, options, correctAnswer } = allQuestion
    return (
        <Col>
            <Card className='border border-0 shadow'>   
                <Card.Body>
                    <Card.Title>{ question}</Card.Title>
                    <div className='w-75 mx-auto'>
                        <Row xs={2} md={2} lg={2} className="g-5">
                            {
                                
                                options.map(option => <Option
                                option={option}></Option>)
                            }
                        </Row>
                       
                    </div>  
                </Card.Body>    
            </Card>
        </Col>
    );
};

export default SingleQuiz;