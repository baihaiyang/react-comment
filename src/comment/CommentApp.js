import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './index.css';
class CommentApp extends Component{
	constructor(){
		super()
		this.state = {
			comments: []
		}
	}
	componentWillMount = ()=>{
		this._loadComments()
	}
	_loadComments = ()=>{
		let comments = localStorage.getItem('comments');
		if(comments){
			comments = JSON.parse(comments);
			this.setState({
				comments
			})
		}
	}
	_saveComments = (comments)=>{
		localStorage.setItem('comments',JSON.stringify(comments));
	}
	handleSunmitComment = (comment)=>{
		// console.log(comment);
		this.state.comments.push(comment);
		const comments = this.state.comments;
		this.setState({
			comments
		});
		this._saveComments(comments)

	}
	handleDeleteComment = (index)=>{
		const comments = this.state.comments;
		comments.splice(index, 1);
		this.setState({comments});
		this._saveComments(comments);
	}
	render(){
		return (
			<div className="wrapper">
				<CommentInput onSubmit={this.handleSunmitComment.bind(this)}/>
				<CommentList 
					comments={this.state.comments}
					onDeleteComment={this.handleDeleteComment.bind(this)}/>
			</div>
		)
	}
}
export default CommentApp;