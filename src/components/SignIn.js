import React, { useContext } from 'react';
// import { useRef, useState } from 'react';
import '../providers/list-context';
// import { Link } from 'react-router-dom';
import {UsersContex} from '../providers/users-context';
// import UseTodos from './useTodos';

function SignIn() {
  const {currentUserName,currentUserPassword,addNewUser} = useContext(UsersContex);
    // const [users,setUsers] = useState([]);
    // let newUsersList = users;
  
    // const currentUserName = useRef();
    // const currentUserPassword = useRef();
  
    // const addNewUser = ()=>{
    //   newUsersList = newUsersList.concat([{name:currentUserName.current.value, password: currentUserPassword.current.value}]);
    //   console.log(newUsersList);
    //   return <Link to={'todos'}></Link>
    //   // setUsers(newUsersList);
    // }
  return (
    <>    
        <input ref={currentUserName} type='text' placeholder={'enter username'}></input>
        <input ref={currentUserPassword} type='text' placeholder={'enter password'}></input>
        <div>
          <button type='button' onClick={addNewUser} className='newlistbutton'>Click to Sign-in!</button> 
        </div>
        
    </>
  )
}

export default SignIn
