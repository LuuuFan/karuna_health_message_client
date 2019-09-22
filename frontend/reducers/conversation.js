import {RECEIVE_CONVERSATIONS, RECEIVE_CONVERSATION} from '../actions/conversation';


const conversationReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState;
	switch(action.type){
		case RECEIVE_CONVERSATIONS:
			const conversations = {};
			action.conversations.forEach(conversation => conversations[conversation.uuid] = conversation);

			// set local storage, store it in brower memory
			localStorage.setItem("conversations", JSON.stringify(conversations))
			return conversations;
		
		case RECEIVE_CONVERSATION:
			newState = Object.assign({}, state);
			const currentConversationUUID = localStorage.getItem("currentConversation");
			newState[currentConversationUUID].messages = action.conversation.messages;
			return newState;
		
		default: 
			return state;
	}
}

export default conversationReducer;