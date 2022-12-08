
function Header(props){
    function hendlerList(event){
        if (event.key == 'Enter'){
            const task = event.target.value;
            event.target.value = '';
            props.onAddItem(task);
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