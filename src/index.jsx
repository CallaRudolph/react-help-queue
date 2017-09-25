import React from "react";
import ReactDOM from "react-dom";
// import { AppContainer } from "react-hot-loader";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/ticket-list-reducer";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import middlewareLogger from "./middleware/middleware-logger";

const store = createStore(reducer, applyMiddleware(middlewareLogger));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
  document.getElementById("react-app-root")
);
//
//
// render(App);
//
// if (module.hot) {
//   module.hot.accept("./components/App", () => {
//     render(App);
//   });
// }
