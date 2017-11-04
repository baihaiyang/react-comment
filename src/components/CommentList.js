import React, {Component} from 'react';
import Comment from './Comment';


class CommentList extends Component{
	static defaultProps = {
		comments: []
	}
	handleDeleteComment(index){
		if(this.props.onDeleteComment){
			this.props.onDeleteComment(index);
		}
	}
	render(){
		console.log(this.props);
		return (
			<div>
				{
					this.props.comments.map((comment, index)=>{
						return (
							<Comment 
								comment={comment} 
								key={index} 
								index={index}
								onDeleteComment={this.handleDeleteComment.bind(this)}/>
						)
					})
				}
			</div>
		)
	}
}
export default CommentList;