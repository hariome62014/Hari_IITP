import logo from './logo.svg';
import './App.css';
import { Routes,Route,NavLink } from 'react-router-dom';
import PrivateRoute from './pages/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';


function App() {
 const [isLoggedIn,isSetLoggedIn]=useState(false);
  return (
    <div className="App">
      <div className='container'></div>
      <Navbar isLoggedIn={isLoggedIn} isSetLoggedIn={isSetLoggedIn} />
    <Routes>
 
  <Route path='/' element={<Home/>}></Route>
  <Route path='/Login' element={<Login isSetLoggedIn={isSetLoggedIn}/>}></Route>
 <Route path='/Signup' element={<Signup isSetLoggedIn={isSetLoggedIn}/>}></Route>
  <Route path='/Dashboard' element={
  <PrivateRoute isLoggedIn={isLoggedIn}>
    <Dashboard/>
  </PrivateRoute>
  }></Route>


</Routes>



    </div>
  );
}

export default App;
