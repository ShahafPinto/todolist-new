import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav>
            <div className='navitem'>
                <Link to={`welcome`}>Welcome-Page</Link>
            </div>
            <div className='navitem'>
                <Link to={`todos`}>todos</Link>
            </div>    
        </nav>
    </>
  )
}

export default Navbar;
