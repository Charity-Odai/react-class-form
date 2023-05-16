import React, { Component } from 'react'

export class ClassForm extends Component {
    constructor(props) {
    super(props);
    this.state = {
        name: "",
        email: "",
        password:"",
    };
  
  }
  handleInputChange =(e)=> {
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value})
  }

  handleSignup=(e)=>{
    e.preventDefault();
    let details ={
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
    }
    this.setState({details})
    console.log(details);
  }
render() {
    return (
      <div>
        <h1>Sign Up form</h1>
        <form onSubmit={this.handleSignup}>
            <label>Name</label>
            <input type='text' onChange={this.handleInputChange} value={this.state.name} name='name'/>
            <br/>
            <br/>
            <label>Email</label>
            <input type='text' onChange={this.handleInputChange} value={this.state.email} name='email'/>
            <br/>
            <br/>
            <label>Password</label>
            <input type='password' onChange={this.handleInputChange} value={this.state.password} name='password'/>
            <br/>
            <br/>
            <input onClick={this.handleSignup} type='submit' value='Sign Up'/>
        </form>
      </div>
    )
}  
}
export default ClassForm