import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers/reducer';

const store = createStore(reducer);

const application = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
registerServiceWorker();
