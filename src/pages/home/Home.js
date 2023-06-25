import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'


export const Home = ()=> {
  return (
      <div className='home'>
          <Link to="/">
          <h2>React documentation page</h2>
          <h4>Stady React</h4>
          </Link>
    </div>
  )
}
