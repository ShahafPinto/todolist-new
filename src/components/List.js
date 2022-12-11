import {useContext} from "react";
import {ListContex} from '../providers/list-context';

function List(){
    const {todos, setComplete, removeTodo, classToEditing} = useContext(ListContex);

    function hendlerKey(event,item){
        if (event.key == 'Enter'){
            item.title = event.target.value;
            classToEditing(item);
        }
    }
    return(
        
        <ul className="todo-list">
            {todos.map(item =>(
                <li key={item.id} className= {'todo-list'+(item.completed ? ' completed' : '')+(item.editing? ' editing': '')}>
                    <div className="view">
                        <input onChange={(event)=>setComplete(item ,event.target.checked)} 
                                className="toggle" type="checkbox" checked={item.completed} itemtitle={item.title}/>
                        <label onDoubleClick={()=>classToEditing(item)}>{item.title}</label>
                        <button onClick={()=>removeTodo(item)} 
                                className="destroy" itemtitle={item.title}>
                        </button>
                    </div>
                    <input className="edit" onKeyDown={(event)=>hendlerKey(event,item)} defaultValue={item.title}/>
                </li>
            ))}
        </ul>
    );
}

export default List;