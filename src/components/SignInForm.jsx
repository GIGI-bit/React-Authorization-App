/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      rememberMe: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, rememberMe } = this.state;
    console.log("Signing in with:", username, password, rememberMe);
  };

  handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    this.setState({ [name]: val });
  };

  render() {
    const { username, password, rememberMe } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Sign In</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={rememberMe}
            onChange={this.handleInputChange}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

export default SignInForm;
