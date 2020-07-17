import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react"; // MobX 에서 사용하는 Provider
import App from "./App";

import Store from "./stores/Store"; // 방금 만든 스토어 불러와줍니다.

const store = new Store(); // 스토어 인스턴스를 만들고

ReactDOM.render(
  <Provider store={store}>
    {/* Provider 에 props 로 넣어줍니다. */}
    <App />
  </Provider>,
  document.getElementById("root")
);
