import React from 'react';
import ReactDOM from 'react-dom';
import style from './assets/scss/screen.scss'
import App from './components/App';

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

module.hot.accept();