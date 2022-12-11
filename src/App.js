import './App.css';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import {useEffect, useState} from 'react';
// import UseTodos from './components/useTodos';
import TodoApp from './components/TodoApp';
import './providers/list-context';


function App() {

// const [todos, setTodos] = useState([]);
// const [nonCompletedItems, setNonCompletedItems] = useState(0)
// let leftItemsCounter = nonCompletedItems;
// const [editClass, setEditClass] = useState(false);

// useEffect(()=>{
//   const nonComplete = todos.filter(todo=> todo.completed !== true)
//   setNonCompletedItems(nonComplete.length)
// }, [todos])

//   const addTodo = (title)=>{
//     const newTodos = todos.concat([{id: Date.now() ,title, completed: false, editing: false}]);
//     setTodos(newTodos);
//     // todos = [...todos, {id: Date.now() ,title, completed: false}]; //עוד דרך בשינוי אדרת
//   }

//   const removeTodo = (todoToRemove)=>{ 
//     const newTodos = todos.filter( currentTodo => currentTodo.id != todoToRemove.id);
//     setTodos(newTodos);
//   }


//   const clearAllCompleted = ()=>{ 
//     // console.log('start to del in all completed:',todos);
//     const newTodos = todos.filter(currentTodo => !currentTodo.completed);
//     // console.log('after del all completed:',newTodos);
//     setTodos(newTodos);
//   }

//   const setComplete = (todoToComplete, checkedValue)=>{
//     // console.log(`todoToComplete: ${todoToComplete} checkedValue:${checkedValue}`);
//     todos.forEach((todo)=>{
//         if (todo.id==todoToComplete.id){
//             todo.completed=checkedValue;
//         }
//       }) 
//     if (checkedValue){
//       leftItemsCounter -=1 
//     }
//     else{
//       leftItemsCounter+=1
//     }  
//     setNonCompletedItems(leftItemsCounter);

//   }

// const toggleAllItems = (checkedValue)=>{ 
//   // console.log(checkedValue);
//   const newTodos = todos.map(todo => ({...todo, completed: checkedValue}));
//   console.log(newTodos);
//   setTodos(newTodos)
  
// }
// const classToEditing= (item)=>{
//   if (item.editing){
//     item.editing = false;
//   }else{
//     item.editing = true;
//   }
//   setEditClass(item.editing);
// }


  return (
    <TodoApp></TodoApp>
  );
}

export default App;

