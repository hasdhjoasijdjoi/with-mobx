import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import * as mobx from "mobx";
import { withRouter } from "react-router-dom";
import List from "./List";

@inject("store")
@observer
class ViewPostPage extends Component {
  componentWillMount() {
    this.props.store.posted().then((response) => {
      console.log(response);
      this.props.store.post = response;
      console.log(mobx.toJS(this.props.store.post));
      console.log(mobx.toJS(this.props.store.post)[0].title);
    });
  }

  viewContent = (e) => {
    console.log(e.target.value);
    this.props.store.search = e.target.value;
    this.props.history.push("/viewcontent");
  };

  render() {
    const listPosts = mobx.toJS(this.props.store.post).map((post, key) => (
      <li name={key} onClick={this.viewContent}>
        <input type="text" value={post.title}></input>
      </li>
    ));
    return (
      <div>
        <h1>포스팅된 글들</h1>
        <ul>{listPosts}</ul>
      </div>
    );
  }
}

export default withRouter(ViewPostPage);
