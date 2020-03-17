import React, { Component } from 'react'

class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username:'',
            expenditure:'',
            description:'',
            date:'',
             
        }
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
          username: this.state.username,
          expenditure: this.state.expenditure,
          description: this.state.description,
          date: this.state.date
        };
        this.props.addUser(newUser) 
        this.setState({
          username:'',
          expenditure:'',
          description:'',
          date: ''
        });
      };

    render() {
        return (
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
        )
    }
}

export default UserForm
