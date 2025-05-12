import React from 'react';
import AdminHeader from './AdminHeader';
import AdminSideBar from './AdminSideBar';
import '../styles/AdminLayouts.css'
const AdminLayouts = ({ children }) => {
    return (
        <div className='admin-layout-container'>
            <div>
                <AdminSideBar />
            </div>
            <div>
                <AdminHeader />
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayouts;