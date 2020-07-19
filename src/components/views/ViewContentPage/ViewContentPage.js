import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import * as mobx from "mobx";
import { withRouter } from "react-router-dom";

@inject("store")
@observer
class ViewContentPage extends Component {
  componentWillMount() {
    let body = {
      title: this.props.store.search,
    };

    this.props.store.getPost(body).then((response) => {
      this.props.store.selectedPost = response;
    });
  }

  render() {
    return (
      <div>
        <h2>Title</h2>
        {mobx.toJS(this.props.store.selectedPost).title}
        <h2>Content</h2>
        {mobx.toJS(this.props.store.selectedPost).content}
        <h2>Category</h2>
        {mobx.toJS(this.props.store.selectedPost).category}
      </div>
    );
  }
}

export default withRouter(ViewContentPage);
