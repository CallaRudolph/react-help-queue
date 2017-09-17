import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./components/App";
import { createStore } from 'redux';
import reducer from './reducers/ticket-list-reducer';

const store = createStore(reducer);

const render = (Component) => {
  ReactDOM.render(
      <AppContainer>
          <Component/>
      </AppContainer>,
    document.getElementById("react-app-root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
