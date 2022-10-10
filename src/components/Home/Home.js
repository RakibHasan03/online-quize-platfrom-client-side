import React from 'react';
import './Home.css'
import cover from '../../Images/home-cover.png'

const Home = () => {
    return (
        <section className='container mt-5 text-center'>
            <div className='w-75 mx-auto'>
                <h1 className='fw-bold'> Welcome to Online Quiz </h1>
                <p> ELearning quizzes can motivate learners to stay focused and keep moving forward. You can challenge learner perceptions to stir up their interest.</p>
                <img src={cover} alt="" className='img-fluid' />
           </div>


        </section>
    );
};

export default Home;