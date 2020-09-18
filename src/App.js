import React, { useEffect, useState } from 'react';
import {Button,FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';
import Todo from './components/Todo';
import db from './Firebase';
import firbase from 'firebase';

function App() {
const [todos,setTodos] = useState(['']);
const [input,setInput] = useState('');
useEffect(() => {
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {

   // console.log(snapshot.docs.map(doc=>doc.data()));
    setTodos(snapshot.docs.map(doc =>({id: doc.id,todo: doc.data().todo})))
  })
 
}, []);
const addTodo = (e)=>{
  e.preventDefault();
  db.collection('todos').add({
    todo:input,
    timestamp:firbase.firestore.FieldValue.serverTimestamp()
  })
setInput(''); 
}
  return (
    <div className="App">
      <h1>REACT TODO APP</h1>
      <form>
      
      <FormControl>
        
        <InputLabel>Write a TODO</InputLabel>
        <Input value={input} onChange = {e=> setInput(e.target.value)} />
      </FormControl>
      
      <Button id="margin-button" disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
      Add todo
</Button>

    </form>
    
    <ul>
      {todos.map(todo=>(
        <Todo todo = {todo} />
      ))}
    </ul>
    </div>
  );
}

export default App;
