import React from 'react';
import { useRef, useState } from 'react';

function UseUsers() {
    const [users,setUsers] = useState([]);
    let newUsersList = users;
  
    const currentUserName = useRef();
    const currentUserPassword = useRef();
    const [currentUser, setCurrentUser] = useState(null);
    let currUser = currentUser;

    const addNewUser = ()=>{
      newUsersList = newUsersList.concat([{name:currentUserName.current.value, password: currentUserPassword.current.value}]);
      currUser = {name: currentUserName.current.value, password: currentUserPassword.current.value};
      console.log(newUsersList);
      setCurrentUser(currUser);
      setUsers(newUsersList);
    }
    
    return (
    {users,
    setUsers,
    newUsersList,
    addNewUser,
    currentUserName,currUser,
    currentUserPassword, currentUser, setCurrentUser}
  )
}

export default UseUsers;
