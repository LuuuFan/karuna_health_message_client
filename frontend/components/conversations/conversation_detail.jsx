import React from 'react';
import Message from './message';
import {Link} from 'react-router-dom';

class ConversationDetail extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: true,
			message: "",
		};
		this.messageList = null;
	}

	componentDidMount(){
		localStorage.setItem("currentConversation", this.props.uuid);
		this.props.fetchConversation(this.props.uuid).then(res => this.setState({loading: false}));
		setTimeout(()=>{
			this.props.readMessage(this.props.uuid)
		}, 1500);
		this.scrollToBottom();
	}

	componentDidUpdate(prevProps){
		if (prevProps.uuid !== this.props.uuid && !this.props.conversation.messages) {
			this.setState({loading: false});
			this.props.fetchConversation(this.props.uuid).then(res => this.setState({loading: false}));
			setTimeout(()=>{
				this.props.readMessage(this.props.uuid)
			}, 1500);
		}
		this.scrollToBottom();
	}

	handleInput(e){
		this.setState({message: e.currentTarget.value});
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.receiveMessage({
			body: this.state.message,
			direction: "outgoing",
			created_at: new Date().toISOString(),
		}, this.props.uuid);
		this.setState({message: ""});
	}

	scrollToBottom = () => {
		if (this.messageList) {
			this.messageList.scrollTop = this.messageList.scrollHeight;

			// Trying to use scrollIntoView, not working
			// this.messageList.scrollIntoView({behavior: "smooth", block: "end"});
		}
		else setTimeout(()=> {
			// component didn't render yet, waiting for component render, then re-try scroll
			this.scrollToBottom();
		}, 1000);
	}

	render(){
		const { conversation } = this.props, { loading, message } = this.state;
		return(
			<div className="conversation_detail_container">
				{conversation ? 
					<div className="title">
						<i className="far fa-user"></i>
						<span>{ conversation.name }</span>
						<Link to="/" className="close">&times;</Link>
					</div>
				: 
					""
				}
				{ loading || !conversation.messages ?  
					<div>loading...</div>
				: 
				 	<ul className="message_list" ref={el => {this.messageList = el}}>
				 		{conversation.messages.map((message, idx) => <Message message={message} key={idx}/>)}
				 	</ul>
					
				}
				<form onSubmit={e=>this.handleSubmit(e)}>
					<div className="inline">
						<input type="text" onChange={e=>this.handleInput(e)} value={message}/>
						{message ? <input type="submit" value="Send" /> : ""}
					</div>
				</form>
			</div>
		)
	}
}

export default ConversationDetail;