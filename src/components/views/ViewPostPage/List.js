import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class List extends Component {
  componentWillMount() {
    console.log(this.props.key);
  }
  onkey = () => {
    console.log(this.props.desc);
  };

  render() {
    return <li onClick={this.onKey}>{this.props.children}</li>;
  }
}

export default List;
