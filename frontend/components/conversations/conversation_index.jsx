import React from 'react';
import Conversation from './conversation';
import ConversationDetail from './conversation_detail';
// import Loading from '../loading';

class ConversationIndex extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			search: ""
		};
	}

	handleSubmit(e){
		e.preventDefault();
	}

	handleInput(e){
		this.setState({search: e.currentTarget.value});
	}

	clearSearch(){
		this.setState({search: ""})
	}

	render(){
		const { conversations, uuid, fetchConversation, receiveMessage, readMessage } = this.props, { search } = this.state;
		const conversationsList = Object.values(conversations).sort((a, b) => new Date(b.last_message.created_at) - new Date(a.last_message.created_at));
		return (
			<div className="conversation_index_container">
				<div className={uuid ? "list left" : "list"}>
					<form onSubmit={e=>this.handleSubmit(e)}>
						<div className='inline'>
							<input type="text" onChange={e=>this.handleInput(e)} value={search}/>
							{search ? <span className='close' onClick={()=>this.clearSearch()}>&times;</span> : ""}
						</div>
					</form>
					<ul>
						{conversationsList.filter(c => c.name.toLowerCase().includes(search.toLowerCase())).map((conversation, idx) => <Conversation conversation={conversation} key={idx} uuid={uuid}/>)}
					</ul>
				</div>
				{uuid ? <ConversationDetail fetchConversation={fetchConversation} readMessage={readMessage} uuid={uuid} conversation={conversations[uuid]} receiveMessage={receiveMessage}/> : ""}
			</div>
		)
	}
}

export default ConversationIndex;