
function Footer(props){
    // function MakeClearAllCompleted(event){
    //     props.onClearAll();
        // console.log('');
    // }
    // function nonCompletedItems(){
    //     props.itemLeftCpunt();
    // }

    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{props.itemLeftCount}</strong> items left</span>
            <button onClick={()=>props.onClearAll()} className="clear-completed">Clear completed</button>
        </footer>
    );
}

export default Footer;