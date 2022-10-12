import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Option from '../option/Option';
import { toast } from 'react-toastify';

const SingleQuiz = ({ allQuestion, index }) => {

    const { question, options, correctAnswer } = allQuestion

    const correctHandler = () => {
       toast.success(` Correct Ans: ${correctAnswer}`, { autoClose: 3000 })
    
    }
    
    const answerHandler = (option) => {
        if (correctAnswer === option) {
            toast.success(`Your Ans. "${option}" is correct`, {autoClose: 1500})
        }
        else {
            toast.error(`Your Ans. "${option}" is Wrong`, {autoClose: 1500})
        }
        
    }
    const qsName = ((question.slice(3, (question.length - 4))).replace("&nbsp;", ' ')).replace("&nbsp;", '');

    return (
        <Col className='mt-5'>
            <Card className='border border-0 shadow py-3 text-primary w-75 mx-auto' data-aos="zoom-in">   
                <Card.Body>
                    <Card.Title> <span>Quiz:{index + 1 }</span>  {qsName} <button onClick={correctHandler}
                        className=' position-absolute top-0 end-0 pe-3 pt-3 btn btn-white text-primary border-0'><FontAwesomeIcon icon={faEye} /></button>
                    </Card.Title>
                    <div className='md-w-75 mx-auto mt-4'>
                        <Row xs={2} md={2} lg={2} className="g-4">
                            {
                                
                                options.map((option, index) => <Option
                                    key={index}
                                    option={option}
                                    answerHandler={answerHandler}>
                                    
                                    </Option>)
                            }
                        </Row>
                       
                    </div>  
                </Card.Body>    
            </Card>
        </Col>
    );
};

export default SingleQuiz;