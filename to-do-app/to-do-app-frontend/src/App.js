/*
Author Gustavo Rocha de Ameida Guimaraes
*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoApp from './TodoApp.js';

//Main Class. It holds components and controls data in memory.
//The items which are created by users are held in this.state.todoItems (Array)
class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <TodoApp />
      </div>
    );
  }
}

export default App;
