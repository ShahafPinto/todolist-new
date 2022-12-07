
function List(props){

    function hendlerItemToComplete(item, event){
        // console.log(item);
        props.onSetComplete(item ,event.target.checked);
        // console.log('del func is on');
    }
    return(
        
        <ul className="todo-list">
            {props.items.map(item =>(
                <li className="todo-list">
                    <div className="view">
                        <input onChange={(event)=>hendlerItemToComplete(item,event)} className="toggle" type="checkbox" itemtitle={item.title}/>
                        <label>{item.title}</label>
                        <button onClick={()=>props.onDellItem(item)} className="destroy" itemtitle={item.title}></button>
                    </div>
                    <input className="edit" />
                </li>
            ))}
        </ul>
    );
}

export default List;