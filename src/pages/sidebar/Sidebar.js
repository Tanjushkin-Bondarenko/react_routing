import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './sidebar.css'


export default function Sidebar() {
  return (
    
<div className="sidebar">
            <nav>
                <ul>
                    <li>
                        <Link to="/statehooks">Built-in React Hooks</Link>
                    </li>
                    <li>
                        <NavLink to="/community">Community</NavLink>
                    </li>
                    <li> 
                        <NavLink to="/resources">Resources</NavLink>
                    </li>   
                    <li>
                        <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                </ul>
            </nav>
        </div>      
   
  )
}
