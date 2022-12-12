import React from 'react';
import { useRef, useState } from 'react';
// import TodoApp from './TodoApp';
import '../providers/list-context';

function SignIn() {
    const [appComponents, setAppComponents] = useState(['todos']);
    let todosComponents = appComponents;
  
    const addNewList = ()=>{
      todosComponents = appComponents.concat([nameOfList.current.value]);
      console.log(todosComponents);
      setAppComponents(todosComponents);
    }
  
    const nameOfList = useRef();
  
    const [users,setUsers] = useState([]);
    let newUsersList = users;
  
    const currentUserName = useRef();
    const currentUserPassword = useRef();
  
    const addNewUser = ()=>{
      newUsersList = users.concat([{name:currentUserName, password: currentUserPassword}]);
      setUsers(newUsersList);
    }
  return (
    <> 
    {/* {users.length>0 ?(
          <>
          <input ref={nameOfList} type='text'></input>
          <button onClick={addNewList} className='newlistbutton'>click for new todoList</button>
          {todosComponents.map(item=>(
            <TodoApp key={item} appName={item}></TodoApp>
          ))}
          </>
        )  */}
    
        <input ref={currentUserName} type='text' placeholder={'username'}></input>
        <input ref={currentUserPassword} type='text' placeholder={'password'}></input>
        <button onClick={addNewUser} className='newlistbutton'>sign in</button> 
    </>
  )
}

export default SignIn
