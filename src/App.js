// import { useRef, useState } from 'react';
import './App.css';
// import SignIn from './components/SignIn';
// import TodoApp from './components/TodoApp';
import './providers/list-context';
// import Welcome from './components/Welcome';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
 
  return(
    <>
      <Navbar />
      <Outlet />
    </>
  )  
}

export default App;

