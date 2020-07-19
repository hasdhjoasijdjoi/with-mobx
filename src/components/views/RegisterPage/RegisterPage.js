import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

@inject("store")
@observer
class RegisterPage extends Component {
  onEmailHandler = (event) => {
    this.props.store.setEmail(event);
  };
  onNameHandler = (event) => {
    this.props.store.setName(event);
  };
  onPasswordHandler = (event) => {
    this.props.store.setPassword(event);
  };
  onConfirmPasswordHandler = (event) => {
    this.props.store.setConfirmPassword(event);
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.props.store.password !== this.props.store.confirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }
    let body = {
      email: this.props.store.email,
      password: this.props.store.password,
      name: this.props.store.name,
    };

    this.props.store.register(body).then((response) => {
      // 오직 then을 통해서만 Promise를 풀수있다.
      console.log(response);
      if (response.success) {
        this.props.history.push("/login");
      } else {
        alert("Failed to sign up");
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

          <label>Name</label>
          <input
            type="text"
            value={this.props.store.name}
            onChange={this.onNameHandler}
          />

          <label>Password</label>
          <input
            type="password"
            value={this.props.store.password}
            onChange={this.onPasswordHandler}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            value={this.props.store.confirmPassword}
            onChange={this.onConfirmPasswordHandler}
          />

          <br />
          <button type="submit">회원 가입</button>
        </form>
      </div>
    );
  }
}

export default withRouter(RegisterPage);
