function Input(props){
    return(
        <input className={props.className}
            placeholder={props.placeholder}
            autofocus type={props.autofocus}/>
    );
}

export default Input;