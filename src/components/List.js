import { useState } from "react";

function List(props){
    // const [editClass, setEditClass] = useState(false);

    function hendlerItemToComplete(item, event){
        // console.log(item);
        props.onSetComplete(item ,event.target.checked);
        // console.log('del func is on');
    }

    function hendlerDoubleClickItem(item){
        console.log('double clicked!');
        props.onEditFunc(item);
    }

    return(
        
        <ul className="todo-list">
            {props.items.map(item =>(
                <li className= {'todo-list'+(item.completed ? ' completed' : '')+(item.editing? ' editing': '')}>
                    <div className="view">
                        <input onChange={(event)=>hendlerItemToComplete(item,event)} className="toggle" type="checkbox" itemtitle={item.title}/>
                        <label onDoubleClick={()=>hendlerDoubleClickItem(item)}>{item.title}</label>
                        <button onClick={()=>props.onDellItem(item)} 
                                className="destroy" itemtitle={item.title}>
                        </button>
                    </div>
                    <input className="edit" />
                </li>
            ))}
        </ul>
    );
}

export default List;