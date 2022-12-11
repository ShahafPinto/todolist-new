import {useContext, useEffect, useRef, useState} from "react";
import {ListContex} from '../providers/list-context';

function Footer(props){
    const {clearAllCompleted, leftItemsCounter} = useContext(ListContex);

    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{leftItemsCounter}</strong> items left</span>
            <button onClick={()=>clearAllCompleted()} 
                    className="clear-completed">Clear completed</button>
        </footer>
    );
}

export default Footer;