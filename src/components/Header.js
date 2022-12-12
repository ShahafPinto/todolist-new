import {useContext} from "react";
import {ListContex} from '../providers/list-context';

function Header({title}){
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
            <h1>{title}</h1> 
            <input className="new-todo" placeholder="What needs to be done?"
            autofocus onKeyDown={hendlerList}/>
        </header>
    );
}

export default Header;