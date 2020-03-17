import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import utils from "./dummy-data";


ReactDOM.render(<App props={utils}/>, document.getElementById('root'));
