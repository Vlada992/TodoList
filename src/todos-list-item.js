/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './App.css';


class TodosListItem extends Component {
  constructor(props) {
    super(props);
    this.editInput = React.createRef();
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.callImidit = this.callImidit.bind(this);


    this.state = {
      isEditing: false,
      todoClass: 'yesV1',
      myFav: 'hideFavStar',
    };
  }


  onEditClick() {
    this.setState({ isEditing: true });
  }


  onCancelClick() {
    this.setState({ isEditing: false });
  }


  onSaveClick(event) {
    event.preventDefault();
    const oldTask = this.props.task;
    const newTask = this.editInput.current.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false });
  }


  onFavClick() {
    this.setState({ myFav: 'showFavStar' });
  }

  callImidit() {
    if (this.props.keyOwn < 1) {
      this.setState({ todoClass: 'yesV1First' });
    }
  }

  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <span className="tdStyle">
          <i
            role="button"
            title="Save change"
            className="btnsStyle fa fa-check ownStajl"
            onClick={this.onSaveClick}
            onKeyDown={this.onSaveClick}
          >

&nbsp;&nbsp;

          </i>
          <i
            role="button"
            title="Cancel change"
            className="btnsStyle fa fa-times ownStajl"
            onClick={this.onCancelClick}
            onKeyDown={this.onCancelClick}

          />
        </span>
      );
    }
    return (
      <span className="tdStyle">
        <i
          role="button"
          title="Edit Todo item"
          className="btnsStyle   fa fa-pen ownStajl"
          onClick={this.onEditClick}
          onKeyDown={this.onEditClick}
        >


&nbsp;&nbsp;

        </i>
        <i
          title="Add Todo item to Fav"
          className="btnsStyle   fa fa-star ownStajl"
          onClick={this.onFavClick.bind(this, this.props.keyOwn)}
          onKeyDown={this.onFavClick.bind(this)}
        >
&nbsp;&nbsp;

        </i>
        <i
          role="button"
          title="Delete Todo item"
          className="btnsStyle  fa fa-trash ownStajl"
          onClick={this.props.deleteTask.bind(this, this.props.task, this.props.keyOwn, this.props.myArr)}
          onKeyDown={this.props.deleteTask.bind(this, this.props.task, this.props.keyOwn, this.props.myArr)}
        />
      </span>
    );
  }


  renderTaskSection() {
    const { task } = this.props; // Now those are variables tooked from object we sent in todosList compont.
    const taskStyle = {
      color: 'gray',
      cursor: 'pointer',
      width: '100%',
      fontWeight: 700,
    };

    if (this.state.isEditing) {
      return (
        <div className={this.state.todoClass}>
          <div>
            <form onSubmit={this.onSaveClick.bind(this)}>
              <input className="" type="text" defaultValue={task} ref={this.editInput} />
              {this.renderActionsSection()}
            </form>
          </div>
          <br />
          <span
            className={this.state.myFav}
          >
            <i title="This Todo item is favourite" className="btnsStyle  fa fa-star ownStajlFav" />

          </span>
        </div>
      );
    }

    return (
      <div
        onLoad={this.callImidit}
        className={this.state.todoClass}
        onKeyDown={this.callImidit}
      >
        <div
          role="button"
          style={taskStyle}
          onClick={this.props.toggleTask.bind(this, task)}
        >
          {task}
          {this.renderActionsSection()}
        </div>
        <br />
        <span
          className={this.state.myFav}
        >
          <i title="This Todo item is favourite" className="btnsStyle  fa fa-star ownStajlFav">
&nbsp;&nbsp;
          </i>
        </span>
      </div>
    );
  }


  render() {
    return (
      <span>
        {this.renderTaskSection()}
      </span>
    );
  }
} // class TodosListItem;


export default TodosListItem;
