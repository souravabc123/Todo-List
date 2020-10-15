import React, { Component } from "react";

class Todo extends Component{

    constructor(props)
    {
        super(props)
      this.handleRemoveEvent= this.handleRemoveEvent.bind(this)
    }
handleRemoveEvent()
{
    this.props.removeTodo(this.props);
}
render()
{
    return(
        <div>
            <button onClick={this.handleRemoveEvent}>Delete</button>
            <li>{this.props.task}</li>
        </div>
    )
}}
export default Todo;
