import React, { Component } from "react";
export default class App extends Component {
  state = {
    value: "",
    name:null
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log(this.state);
  };
  reset=()=>{
    this.setState({name:""})
  }

  render() {
    return (
      <>
        <label htmlFor="name">
          Name:
          <input
            value={this.state.name}
            id="name"
            name="name"
            onChange={this.handleChange}
          />
        </label>
        <button type="button" onClick={this.reset} >
          X
        </button>
        <br />
        <label htmlFor="name">
          E-mail:
          <input 
          value={this.state.name}
          
          id="name" name="name" onChange={this.handleChange} />
        </label>
        <button type="button" onClick={this.reset} >X</button>
        <br />
        <label htmlFor="name">
          Password:
          <input
          value={this.state.name}
            id="name"
            name="name"
            type="password"
            onChange={this.handleChange}
          />
         <button type="button" onClick={this.reset} >X</button>
        </label>
        <p>{this.state.value}</p>
      </>
    );
  }
}
