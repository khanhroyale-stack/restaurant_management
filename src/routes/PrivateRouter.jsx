import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ element: Element, role }) => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        return <Navigate to="/login" replace />; 
    }

    if (user.role !== role) {
        return <Navigate to="/" replace />; 
    }

    return <Element />;
};

export default PrivateRouter;
