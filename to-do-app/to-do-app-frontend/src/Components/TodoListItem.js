import React, { Component } from 'react';

class TodoListItem extends Component {

  constructor(props){
    super(props);

    this.state = {
      showDesc: false,
    }
    // Bindings
    this.showHideDesc = this.showHideDesc.bind(this);
  }

  showHideDesc(){
    this.setState({showDesc: !this.state.showDesc});
  }

  render(){
    return (
      <li>
        <div className={"task-content"+(this.props.item.done ? " task-done": "")}>
          <p className="task-title" >{this.props.item.title}</p>
          <span className={this.state.showDesc ? 'turn-arrow-down' : ''} onClick={this.showHideDesc}>❯</span>
          <p className={"task-desc"+(this.state.showDesc ? '' : ' hidden')}>{this.props.item.description}</p>
        </div>
        <div className="task-actions">
          {
            this.props.item.done ?
            (null)
            :
            (
              <span onClick={()=>{this.props.onCheck(this.props.item)}}>
                <i className="fas fa-check"></i>
              </span>
            )
          }

          <span onClick={()=>{this.props.onDelete(this.props.item)}}>
            <i className="fas fa-trash" ></i>
          </span>
        </div>
      </li>
    )
  }
}

export default TodoListItem;
