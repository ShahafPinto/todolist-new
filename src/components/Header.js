import {useContext, useEffect, useRef, useState} from "react";
import {ListContex} from '../providers/list-context';

function Header(){
    const { addTodo } = useContext( ListContex);

    

    function hendlerList(event){
        if (event.key == 'Enter'){
            const task = event.target.value;
            event.target.value = '';
            addTodo(task);
        } 
    }
    return(
        <header className="header">
            <h1>todos</h1> 
            <input className="new-todo" placeholder="What needs to be done?"
            autofocus onKeyDown={hendlerList}/>
        </header>
    );
}

export default Header;