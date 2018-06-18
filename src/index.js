// Import Dependencies
import {
    React,
    ReactDOM,
    Provider,
    createStore,
    searchRobots,
    App,
    registerServiceWorker,
} from './imports';

import './index.css';
const store = createStore(searchRobots);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
     document.getElementById('root')
);
registerServiceWorker();
