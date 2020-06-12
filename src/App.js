import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from './components/Header';
import AddTodoItem from './components/AddTodoItem';
import './App.css';
import uniqueid from 'uniqid'

class App extends Component {
  state = {
    todos:[
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Study Duolingo',
        completed: true
      },
      {
        id: 3,
        title: 'Look over Study Gaps in SalesForce',
        completed: false
      },
    ]
  }

  markComplete=(id)=>
  {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      });
  }

  delTodo=(id)=>
  {
    this.setState(
      {
        todos: [...this.state.todos.filter(
          todo => todo.id !== id
        )]
      }
    )
  }

  addToDo=(title) =>
  {
    const newToDo = {
      id:uniqueid() ,
      title:title,
      completed: false
    } 
     this.setState(
       {
        todos: [...this.state.todos,newToDo]
       }
     )
  }

  render() {
    return (
      <div>
        <div className="container">
          <Header />
          <AddTodoItem addToDo={this.addToDo}/>
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
            
          />
        </div>
      </div>
    );
  }
}

export default App;
