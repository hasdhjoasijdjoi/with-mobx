import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class Counter extends Component {
  componentWillMount() {
    console.log("hi");
  }

  render() {
    const { store } = this.props;
    return (
      <div>
        <h1>{store.number}</h1>
        <button onClick={store.increase}>+1</button>
        <button onClick={store.decrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
