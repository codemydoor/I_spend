import React, { Component } from 'react'
import "./App.css"

class App extends Component {
  constructor(props) {
    
    super(props)

    this.state = {
      users : [
       
        
       
      ],
          username:'',
          expenditure:'',
          description:'',
          date:'',
          
         
    };
    
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
    console.log(this.state.name);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      expenditure: this.state.expenditure,
      description: this.state.description,
      date: this.state.date
    };
    this.setState({
      users: [...this.state.users, newUser],
      username:'',
      expenditure:'',
      description:'',
      date: ''
    });
  };

  render() {
    return (
      <div >
        
        <div className = "App_Field">
        <div className ="App" >
           {this.state.users.map(field => {
            return (
            <div >
              <h4>Username: {field.username}</h4>
              <p>Expenditure: {field.expenditure}</p>
              <p>Description: {field.description}</p>
              <p>Date: {field.date}</p>
             
    

              <hr />
            </div>
          
          );
        })}
        
        </div>
          
        </div>
       
        
        <div className="form_Field">
        <p className = "logo">I-spend</p>

          <form onSubmit = {this.handleSubmit}>

           <span><input placeholder="Username" type ="text" name ="username" value={this.state.username} className ="username" onChange={this.handleChange} /></span><br />
           <span><input placeholder="Expenditure" name ="expenditure" type ="number" value={this.state.expenditure} onChange={this.handleChange} /></span><br />
           <span><input type = " text" name ="description" placeholder="Description"value={this.state.description} onChange ={this.handleChange}  /></span><br />
           <span><input placeholder="Date" name ="date" value={this.state.date} onChange={this.handleChange} /></span ><br />
            <button type="submit">Submit</button>
      
           </form>
        </div>

      </div>
    )
  }
}

export default App


