import * as APIUtilConversation from '../util/conversations';
import {receiveErrors} from './error';

export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";

export const receiveConversations = conversations => ({
	type: RECEIVE_CONVERSATIONS,
	conversations,
});

export const receiveConversation = conversation => ({
	type: RECEIVE_CONVERSATION,
	conversation,
});

export const fetchConversationList = () => dispatch => APIUtilConversation.fetchConversationList()
	.then(
		conversations => dispatch(receiveConversations(conversations)),
		errors => dispatch(receiveErrors(errors)),
	)


export const fetchConversation = id => dispatch => APIUtilConversation.fetchConversation(id)
	.then(
		conversation => dispatch(receiveConversation(conversation)),
		errors => dispatch(receiveErrors(errors)),
	)
