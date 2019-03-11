import React from 'react'; // Component as object from react module (also an object)
import '../App.css';


function TodosListHeader () {
    return (
      <thead>
        <tr>
          <th>Task</th>
          <th>Action</th>
        </tr>
      </thead>
    );
}

export default TodosListHeader;
