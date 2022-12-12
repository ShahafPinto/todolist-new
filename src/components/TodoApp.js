import React from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {ListContex} from '../providers/list-context';
import UseTodos from './useTodos';

function TodoApp({appName}) {
    const todoApi = UseTodos();

  return (
    <ListContex.Provider value={todoApi}>
        <div className="todoapp">
            <Header title={appName}/>
            <Main />
            <Footer />
        </div>
    </ListContex.Provider>
  )
}

export default TodoApp
