import { RECEIVE_CONVERSATIONS, RECEIVE_CONVERSATION, RECEIVE_MESSAGE, READ_MESSAGE } from '../actions/conversation';


const conversationReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState, localMessage;
	switch(action.type){
		case RECEIVE_CONVERSATIONS:
			const conversations = {};
			action.conversations.forEach(conversation => conversations[conversation.uuid] = conversation);

			// set local storage, store it in brower memory
			localStorage.setItem("conversations", JSON.stringify(conversations))
			return conversations;
		
		case RECEIVE_CONVERSATION:
			newState = Object.assign({}, state);
			localMessage = JSON.parse(localStorage.getItem("localMessage") || "{}");
			newState[action.id].messages = action.conversation.messages.reverse().concat(localMessage[action.id] || []);
			return newState;

		case RECEIVE_MESSAGE:
			newState = Object.assign({}, state);
			// set local message store:
			localMessage = JSON.parse(localStorage.getItem("localMessage") || "{}");
			localMessage[action.conversation_uuid] = localMessage[action.conversation_uuid] || [];
			localMessage[action.conversation_uuid].push(action.message);
			localStorage.setItem("localMessage", JSON.stringify(localMessage));

			newState[action.conversation_uuid].messages.push(action.message);
			return newState;

		case READ_MESSAGE:
			newState = Object.assign({}, state);
			newState[action.uuid].unread = 0;
			return newState;
		
		default: 
			return state;
	}
}

export default conversationReducer;