import List from "./List";

function Main (props){

    function hendelToggleAll(event){

        props.onToggleAll(event.target.checked);
        // if (event.target.checked){
        //     insertCss();
        // }
    }
    // function insertCss(){

    // }
    return(
       <section className="main">
            <input className="toggle-all" type="checkbox" onChange={hendelToggleAll}/>
            <List className="todo-list" items={props.items} onDellItem={props.onDellItem} onSetComplete={props.onSetComplete}></List>
        </section> 
    );
}

export default Main;
