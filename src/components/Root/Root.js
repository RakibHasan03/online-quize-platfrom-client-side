import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import YourNav from '../Nav/NavBar';

export const QuizContext = createContext([]);

const Root = () => {
    const data = useLoaderData().data;
    // console.log(data);
    return (
        <QuizContext.Provider value={data}>
            <YourNav></YourNav>
            <Outlet></Outlet>
            <Footer></Footer>

        </QuizContext.Provider>
    );
};

export default Root;