import React from 'react';
import ReactDOM from 'react-dom';
import './comment/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import CommentApp from './comment/CommentApp';
import CommentApp from './containers/CommentApp';
import commentsReducer from './reducers/comments';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(commentsReducer);
ReactDOM.render(
	<Provider store={store}>
		<CommentApp />
	</Provider>,
	document.getElementById('root')
)
// ReactDOM.render(<CommentApp />, document.getElementById('root'));
registerServiceWorker();
