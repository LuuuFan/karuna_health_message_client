import React from 'react';
import {Link} from 'react-router-dom';

class Conversation extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		const { conversation } = this.props;
		return(
			<Link to={`/${conversation.uuid}`}>
				<li className='conversation_preview'>
					<i className="far fa-user"></i>
					<div className='content'>
						<p>{ conversation.name }</p>
						{conversation.unread ? 
							<span className='unread'>{ conversation.unread }</span>
						: 
							""
						}
						<span className='last_message'> Last Message : { conversation.last_message.created_at }</span>
					</div>
				</li>
			</Link>
		)
	}
}

export default Conversation;
