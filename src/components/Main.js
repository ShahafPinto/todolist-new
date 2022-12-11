import {useContext} from "react";
import {ListContex} from '../providers/list-context';
import List from "./List";

function Main (){
    const {toggleAllItems} = useContext(ListContex);

    function hendelToggleAll(event){
        toggleAllItems(event.target.checked);
    }

    return(
       <section className="main">
            <input className="toggle-all" type="checkbox" onChange={hendelToggleAll}/>
            <List className="todo-list"></List>
        </section> 
    );
}

export default Main;
