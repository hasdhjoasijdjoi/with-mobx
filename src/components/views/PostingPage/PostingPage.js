import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

@inject("store")
@observer
class PostingPage extends Component {
  onCategoryHandler = (e) => {
    this.props.store.setCategory(e);
  };
  onTitleHandler = (e) => {
    this.props.store.setTitle(e);
  };
  onContentHandler = (e) => {
    this.props.store.setContent(e);
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      userID: this.props.store.currentID,
      category: this.props.store.category,
      title: this.props.store.title,
      content: this.props.store.content,
    };

    this.props.store.posting(body).then((response) => {
      if (response.success) {
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
          <label>Category</label>
          <input
            type="text"
            value={this.props.store.category}
            onChange={this.onCategoryHandler}
          />
          <label>Title</label>
          <input
            type="text"
            value={this.props.store.title}
            onChange={this.onTitleHandler}
          />
          <label>Content</label>
          <input
            type="text"
            value={this.props.store.content}
            onChange={this.onContentHandler}
          />
          <br />
          <button type="submit">글 작성</button>
        </form>
      </div>
    );
  }
}

export default withRouter(PostingPage);
