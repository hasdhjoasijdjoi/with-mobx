import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class LandingPage extends Component {
  onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        this.props.history.push("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };

  goPosting = (e) => {
    e.preventDefault();
    this.props.history.push("/posting");
  };

  viewPost = (e) => {
    e.preventDefault();
    this.props.history.push("/viewpost");
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
        <h2>시작 페이지</h2>
        <button onClick={this.onClickHandler}>로그아웃</button>
        <button onClick={this.goPosting}>포스트하러가기</button>
        <button onClick={this.viewPost}>포스트보러가기</button>
      </div>
    );
  }
}

export default withRouter(LandingPage);
