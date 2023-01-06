import * as React from 'react';
// import './style.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
// import Signup from './components/Signup';
import Signup from './components/Signup';
import ProtectedRoutes from './helpers/ProtectedRoutes';


export default function App() {

 

  return (
    <>
    
    <ul>
 
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>

     <Routes>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/signup' element={ <Signup/> }/>
       
      </Routes> 
    </>
  );
}
