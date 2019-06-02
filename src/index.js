import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from "react-redux";
import rootReducer from './Redux/reducer'
import thunk from "redux-thunk";
import jwt_decode from 'jwt-decode';
import states from "./Redux/reducer/states";
import photos from "./Redux/reducer/photos";
import store from './store'



ReactDOM.render(<Provider store={store}><App /></Provider>    , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
