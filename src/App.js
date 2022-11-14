import React,{Component} from "react";

export default class App extends Component{
  state={
   value:""
  }
  handleChange = (event)=>{
    this.setState({value:event.target.value})
    console.log(this.state)
  }
  
  render(){
    return(
      <>
      <label htmlFor="name">Name: 
      <input 
      id="name"
      name="name"
      onChange={this.handleChange}/>
      </label>
      <br/>
      <label htmlFor="name">E-mail: 
      <input 
      id="name"
      name="name"
      onChange={this.handleChange}/>
      </label>
      <br/>
      <label htmlFor="name">Password: 
      <input 
      id="name"
      name="name"
      type="password"
      onChange={this.handleChange}/>
      </label>
      <p>{this.state.value}</p>
      </>
    )
  }
}