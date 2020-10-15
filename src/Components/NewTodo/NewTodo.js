import React, { Component } from "react";
import uuid from "uuid/v1";

class NewTodo extends Component
{

    state={ task:" "}

handleChangeEvent(event)
{
    this.setState({
        [event.target.name]:event.target.value
    });

}
handleSubmit(event)
{
    event.preventDefault();
    this.props.createTodo({...this.state, id : uuid()});
    this.setState({task :""});
}

render()
{
    return(<div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor='task'>New Task</label>
        <input
            type="text"
            placeholder="Enter New Task"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChangeEvent.bind(this)}></input>
            <button>Submit</button>
        </form>
        </div>
    )
}}
export default NewTodo