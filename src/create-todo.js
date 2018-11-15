import React, { Component } from 'react'; //Component as object from react module (also an object)
import _ from 'lodash';
import './App.css';


class CreateTodo extends Component {
    constructor(props){
    console.log(props)
    super(props)
    this.state = {
        error:null,
        inpDivSt: 'createInpt'
    }
    };


inptStyle(){
    this.setState({
        inpDivSt: 'createInpt1'
    })
}
 
renderError(){
    if(!this.state.error) {return null}
    if(this.state.error === 'Please enter your task'){
        return <div className='yesV1Warn' style={{color:'black'}}> {this.state.error}  &nbsp;<i className='fa fa-exclamation errorRed'></i></div>
    } 
    return <div className='yesV1Warn' style={{color:'black'}}>Task  ( <span className='errorRed'>{this.state.error}</span> )  already exist &nbsp;<i className='fa fa-exclamation errorRed'></i></div>
};


  render(){
    return (
      <form id='formId' onSubmit={this.handleCreate.bind(this)}>
          <input  onChange={this.inptStyle.bind(this)} className={this.state.inpDivSt} type='text' placeholder='What do i need to do?' ref='createInput'/>
          {this.renderError()}
      </form>
    );
  }


  
  handleCreate(event){
      event.preventDefault()
      const createInput = this.refs.createInput;
      const task  = createInput.value; //value from input on this component user wanting to create
      const validateInput = this.validateInput(task);
      if(validateInput){
          this.setState({error:validateInput})
          return;
      }
      this.setState({
          error:null,
          inpDivSt:'createInpt'
        })
      this.props.createTask(task,  Number(this.props.myArr.slice(this.props.myArr.length -1, this.props.myArr.length)) + Number(1), this.props.keyOwn  ) //function invocation from props coming us all the wat from main Component App.js, so send him value to change array
      this.refs.createInput.value = '';
  }

  validateInput(task){
    if(!task){
        return 'Please enter your task'
    }else if(_.find(this.props.todos, todo => todo.task === task)){ //if old task is equal to new we try to create, then DON'T DO THAT!!

        return ` ${task}`
    }else {
        return null;
    }
  }
};



export default CreateTodo;