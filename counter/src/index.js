import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import reducer from './redux/Reducer';


const  counterApp = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={counterApp}>
        <App />
    </Provider>
);


