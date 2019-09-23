import * as APIUtilConversation from '../util/conversations';
import {receiveErrors} from './error';

export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const READ_MESSAGE = "READ_MESSAGE";

export const receiveConversations = conversations => ({
	type: RECEIVE_CONVERSATIONS,
	conversations,
});

export const receiveConversation = (conversation, id) => ({
	type: RECEIVE_CONVERSATION,
	conversation,
	id,
});

export const receiveMessage = (message, conversation_uuid) => ({
	type: RECEIVE_MESSAGE,
	message,
	conversation_uuid,
});

export const readMessage = uuid => ({
	type: READ_MESSAGE,
	uuid
})

export const fetchConversationList = () => dispatch => APIUtilConversation.fetchConversationList()
	.then(
		conversations => dispatch(receiveConversations(conversations)),
		errors => dispatch(receiveErrors(errors)),
	)


export const fetchConversation = id => dispatch => APIUtilConversation.fetchConversation(id)
	.then(
		conversation => dispatch(receiveConversation(conversation, id)),
		errors => dispatch(receiveErrors(errors)),
	)
