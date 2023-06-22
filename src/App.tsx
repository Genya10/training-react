import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TasksType, Todolist } from './Todolist/Todolist';

function App() {

let tasks1 :Array<TasksType>=[
  {id:1,title:'HTML',isDone:true},
  {id:2,title:'CSS',isDone:true},
  {id:3,title:'JS',isDone:true},
]
let tasks2:Array<TasksType>=[
  {id:1,title:'XXX',isDone:true},
  {id:2,title:'Gladiator',isDone:true},
  {id:3,title:'Friends',isDone:false},
]
let tasks3=[
  {id:1,title:'XXX',isDone:true},
  {id:2,title:'Gladiator',isDone:false},
  {id:3,title:'Friends',isDone:true},
]

  return (
    <div className="App">
    <Todolist title='Learn' tasks={tasks1}/>
    <Todolist title='Movie' tasks={tasks2}/>
    <Todolist title='Game'  tasks={tasks3}/>
  
    <input type='checkbox'/>
    <input placeholder='hello'/>
    <input type='date'/>
    </div>
  );
}



export default App;
