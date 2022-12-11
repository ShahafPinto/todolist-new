import React from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {ListContex} from '../providers/list-context';
import {TodosContex} from '../providers/todo-context';
import UseTodos from './useTodos';

function TodoApp() {
    const todoApi = UseTodos();

  return (
    <ListContex.Provider value={todoApi}>
        <div className="todoapp">
            <Header/>
            <Main />
            <Footer />
        </div>
    </ListContex.Provider>
  )
}

export default TodoApp
