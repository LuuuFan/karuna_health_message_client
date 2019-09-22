import { combineReducers } from 'redux';
import errorReducer from './error';
import conversationReducer from './conversation';

const rootReducer = combineReducers({
	errors: errorReducer,
	conversations: conversationReducer
});

export default rootReducer;
