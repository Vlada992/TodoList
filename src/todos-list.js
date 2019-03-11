/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import _ from 'lodash';
import React, { Component } from 'react';
// import TodosListHeader from './component/todos-list-header';
import TodosListItem from './todos-list-item';
import './App.css';


class TodosList extends Component {
  constructor(props) {
    super(props);
    this.indVal = 'b';
  }


  renderItems() {
    const propsNormal = this.props.todos;
    //  const {todos} = this.props
    const props = _.omit(this.props, 'todos');
    propsNormal.map((todo, index) => {
      this.props.myArr.push(index);
      this.indVal = index;
      return true;
    });
    return _.map(this.props.todos, (todo, index) => (
      <TodosListItem
        key={index}
        keyOwn={index}
        {...todo}
        {...props}
        myArr={Number(this.props.myArr.slice(this.props.myArr.length - 1, this.props.myArr.length)) + Number(1)}
      />
    )); // call TodosListItem {...todo}
  }

  render() {
    return (
      <div>
        {this.renderItems()}
        <div
          className={this.props.countDiv}
        >


       Items left:
          { Number(this.props.myArr.slice(this.props.myArr.length - 1, this.props.myArr.length)) + Number(1)}
          <p
            className={this.props.hideDelPrg}
          >
            <button
              type="button"
              id="aId1"
              onClick={event => this.props.allItemDel(event)}
              onKeyDown={event => this.props.allItemDel(event)}
            >

             Delete All
              &nbsp;<i className="fa fa-times tajmsFa" />
            </button>
          </p>
        </div>
      </div>
    );
  }
}


export default TodosList;
