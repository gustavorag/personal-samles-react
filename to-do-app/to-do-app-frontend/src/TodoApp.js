/*
Author Gustavo Rocha de Ameida Guimaraes
*/
import React, { Component } from 'react';

//Importing Components and Utils
import TasksInput from './Components/TasksInput';
import TodoList from './Components/TodoList';
import Login from './Components/Login';
import BackendService from './Services/BackendService';
//Main Class. It holds components and controls data in memory.
//The items which are created by users are held in this.state.todoItems (Array)
class App extends Component {

  constructor(props){
    super(props);

    this.keyCounter = 0;

    this.state = {
      login: true,
      loginFailsMsg: null,
      // todoItems:BackendService.getTasks(),
      todoItems:[],
    }

    // this.doLogin = this.doLogin.bind(this);
    this.loadTasks = this.loadTasks.bind(this);
    this.addTask = this.addTask.bind(this);
    this.updateTaks = this.updateTaks.bind(this);
    this.deleteTask = this.deleteTask.bind(this);

  }

  componentDidMount(){
    BackendService.getTasks(null, this.loadTasks);
  }

  loadTasks(error, tasks){
    this.setState({todoItems: tasks})
  }

  addTask(task){
    BackendService.postTask(task, (error, addedTask) => {
      if(error){
        console.log("ERROR: "+error)
      }else{
        this.setState({todoItems: this.state.todoItems.concat([addedTask])});
      }
    });

  }

  updateTaks(task){
    BackendService.updateTask(task, (error, updatedTask) => {
      if(error){
        console.log("ERROR: "+error)
      }else{
        this.setState({todoItems: this.state.todoItems.map((item) =>{
          if(item._id === updatedTask._id){
            return updatedTask;
          }else{
            return item;
          }
        })});
      }
    });
  };

  deleteTask(task){
    BackendService.deleteTask(task, (error, deletedTask) => {
      if(error){
        console.log("ERROR: "+error)
      }else{
        this.setState({todoItems: this.state.todoItems.filter((item) =>{
          return item._id !== task._id;
        })});
      }
    });
  };


  render() {

    var pageContent = !this.state.login ?
    (
      <div>
        <Login onLogin={this.doLogin}/>
      </div>
    )
    :
    (
      <div id="todo-app-content">
        <TasksInput onSubmitItem={(item) => this.addTask(item)}/>
        <TodoList items={this.state.todoItems} onMarkAsDone={this.updateTaks} onDeleteTask={this.deleteTask}/>
      </div>
    )

    return (
      <div id="todo-app">
        <div id="todo-app-header">
          <h2>To Do App</h2>
        </div>
        {pageContent}
      </div>
    );
  }
}

export default App;
