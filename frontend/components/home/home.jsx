import React from 'react';
import ConversationIndexContainer from '../conversations/conversation_index_container';
import Loading from '../misc/loading';

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
			this.props.fetchConversationList().then(res => this.setState({loading: false}))
		}
	}

	render(){
		const { loading } = this.state;
		return loading ? (<Loading />) : (<ConversationIndexContainer />)
	}
}

export default Home;