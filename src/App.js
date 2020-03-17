import React, { Component } from 'react'
import "./App.css"
import UserForm from './component/UserForm';
import ExpediLog from './component/ExpediLog'

class App extends Component {
  constructor(props) {
    
    super(props)

    this.state = {
      users : [
     
        
       
      ],
         
          
         
    };
    
  }
  
  AddNewUser = (newUser) => {
    this.setState({
      users: [...this.state.users, newUser]
    });
  };

  render() {
    return (
      <div >
        <UserForm addUser={this.AddNewUser} />
        
        <div className = "App_Field">
        <div className ="App" >
           {this.state.users.map((field, index) => {
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

export default App


