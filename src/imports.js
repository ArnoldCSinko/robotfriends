import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducers';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

export {
    React,
    ReactDOM,
    Provider,
    createStore,
    searchRobots,
    App,
    registerServiceWorker,
}

