import React from 'react';
import '../styles/BrandingLogo.css'
const BrandingLogo = (props) => {
    return (
        <div>
            <div className='container-branding-logo'>
                <img className='branding-logo' src={props.imageURL} alt="" />
            </div>
        </div>
    );
};

export default BrandingLogo;