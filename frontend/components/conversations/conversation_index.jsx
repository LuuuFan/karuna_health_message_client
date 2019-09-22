import React from 'react';
import Conversation from './conversation';
import ConversationDetail from './conversation_detail';
// import Loading from '../loading';

class ConversationIndex extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		const { conversations, uuid, fetchConversation } = this.props;
		const conversationsList = Object.values(conversations).sort((a, b) => new Date(b.last_message.created_at) - new Date(a.last_message.created_at));
		return (
			<div className="conversation_index_container">
				<div className={uuid ? "list left" : "list"}>
					<form>
						<input type="text"/>
					</form>
					<ul>
						{conversationsList.map((conversation, idx) => <Conversation conversation={conversation} key={idx}/>)}
					</ul>
				</div>
				{uuid ? <ConversationDetail fetchConversation={fetchConversation} uuid={uuid} conversation={conversations.uuid}/> : ""}
			</div>
		)
	}
}

export default ConversationIndex;