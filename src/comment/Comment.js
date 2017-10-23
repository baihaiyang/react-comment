import React,{Component} from 'react';
class Comment extends Component{
	render(){
		console.log(this.props.comment.username);
		return (
			<div className='comment'>
		        <div className='comment-user'>
		          <span>{this.props.comment.username} </span>：
		        </div>
		        <p>{this.props.comment.content}</p>
		    </div>
		)
	}
}
export default Comment;