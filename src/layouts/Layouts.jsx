import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layouts = ({children}) => {
    return (
        <div>
            <Header/>
            <main>
            {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layouts;