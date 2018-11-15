import _ from 'lodash';
import React, { Component } from 'react'; //Component as object from react module (also an object)\
import CreateTodo from './create-todo'; //To cak i ne treba
import  TodosList from './todos-list';
import './App.css';
import img256 from './images/to-do64.png'


const todos = [
{
 task: 'make React tutorial',
 isCompleted: false
},
{
 task:'eat dinner',
 isCompleted: false
}
]; //Array sa dva objekta {} koji imaju po 2 key-value pairs-a.




class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: todos,
      counterDiv:'yesV1Opt',
      eraseCompletHide:'allDelParShow',
      myArr: []
    }
  }
 render(){
    return (
      <div className="App">
      <div className='container'>
      <h1 id='todosId'>Todos <img alt='todos img' src={img256} /> </h1>
      <CreateTodo todos={this.state.todos} createTask = {this.createTask.bind(this)} myArr ={this.state.myArr} {...this.props}/> {/*Send this func to createTodo comp to send us task val from INPT*/}
      <TodosList
      todos={this.state.todos}
      myArr = {this.state.myArr}
      myFav = {this.state.myFav}
      countDiv = {this.state.counterDiv}
      hideDelPrg = {this.state.eraseCompletHide}
      toggleTask={this.toggleTask.bind(this)}
      saveTask={this.saveTask.bind(this)}
      deleteTask={this.deleteTask.bind(this)}
      allItemDel={this.allItemDel.bind(this)}/>
      </div>

      </div>
    );
  }



//work IN PROGRESS
  toggleTask(task){
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    this.setState({ todos: this.state.todos})
  };



  createTask(task, itemLen, currInd){
    if(itemLen < 1 ){  //Ako je 1 if
      this.state.todos.push({
        task:task,
        isCompleted:false
      })
      this.setState({
        todos: this.state.todos,
        counterDiv: 'yesV1Opt',
        eraseCompletHide:'allDelParHide',
      })
    }else  if(itemLen >= 1) {  //else
    this.state.todos.push({
      task:task,
      isCompleted:false
    })
    this.setState({
      todos: this.state.todos,
      counterDiv: 'yesV1Opt',
      eraseCompletHide:'allDelParShow',
    })

  }//if else ..
  };


  saveTask(oldTask, newTask){
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask)
    foundTodo.task  = newTask;
    this.setState({todos:this.state.todos})
  };


  deleteTask(taskToDelete, currInd, itemLen){
    _.remove(this.state.todos, todo => todo.task === taskToDelete); //Usin lodash _ functionalities.
    console.log('currently index is:', currInd)
    console.log('u deleteTask funk itemLen je:', itemLen - 1)
    if(currInd === 0 && (itemLen -1) ==  1 ){
      this.setState({
        todos:this.state.todos,
        counterDiv: 'yesV1',
        eraseCompletHide:'allDelParHide'
      })
    }else if( (itemLen -1) == 1){
      this.setState({
        todos:this.state.todos,
        eraseCompletHide:'allDelParHide'
      })

      }else if(currInd === 0 && (itemLen -1) ==  0){
        this.setState({
          todos:this.state.todos,
          counterDiv: 'noV1'
        })
      }


    }
  //};



  allItemDel(e){
    console.log('bal')
    e.preventDefault()
    _.remove(this.state.todos, todo => todo.task);
    this.setState({
      todos:this.state.todos,
      counterDiv: 'noV1'
    })
    };



};
export default App;
