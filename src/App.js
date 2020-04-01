import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Action } from './store/actions'
import "./App.css"
import UserForm from './component/UserForm';
import ExpediLog from './component/ExpediLog'

class App extends Component {
 
  
  AddNewUser = (newUser) => {
    this.props.addUser(newUser)
  };

  render() {
    return (
      <div >
        <UserForm addUser={this.AddNewUser} />
        
        <div className = "Apps_Field">
        <div className ="Apps">
           {this.props.users.map((field, index) => {
            return (
            <div >
            <ExpediLog key={index } name = {field.username} expenditure={field.expenditure} description={field.description} date={field.date} />
            </div>
          
          );
        })}
        
        </div>
          
        </div>
       
        
       

      </div>
    )
  }
}
const mapStateToProps = (state) =>({ 
 users: state.users
   
})
const mapDispatchToProps ={ 
  addUser : Action 
}
export default connect(mapStateToProps, mapDispatchToProps)(App);


