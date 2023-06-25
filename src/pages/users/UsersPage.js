import React from "react";
import './users.css';
import { Link, useLoaderData} from 'react-router-dom';

export const UsersPage = () => {
    const user = useLoaderData();
    return (
        <div className="users-page">
            <Link to="/users">Back to users</Link>
            <img src={user.img} alt="avatar"/>
            <h2>User page</h2>
            <h3>{user.name}</h3>
            <h3>{user.age}</h3>
            <h3>{user.email}</h3>
            

        </div>
        
    )

}