import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginWidget from '../src/widgets/login/Login';
import App from '../src/widgets/Appwidget/Appwidget';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../src/widgets/Appwidget/reducer'
// import App from './components/App'
import * as serviceWorker from './serviceWorker';
const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
