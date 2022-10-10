import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import YourNav from '../Nav/NavBar';

export const QuizContext = createContext([]);

const Root = () => {
    const data = useLoaderData().data;
    console.log(data);
    return (
        <QuizContext.Provider value={data}>
            <YourNav></YourNav>
            <Outlet></Outlet>

        </QuizContext.Provider>
    );
};

export default Root;