import React from "react";
import { Link } from "react-router-dom"; // Dùng Link thay cho <a>
import "../styles/AdminSideBar.css"; 

const AdminSidebar = () => {
    return (
        <div className="sidebar h-100">
            <div className="sidebar-header">
                <h2>Admin</h2>
            </div>
            <ul className="sidebar-menu">
                
                <li>
                    <Link to="/product-manage">🍽 Product</Link>
                </li>
                <li>
                    <Link to="/contact-table">✉️ Contact</Link> {/* Sửa đường dẫn */}
                </li>
                <li>
                    <Link to="/">🏠 Home</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;
