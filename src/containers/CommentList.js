import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CommentList from '../components/CommentList';
import {initComments, deleteComment} from '../reducers/comments';

class CommentListContainer extends Component{
	static propTypes = {
		comments: PropTypes.array,
		initComments: PropTypes.func,
		onDeleteComment: PropTypes.func
	}
	componentWillMount(){
		this._loadComments();
	}
	_loadComments(){
		let comments = localStorage.getItem('comments');
		comments = comments ? JSON.parse(comments) : [];
		console.log(comments);
		this.props.initComments(comments);
	}
	handleDeleteComment(index){
		console.log(this.props);
		const {comments} = this.props;
		const newComments = [
			...comments.slice(0, index),
			...comments.slice(index+1)
		]
		console.log(newComments);
		localStorage.setItem('comments',JSON.stringify(newComments))
		if(this.props.onDeleteComment){
			this.props.onDeleteComment(index)
		}
	}
	render(){
		return (
			<CommentList 
				comments={this.props.comments}
				onDeleteComment={this.handleDeleteComment.bind(this)} />
		)
	}
}
const mapStateToProps = (state)=>{
	console.log(state);
	return {
		comments: state.comments
	}
}
const mapDispatchToProps = (dispatch)=>{
	return {
		initComments:(comments)=>{
			console.log(comments);
			dispatch(initComments(comments))
		},
		onDeleteComment:(commentIndex)=>{
			dispatch(deleteComment(commentIndex))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);