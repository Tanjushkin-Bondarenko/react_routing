import React from "react";
import './users.css';
import { Link } from 'react-router-dom';

export const UsersPage = () => {
    return (
        <div className="users-page">
            <Link to="/users">Back to users</Link>
            <h2>User page</h2>
        </div>
        
    )

}