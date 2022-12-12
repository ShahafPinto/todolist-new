import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
    // function hendlerSignIn(){
    //     return <Link to={'sign-in'}/>
    // }
  return (
    <>
        <h1>Welcome to my Todos Page!</h1>
        <Link to={`/sign-in`}>Sign in!</Link>
        {/* <button type='button'>Sign in!</button> */}
    </>
  )
}

export default Welcome;
