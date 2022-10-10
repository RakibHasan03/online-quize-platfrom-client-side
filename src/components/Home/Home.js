import React from 'react';
import './Home.css'
import cover from '../../Images/home-cover.png'
import { useLoaderData } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData().data;
    console.log(topics);
    return (
        <section className='container mt-5 text-center'>
            <div className='w-75 mx-auto'>
                <h1 className='fw-bold'> Welcome to Online Quiz </h1>
                <p> ELearning quizzes can motivate learners to stay focused and keep moving forward. You can challenge learner perceptions to stir up their interest.</p>
                <img src={cover} alt="" className='img-fluid' />
            </div>
            
            <div className='my-5'>
                <Row xs={1} md={2} lg={4} className="g-5">
                    {
                        topics.map(topic => <Topic
                            key={topic.id}
                            topic ={topic}
                        ></Topic>)
                    }

                </Row>
            </div>


        </section>
    );
};

export default Home;