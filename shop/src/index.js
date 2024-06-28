import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { OrderSteps } from "./containers/OrderSteps";
import store from "./features/store";
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <OrderSteps />
    </Provider>
  </React.StrictMode>,
);
