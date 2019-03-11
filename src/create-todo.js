/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'; // Component as object from react module (also an object)
import _ from 'lodash';
import './App.css';


class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.btnRef = React.createRef();
    this.st = this.props.allProps.state;
    this.all = this.props.allProps;

    this.state = {
      error: null,
      inpDivSt: 'createInpt',
    };
  }


  inptStyle() {
    this.setState({
      inpDivSt: 'createInpt1',
    });
  }

  handleCreate(event) {
    event.preventDefault();
    const task = this.btnRef.current.value;
    const validateInput = this.validateInput(task);
    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }
    this.setState({
      error: null,
      inpDivSt: 'createInpt',
    });
    this.props.createTask(task,
      Number(this.props.myArr.slice(
        this.props.myArr.length - 1, this.props.myArr.length,
      )) + Number(1), this.props.keyOwn);
    this.btnRef.current.value = '';
  }

  validateInput(task) {
    if (!task) {
      return 'Please enter your task';
    } if (_.find(this.props.todos, todo => todo.task === task)) {
      return ` ${task}`;
    }
    return null;
  }

  renderError() {
    const { error } = this.state;
    if (!error) { return null; }
    if (error === 'Please enter your task') {
      return (
        <div className={this.st.warnToggle[0]} style={{ color: 'black' }}>
          { error }
          <i className="fa fa-exclamation errorRed" />
        </div>
      );
    }
    return (
      <div className={this.st.warnToggle[0]} style={{ color: 'black' }}>
      Task  (<span className="errorRed">{ error }</span>)  already exist
        <i className="fa fa-exclamation errorRed" />
      </div>
    );
  }


  render() {
    const { inpDivSt } = this.state;
    return (
      <form id="formId" onSubmit={this.handleCreate.bind(this)}>
        <input
          onChange={this.inptStyle.bind(this)}
          className={inpDivSt}
          type="text"
          placeholder="What do i need to do?"
          ref={this.btnRef}
        />
        {this.renderError()}
      </form>
    );
  }
}


export default CreateTodo;
