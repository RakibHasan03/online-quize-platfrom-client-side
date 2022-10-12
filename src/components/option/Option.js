import React from 'react';

const Option = ({ option, answerHandler, index }) => {
    return (
        <div className="card mx-auto border-0  " style={{ width: '18rem' }}>

           
            <button className='btn btn-light border border-info  text-primary' >
                <div className='d-flex align-items-center justify-content-between'>
                    <input onClick={() => { answerHandler(option) }} className='d-block' type="radio" id={option} name="age" value={index} />
                    <label className='d-block w-100 py-3' htmlFor={option}> {option}</label>
                </div>
            </button> 
     
           
            
           



            

        </div>
    );
};

export default Option;