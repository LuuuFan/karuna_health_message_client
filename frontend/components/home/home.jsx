import React from 'react';
import ConversationIndexContainer from '../conversations/conversation_index_container';
class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: false,
		};
	}

	componentDidMount(){
		if (!Object.keys(this.props.conversations).length) {
			this.setState({loading: true});
			this.props.fetchConversationList().then(res => {
				this.setState({loading: false});
			})
		}
	}

	render(){
		const { loading } = this.state;
		return loading ? (<div>Loading...</div>) : (<ConversationIndexContainer />)
	}
}

export default Home;