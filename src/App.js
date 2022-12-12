import './providers/list-context';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import {UsersContex} from './providers/users-context';
import UseUsers from './components/UseUsers';

import './App.css';

function App() {
    const usersApi = UseUsers();

  return(
    <UsersContex.Provider value={usersApi}>
      <Navbar />      
      <Outlet />
    </UsersContex.Provider>
  )  
}

export default App;

