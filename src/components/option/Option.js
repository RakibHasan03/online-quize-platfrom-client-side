import React from 'react';

const Option = ({option}) => {
    return (
        <div class="card mx-auto border-0" style={{ width: '18rem' }}>
            <button className='btn btn-light border border-info py-3'> { option} </button>

        </div>
    );
};

export default Option;