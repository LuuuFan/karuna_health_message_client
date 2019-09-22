import React from 'react';
import { connect } from 'react-redux';
import Home from './home';
import {fetchConversationList} from '../../actions/conversation';

const mapStateToProps = state  => ({
	conversations: state.conversations
});

const mapDispatchToProps = dispatch => ({
	fetchConversationList: () => dispatch(fetchConversationList()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
