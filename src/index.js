import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CommentApp from './comment/CommentApp';

ReactDOM.render(<CommentApp />, document.getElementById('root'));
registerServiceWorker();
