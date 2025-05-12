import React from 'react';
import '../styles/BrowserMenu.css'
const BrowseMenu = (props) => {
    
    return (
        <div className='browser-menu-container'>
            <img className='' src={props.url} alt="food" />
            <h3>{props.title}</h3>
            <p>In the new era of technology we look in the future with certainty and pride for our life</p>
            <a href="/menu">Explore Menu</a>
        </div>
    );
};

export default BrowseMenu;