import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ErrorPage.css'



const ErrorPage = () => {
    return (
        <section className='container errorpage'>
            <div className='w-75 mx-auto'>
                <Row xs={1} md={1} lg={1} className="g-4">
                    <Card className="text-center border-0 bg-info shadow-lg text-light"> 
                        <Card.Body>
                            <Card.Title> <h1 className='error-title'>404</h1> </Card.Title>
                            <Card.Text>
                                <h2>Sorry, something went wrong!</h2>
                                <p>This page is incidentally inaccessible because of Wrong path. We will back very before long much obliged for your understanding</p>
                            </Card.Text>
                            <Link to='/'>
                                <button className='btn btn-lg btn-primary'>Return Home</button>
                            </Link>
                        </Card.Body>
                       
                    </Card>
                </Row>
            </div>
            
       </section>
    );
};

export default ErrorPage;