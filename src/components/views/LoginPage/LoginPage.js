import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

@inject("store")
@observer
class LoginPage extends Component {
  onEmailHandler = (event) => {
    this.props.store.setEmail(event);
  };

  onPasswordHandler = (event) => {
    this.props.store.setPassword(event);
  };

  onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: this.props.store.email,
      password: this.props.store.password,
    };

    this.props.store.login(body).then((response) => {
      if (response.loginSuccess) {
        // this.props.store.currentID = response.userId;
        this.props.history.push("/");
      } else {
        alert("Error˝");
      }
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={this.onSubmitHandler}
        >
          <label>Email</label>
          <input
            type="email"
            value={this.props.store.email}
            onChange={this.onEmailHandler}
          />
          <label>Password</label>
          <input
            type="password"
            value={this.props.store.password}
            onChange={this.onPasswordHandler}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginPage);
