import React from 'react';
import './error.css'
import { useRouteError } from 'react-router-dom';

export const Error = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <div id="error-page" className="error">
            <h1>OOps!</h1>
            <p>Sorry,this page doesn't exist.</p>
        </div>
  )
}
