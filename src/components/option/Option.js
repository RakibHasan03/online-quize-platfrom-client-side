import React from 'react';

const Option = ({ option, answerHandler }) => {
    return (
        <div class="card mx-auto border-0 " style={{ width: '18rem' }}>

       

            <button onClick={() => { answerHandler(option)}} className='btn btn-light border border-info py-3 text-primary' > { option} </button>  
            
           
            
            {/* <div>
                <input
                    type="radio"
                    value={option}

                /> {option}
            </div> */}

        </div>
    );
};

export default Option;