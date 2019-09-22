import React from 'react';
import { connect } from 'react-redux';
import ConversationIndex from './conversation_index';
import { fetchConversation } from '../../actions/conversation';
import { withRouter } from 'react-router';


const mapStateToProps = (state, ownProps) => ({
	conversations: state.conversations,
	uuid: ownProps.match.params.uuid,
});

const mapDispatchToProps = dispatch => ({
	fetchConversation: id => dispatch(fetchConversation(id)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConversationIndex));
