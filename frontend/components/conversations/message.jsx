import React from 'react';


const Message = ({message}) => (
	<li className={ message.direction }>
		<span> { message.body} </span>
		<span className='timestamp'>
			{ message.created_at }
		</span>
	</li>
)

export default Message;