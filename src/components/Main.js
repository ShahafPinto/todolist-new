import List from "./List";

function Main (props){

    function hendelToggleAll(event){
        props.onToggleAll(event.target.checked);
    }

    return(
       <section className="main">
            <input className="toggle-all" type="checkbox" onChange={hendelToggleAll}/>
            <List className="todo-list" items={props.items} onDellItem={props.onDellItem} onSetComplete={props.onSetComplete} onEditClass={props.onEditClass}></List>
        </section> 
    );
}

export default Main;
