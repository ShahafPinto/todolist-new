
function List(props){

    function hendlerEnter(event,item){
        if (event.key == 'Enter'){
            item.title = event.target.value;
            props.onEditClass(item);
        }
    }
    return(
        
        <ul className="todo-list">
            {props.items.map(item =>(
                <li className= {'todo-list'+(item.completed ? ' completed' : '')+(item.editing? ' editing': '')}>
                    <div className="view">
                        <input onChange={(event)=>props.onSetComplete(item ,event.target.checked)} 
                                className="toggle" type="checkbox" checked={item.completed} itemtitle={item.title}/>
                        <label onDoubleClick={()=>props.onEditClass(item)}>{item.title}</label>
                        <button onClick={()=>props.onDellItem(item)} 
                                className="destroy" itemtitle={item.title}>
                        </button>
                    </div>
                    <input className="edit" onKeyDown={(event)=>hendlerEnter(event,item)} defaultValue={item.title}/>
                </li>
            ))}
        </ul>
    );
}

export default List;