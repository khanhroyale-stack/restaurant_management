import React from 'react';
import '../styles/UniqueServiceCard.css'
const UniqueServiceCard = (props) => {
    return (
        <div className='container-unique-card'>
            <div className='img-container-unique-card'>
                <img src={props.imageURL} alt="" />
            </div>
            <div>
                <h3 className='mt-3'>{props.title}</h3>
                <p>In the new era of technology we look in the future with certainty and pride for our life</p>
            </div>
        </div>
    );
};

export default UniqueServiceCard;