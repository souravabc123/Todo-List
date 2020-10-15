import React, { Component } from "react";
import Todo from "../Todo/Todo";
import NewTodo from "../NewTodo/NewTodo";

class TodoList extends Component{

    state={
        todos:[{task:"Default Todo Item"}]
    };
    create(newTodo)
    {
        this.setState({
            todos:[...this.state.todos,newTodo]
        });
    }
    delete(id) {
        this.setState({
          todos: this.state.todos.filter(t => t.id !== id)
        });}
    render()
    {
        const todos= this.state.todos.map(todo=>{
            return <Todo key={todo.id} 
                        task={todo.task}
                        removeTodo={this.delete.bind(this,todo.id)}/>

        });
        return(
            <div>
                <h1>Todo List</h1>
                <NewTodo 
                createTodo = {this.create.bind(this)}/>
                <ul>{todos}</ul>
            </div>
        );
    }
}
export default TodoList;
