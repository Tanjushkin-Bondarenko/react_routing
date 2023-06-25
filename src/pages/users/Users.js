import React from 'react';
import { Link } from "react-router-dom";

export const Users = () => {
    return (
        <div>
            <ul>
                <h1>Users:</h1>
                <li><Link to="/users/walles">John Walles</Link></li>
                <li><Link to="/users/beanit">Jhim Beanit</Link></li>
            </ul>
        </div>
    )
}