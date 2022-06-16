import React from 'react';

import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";




    ReactDOM.render(
        <Provider store={store}>
            <App store={store.getState()} dispatch={store.dispatch}/>
        </Provider>, document.getElementById('root'));




