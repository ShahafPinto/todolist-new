import React from 'react';
import TodoApp from './TodoApp';
import { useRef, useState } from 'react';


function Todos() {
    const [appComponents, setAppComponents] = useState([]);
    let todosComponents = appComponents;
    const nameOfList = useRef();

    const addNewList = ()=>{
        todosComponents = appComponents.concat([nameOfList.current.value]);
        console.log(todosComponents);
        setAppComponents(todosComponents);
    }
    
  return (
    <>
        <input ref={nameOfList} placeholder='type new list name'></input>
        <button onClick={addNewList}>Add List</button>
        {todosComponents.length>0 ? (
            todosComponents.map(item=>(
                <TodoApp key={item} appName={item}></TodoApp>
              ))
        ): 
        (
           <TodoApp  appName={'todos'}/> 
        )}
        
    </>
  )
}

export default Todos;
