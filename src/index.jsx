import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const root = document.querySelector('#root');
// eslint-disable-next-line react/react-in-jsx-scope
ReactDOM.render(<App />, root);
