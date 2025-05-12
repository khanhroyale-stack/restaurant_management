import React from 'react';

const AboutMenu = (props) => {
    return (
        <div className='d-flex'>
            <div>
                <img src={props.imageUrl} alt="about" />
            </div>
            <div className='ms-3'>
                <h5>{props.title}</h5>
                <p className='w-75'>In the new era of technology we look in the future with certainty life</p>
            </div>
        </div>
    );
};

export default AboutMenu;