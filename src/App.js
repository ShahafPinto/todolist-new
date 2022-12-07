import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {useEffect, useState} from 'react';

function App() {
  // let todos = [
  //   // {title: 'Learn React', completed: false, id:1},
  //   // {title: 'Listen to Nir React', completed: false, id:2},
  //   // {title: 'Learn JS', completed: false, id:3}
  // ];

const [todos, setTodos] = useState([]);
const [nonCompletedItems, setNonCompletedItems] = useState(0)
let leftItemsCounter = nonCompletedItems;

useEffect(()=>{
  const nonComplete = todos.filter(todo=> todo.completed !== true)
  setNonCompletedItems(nonComplete.length)
}, [todos])

  const addTodo = (title)=>{
    const newTodos = todos.concat([{id: Date.now() ,title, completed: false}]);
    // console.log(todos);
    setTodos(newTodos);
    // todos = [...todos, {id: Date.now() ,title, completed: false}]; //עוד דרך בשינוי אדרת
  }

  const removeTodo = (todoToRemove)=>{ 
    const newTodos = todos.filter( currentTodo => currentTodo.id != todoToRemove.id);
    setTodos(newTodos);
    console.log(todos);
  }


  const clearAllCompleted = ()=>{ 
    const newTodos = todos.filter(currentTodo => !currentTodo.completed);
    console.log(newTodos);
    setTodos(newTodos);
  }

  const setComplete = (todoToComplete, checkedValue)=>{
    console.log(`todoToComplete: ${todoToComplete} checkedValue:${checkedValue}`);
    todos.forEach((todo)=>{
        if (todo.id==todoToComplete.id){
            todo.completed=checkedValue;
            // setTodos(newTodos);
        }
      }) 
    if (checkedValue){
      leftItemsCounter -=1 
    }
    else{
      leftItemsCounter+=1
    }  
    
    setNonCompletedItems(leftItemsCounter);
    console.log(todos);
    // setTodos(newTodos)
    // console.log('setcomplete done');
  }

const toggleAllItems = (checkedValue)=>{ 
  console.log(checkedValue);
  const newTodos = todos.map(todo => ({...todo, completed: checkedValue}));
  console.log(newTodos);
  // setTodos(newTodos);
}



  return (
    <div className="todoapp">
      <Header onAddItem={addTodo} />
      <Main items={todos} onToggleAll={toggleAllItems} onDellItem={removeTodo} onSetComplete={setComplete}/>
      <Footer onClearAll={clearAllCompleted} itemLeftCount={nonCompletedItems}/>
    </div>
  );
}

export default App;
