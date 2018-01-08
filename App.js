import React from 'react';
import Main from "./components/Main";
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import {PAGE_LIST} from './pages';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

let state = {
    restaurants: [],
    selectedItem: undefined,
    page: PAGE_LIST
}; 

let store = createStore(reducers, state, compose(
    applyMiddleware(thunk)));

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
  }
}