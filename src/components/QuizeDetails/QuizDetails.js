import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const QuizDetails = () => {

    const details = useLoaderData().data;
    const { name, questions } = details
    console.log(questions)

    return (
        <section className='container mt-5 text-center'>
            <h4 className='fw-semibold text-primary'>Quiz Of {name}</h4>

            <div className='mt-5 pb-5'>
                <Row xs={1} md={1} lg={1} className="g-4">
                    {
                        questions.map((question, index)=> <SingleQuiz
                            key={question.id}
                            allQuestion={question}
                            index ={index}
                        
                        >
                            
                        </SingleQuiz>)
                    }
                </Row>
            </div>
            
       </section>
    );
};

export default QuizDetails;