/* eslint-disable react/destructuring-assignment */
import _ from 'lodash';
import React, { Component } from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
import './App.css';
import img256 from './images/to-do64.png';
import todos from './initialTodosList';


class App extends Component {
  constructor(props) {
    super(props);
    this.createTask = this.createTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.allItemDel = this.allItemDel.bind(this);


    this.state = {
      todos,
      counterDiv: 'yesV1Opt',
      eraseCompletHide: 'allDelParShow',
      myArr: [],
      warnToggle: ['yesV1Warn', 'noV1Warn', 2, 3],
    };
  }

  toggleTask() {
    this.setState({ todos: this.state.todos });
  }


  createTask(task, itemLen) {
    if (itemLen < 1) {
      this.state.todos.push({
        task,
        isCompleted: false,
      });
      this.setState({
        todos: this.state.todos,
        counterDiv: 'yesV1Opt',
        eraseCompletHide: 'allDelParHide',
      });
    } else if (itemLen >= 1) {
      this.state.todos.push({
        task,
        isCompleted: false,
      });
      this.setState({
        todos: this.state.todos,
        counterDiv: 'yesV1Opt',
        eraseCompletHide: 'allDelParShow',
      });
    }// if else ..
  }


  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }


  deleteTask(taskToDelete, currInd, itemLen) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete); // Using lodash _ functionalities.
    if (currInd === 0 && (itemLen - 1) === 1) {
      this.setState({
        todos: this.state.todos,
        counterDiv: 'yesV1',
        eraseCompletHide: 'allDelParHide',
      });
    } else if ((itemLen - 1) === 1) {
      this.setState({
        todos: this.state.todos,
        eraseCompletHide: 'allDelParHide',
      });
    } else if (currInd === 0 && (itemLen - 1) === 0) {
      this.setState({
        todos: this.state.todos,
        counterDiv: 'noV1',
      });
    }
  }
  // };


  allItemDel(e) {
    // console.log('sve');
    e.preventDefault();
    _.remove(this.state.todos, todo => todo.task);
    /* this.setState({
      todos:this.state.todos,
      counterDiv: 'noV1',
      warnToggle:['noV1Warn', 'yesV1Warn'],
    })
    */
    this.setState(prevState => (
      {
        todos: this.state.todos,
        counterDiv: 'noV1',
        warnToggle: [...prevState.warnToggle.splice(0, 1), ...prevState.warnToggle.splice(2)], // ?????????
      }));
    // console.log('sada', this.state);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 id="todosId">Todos <img alt="todos img" src={img256} /> </h1>
          <CreateTodo
            allProps={this}
            todos={this.state.todos}
            createTask={this.createTask}
            myArr={this.state.myArr}
            {...this.props}
          />
          <TodosList
            todos={this.state.todos}
            myArr={this.state.myArr}
            myFav={this.state.myFav}
            countDiv={this.state.counterDiv}
            hideDelPrg={this.state.eraseCompletHide}
            toggleTask={this.toggleTask}
            saveTask={this.saveTask}
            deleteTask={this.deleteTask}
            allItemDel={this.allItemDel}
          />
        </div>

      </div>
    );
  }
}
export default App;
