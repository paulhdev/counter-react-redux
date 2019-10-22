import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reduxLogger from 'redux-logger';

import Counter from "./components/Counter";
import DisplayCounter from "./components/DisplayCounter";
import counterReducer from "./store/reducer";

let store = createStore(counterReducer, applyMiddleware(reduxLogger));

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <DisplayCounter />
      </div>
    </Provider>
  );
}

export default App;
