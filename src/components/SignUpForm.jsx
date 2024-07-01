/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      acceptTerms: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword, gender, acceptTerms } =
      this.state;
    console.log(
      "Signing up with:",
      username,
      email,
      password,
      confirmPassword,
      gender,
      acceptTerms
    );
  };

  handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    this.setState({ [name]: val });
  };

  render() {
    const { username, email, password, confirmPassword, gender, acceptTerms } =
      this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Sign Up</h2>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
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
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={this.handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <input
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            checked={acceptTerms}
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="acceptTerms">I accept the Terms and Conditions</label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default SignUpForm;
