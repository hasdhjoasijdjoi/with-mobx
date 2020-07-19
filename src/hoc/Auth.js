import React, { Component } from "react";
import { inject, observer } from "mobx-react";

export default function (SpecificComponent, option, adminRoute = null) {
  @inject("store")
  @observer
  class Auth extends Component {
    componentWillMount() {
      // 로그인 되어있다면 auth()가 payload에 데이터를 저장한다.
      this.props.store.auth().then((response) => {
        this.props.store.currentID = response._id;
        console.log(this.props.store.currentID);
        console.log(response);
        if (!response.isAuth) {
          if (option) {
            this.props.history.push("/login");
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !response.isAdmin) {
            this.props.store.history.push("/");
          } else {
            if (option === false) this.props.history.push("/");
          }
        }
      });
    }

    render() {
      return <SpecificComponent />;
    }
  }

  return Auth;
}
