import React, { Component } from 'react';
import '../App.css';
import Utils from '../Utils/Utils'

class TasksInput extends Component{

  constructor(props){
    super(props);

    this.state = {
      label: "New Task",
      buttons:{
        clear: "Clear",
        submit: "Submit"
      },
      task:{
        title: '',
        description: '',
      },
      errorMsg: null,
    };

    //Bidings
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleValueChange(event){
    var task = this.state.task;
    task[event.target.name] = event.target.value;
    this.setState(task);
  }

  clearForm(){
    this.setState({task:{title: '', description: ''}, errorMsg: null,});
  }

  handlerSubmit(){

    if(Utils.StringUtils.isEmpty(this.state.task.title)){
      this.setState({errorMsg : "Title can not be empty"});
    }else{
      var newItem = {
        title:this.state.task.title,
        description:this.state.task.description,
      }
      this.props.onSubmitItem(newItem);
      this.setState({task:{ title: '', description: ''}});
    }

  }

  render(){

    var errorMsg = Utils.StringUtils.isEmpty(this.state.errorMsg) ?
    ('')
    :
    (
      <p className="Error-msg">{this.state.errorMsg}
        <span onClick={() =>{this.setState({errorMsg : ""});}}>X</span>
      </p>
    );

    return(
      <div id="input-box" className="shaded-box">
        <label htmlFor="title">{this.state.label}</label>
        <input type="text" name="title" placeholder="Enter the new task title" onChange={this.handleValueChange} value={this.state.task.title}/>
        <textarea type="text" name="description" placeholder="Enter the new task description" onChange={this.handleValueChange} value={this.state.task.description}/>
        {errorMsg}
        <input type="button" value={this.state.buttons.clear} onClick={this.clearForm} className="clean float-left" />
        <input type="button" value={this.state.buttons.submit} onClick={this.handlerSubmit} className="ok float-right"/>
      </div>
    );
  }
}

export default TasksInput;
