import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {UsersContex} from '../providers/users-context';

function Navbar() {
    const {currUser, 
         setCurrentUser} = useContext(UsersContex);

  return (
    <>
        <nav>
            <div className='navitem'>
                <Link to={`welcome`}>Welcome-Page</Link>
            </div>
            <div className='navitem'>
                <Link to={`todos`}>todos</Link>
            </div>    
        
        {currUser && (
            <>
                <div className='navitem enteruser'>
                    Hello {currUser.name}!
                </div>
                <button onClick={()=>setCurrentUser(null)}>sign out</button>
            </>
        )}
        </nav>
    </>
  )
}

export default Navbar;
