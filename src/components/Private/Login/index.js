import React, { Component } from "react";
import { navigate } from "gatsby";
import styles from "./styles.module.css";
import {Link} from 'gatsby';

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    message: "Enter your information",
    invalid: false
  };

  handleUsername = event => this.setState({ username: event.target.value });
  handlePassword = event => this.setState({ password: event.target.value });
  handleSubmit = event => {
    event.preventDefault();

    const status = this.props.handleLogin(this.state);

    let { message, invalid } = this.state;
    if (status.error) {
      message = status.message;
      invalid = true;
      return this.setState({ username: "", password: "", message, invalid });
    }

    navigate(this.props.private);
  };

  render() {
    const style = this.state.invalid
      ? { color: "rgb(180, 57, 57)" }
      : { color: "var(--color-gatsby)" };

    return (
      <form className={styles.LoginForm} onSubmit={this.handleSubmit}>
        <label className={styles.message}>{this.state.message}</label>

        <input
          autoFocus
          type="text"
          className={styles.LoginForm__input}
          placeholder="Username"
          onChange={this.handleUsername}
          value={this.state.username}
        />

        <input
          type="password"
          className={styles.LoginForm__input}
          placeholder="Password"
          onChange={this.handlePassword}
          value={this.state.password}
        />

        <input
          type="submit"
          className={styles.LoginForm__button}
          value={"Sign in"}
        />
        <Link to='/register' className={styles.LoginForm__button} >
            <input
            type="button"
            className={styles.Register__button}
            value={"Sign up"}
          />
        </Link>
      </form>
    );
  }
}

export default LoginForm;