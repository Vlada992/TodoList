import React, { Component } from 'react'; 
import './App.css';


class TodosListItem extends Component {
 constructor(props){
     super(props)
     this.state = {
         isEditing: false,
         todoClass: 'yesV1',
         myFav: 'hideFavStar'
     }
    }



 renderTaskSection(){
     const {task, keyOwn} = this.props;  //Now those are variables tooked from object we sent in todosList compnt.
     console.log('key je:', keyOwn);
     const taskStyle = {
         color:'gray',
         cursor: 'pointer',
         width:'100%',
         fontWeight: 700
     }     
     if(this.state.isEditing){
        return (
        <div className={this.state.todoClass}> 
            <div>
                <form  onSubmit={this.onSaveClick.bind(this)}>
                <input className='' type='text' defaultValue={task} ref='editInput'/>
                {this.renderActionsSection()}
                </form>
            </div>
            <br/>
            <span className={this.state.myFav}><i title='This Todo item is favourite' className={`btnsStyle  fa fa-star ownStajlFav`}>&nbsp;&nbsp;</i></span>
            </div>
        )
     }
     return (
        <div onLoad={this.callImidit.bind(this)} className={this.state.todoClass}> 
        <div style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
        {task}   {this.renderActionsSection()} 
        </div>
        <br/>
        <span className={this.state.myFav}><i title='This Todo item is favourite' className={`btnsStyle  fa fa-star ownStajlFav`}>&nbsp;&nbsp;</i></span>
        </div>
     )
 };



 renderActionsSection(){
     if(this.state.isEditing){
     return (
         <span className='tdStyle'>
       <i title='Save change' className={`btnsStyle fa fa-check ownStajl`} onClick={this.onSaveClick.bind(this)}>&nbsp;&nbsp;</i>
        <i title='Cancel change' className={`btnsStyle fa fa-times ownStajl`}  onClick={this.onCancelClick.bind(this)}></i>
        </span>
     )
     }
     return (
        <span className='tdStyle'>
        <i title='Edit Todo item' className={`btnsStyle   fa fa-pen ownStajl`}  onClick={this.onEditClick.bind(this)}>&nbsp;&nbsp;</i>
        <i title='Add Todo item to Fav' className={`btnsStyle   fa fa-star ownStajl`}  onClick={this.onFavClick.bind(this, this.props.keyOwn)}>&nbsp;&nbsp;</i>

        <i title='Delete Todo item' className={`btnsStyle  fa fa-trash ownStajl`}
         onClick={this.props.deleteTask.bind(this, this.props.task, this.props.keyOwn, this.props.myArr)}></i>
       </span>
     )
 };



  render(){
    return (
            <span>
                {this.renderTaskSection()}
            </span>  
    );
  }





  
 callImidit(){
    if(this.props.keyOwn < 1){
        this.setState({todoClass:'yesV1First'})
        console.log('sta se zbiva')
     }
 }




  onEditClick(){
      this.setState({isEditing:true})
  }


  onCancelClick(){
    this.setState({isEditing:false})
  }



onSaveClick(event){
event.preventDefault()
const oldTask = this.props.task;
const newTask = this.refs.editInput.value
this.props.saveTask(oldTask, newTask)
this.setState({isEditing:false})
}


onFavClick(keyK){
this.setState({myFav:'showFavStar'})
}




};
export default TodosListItem;