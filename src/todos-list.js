import _ from 'lodash';
import React, { Component } from 'react'; //Component as object from react module (also an object)
import TodosListHeader from './todos-list-header';
import TodosListItem   from './todos-list-item';
import './App.css';
import  xBtn from './images/x-button.png';



class TodosList extends Component {
    constructor(props){
    super(props)
    this.indVal='b'
    };
  
 

renderItems(){
    const propsNormal = this.props.todos
    const props = _.omit(this.props, 'todos')
    propsNormal.map((todo, index) => {
        this.props.myArr.push(index)
        console.log('Duzina array, trenutni broj itema je:', this.props.myArr.length)
        this.indVal= index  
});
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} keyOwn ={index}  {...todo} {...props} 
    myArr={ Number(this.props.myArr.slice(this.props.myArr.length -1, this.props.myArr.length)) + Number(1)} />)  //call TodosListItem {...todo}
};





render(){
    console.log('thisprops', this.props)
    return (
        <div>
        {this.renderItems()}
        <div className={this.props.countDiv}>Items left: { Number(this.props.myArr.slice(this.props.myArr.length -1, this.props.myArr.length)) + Number(1)}
        <p className={this.props.hideDelPrg}><a id='aId1' onClick={(event) => this.props.allItemDel(event)}>&nbsp;&nbsp;&nbsp;&nbsp;   Delete All <i className='fa fa-times tajmsFa'></i></a></p>
        </div>
        </div>
    );
  }
};




export default TodosList;
//className={this.state.eraseCompletHide}
//className={this.state.trashSt}
//{...} es6 spread operator, spread from that  todo {} obj from mapped [] with lodash library reference _. its' task, iscompleted
//Ili mozes da imas function call ovde
//v/// underscore _ is now referencing lodash library.
//<img className={this.props.hideDelPrg} src={xBtn}/>
