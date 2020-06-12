import React, { Component } from 'react'

export class AddTodoItem extends Component {

  state = {
    id: 1,
    title: '',
    completed: false
  }

  onChange=(e) => this.setState({ [e.target.name]: e.target.value});

  onSubmit=(e)=> {
    e.preventDefault();
    this.props.addToDo(this.state.title);
    this.setState({title:''})
  }

   
    render() {
        return (
          <form onSubmit={this.onSubmit} style={{display:'flex'}}>
            <input 
             type="text" 
             name="title"
             style={{flex:'10',padding: '5px'}}
             placeholder="Add todo Item ..."
             value={this.state.title}
             onChange={this.onChange}
             />
            <input 
              type="submit" 
              value="Submit" 
              className="btn"
              style={{flex:'1'}}
              />
          </form>
        )
    }
}

export default AddTodoItem
