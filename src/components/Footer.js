
function Footer(props){
    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{props.itemLeftCount}</strong> items left</span>
            <button onClick={()=>props.onClearAll()} 
                    className="clear-completed">Clear completed</button>
        </footer>
    );
}

export default Footer;