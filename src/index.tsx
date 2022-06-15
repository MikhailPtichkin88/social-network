import React from 'react';

import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";

 let rerenderEntireTree = (state:any) => {

    ReactDOM.render(
        <App store={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state);
});