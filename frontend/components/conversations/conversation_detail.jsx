import React from 'react';
import Message from './message';

class ConversationDetail extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true,
		};
	}

	componentDidMount(){
		localStorage.setItem("currentConversation", this.props.uuid);
		this.props.fetchConversation(this.props.uuid).then(res => this.setState({loading: false}));
	}

	render(){
		console.log(this.props);
		const { conversation } = this.props, { loading } = this.state;
		return(
			<div className="conversation_detail_container">
				{conversation && conversation.messages ? 
					<div>loading...</div>
				: 
					<div>hey</div>
				}
			</div>
		)
	}
}

export default ConversationDetail;
					 	// <ul className="message_list">
					 	// 	{conversation.messages.map((message, idx) => <Message message={message} key={idx}/>)}
					 	// </ul>