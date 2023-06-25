import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Community } from './pages/community/Community';
import { Resources } from './pages/resources/Resources';
import { Titlepage } from './pages/titlePage/Titlepage';
import Sidebar from './pages/sidebar/Sidebar';
import { Statehooks } from './pages/statehooks/Statehooks';
import { Error } from './pages/error/Error';
import {Users } from './pages/users/Users'
import { UsersPage } from './pages/users/UsersPage';
import  usersData  from './data/users.json';

import {
  createBrowserRouter,
  createRoutesFromElement,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';

const Root = () => {
  return (
    <div className='container'>
      <Home />
      <Sidebar />
      <Outlet />
    </div>
  )
}
const loader = () => {
  console.log(usersData);
  return true;
}
const ourrouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Titlepage />} />
      <Route path='statehooks' element={<Statehooks />} />
      <Route path='about' element={<About />} />
      <Route path='community' element={<Community />} />
      <Route path='resources' element={<Resources />} />
      <Route path='users' element={<Users />} />
      <Route path='users/:userId' loader={loader} element={<UsersPage />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={ourrouter}/>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

