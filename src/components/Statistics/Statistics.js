import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { QuizContext } from '../Root/Root';

const Statistics = () => {

    const data = useContext(QuizContext);
    // console.log(data)
    return (
        <section className='container'>
            <h4 className='mt-5 text-center text-primary fw-semibold'>Recharts About Properties's Total and their Id</h4>
            <div className='w-75 mx-auto my-5 '>
                <Row xs={1} md={1} lg={1} className="g-4">
                    <ResponsiveContainer width="100%"
                    height={400}>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                          
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="id" stroke="#82ca9d" />
                            <CartesianGrid></CartesianGrid>
                        </LineChart>

                    </ResponsiveContainer>
                </Row>
          </div>

        



        </section>
    )

};

    export default Statistics;