import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import productReducer from './store/reducers/products';
// import { ProductsContextProvider } from "./context/products-context";
import configureStore from "./hooks-store/products-store";
// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);
configureStore();

ReactDOM.render(
  // <Provider store={store}>
  // <ProductsContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </ProductsContextProvider>,
  // </Provider>,
  document.getElementById("root")
);
