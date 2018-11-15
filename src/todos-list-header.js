import React, { Component } from 'react'; //Component as object from react module (also an object)
import './App.css';


class TodosListHeader extends Component {
  render(){
    return (
            <thead>
              <tr>
                <th>Task</th>
                <th>Action</th>
              </tr>  
            </thead>
    
    );
  }
};

export default TodosListHeader;




/*<thead>
              <tr>
                <th>Task</th>
                <th>Action</th>
              </tr>  
            </thead>*/