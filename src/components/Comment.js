import React, {Component} from 'react';

class Comment extends Component{
	constructor(){
		super();
		this.state = {
			timeString: ''
		}
	}
	componentWillMount = ()=>{
		this._updateTimeString();
		this._timer = setInterval(
			this._updateTimeString.bind(this),
			5000
		)
	}
	componentWillUnmount = ()=>{
		clearInterval(this._timer);
	}
	_updateTimeString= ()=>{
		const comment = this.props.comment;
		const duration = (Date.now() - comment.createdTime)/1000;
		this.setState({
			timeString: duration > 60 ? `---${Math.round(duration/60)} fenzhongqian`
			: `---${Math.round(Math.max(duration, 1))} miaoqian`
		})
	}
	_getProcessedContent = (content)=>{
		return content
			.replace(/&/g,'&amp;')
			.replace(/</g,'&lt;')
			.replace(/>/g,'&gt;')
			.replace(/"/g,'&quot;')
			.replace(/'/g, '&#039')
			.replace(/`([\S\s]+?)`/g,'<code>$1</code>')
	}
	handleDeleteComment =()=>{
		if(this.props.onDeleteComment){
			this.props.onDeleteComment(this.props.index);
		}
	}
	render(){
		return (
			<div className='comment'>
		        <div className='comment-user'>
		          <span>{this.props.comment.username} </span>：
		        </div>
		        <p dangerouslySetInnerHTML={{
		        	__html: this._getProcessedContent(this.props.comment.content)
		        }}/>
		        <span className="comment-createdTime">
		        	{this.state.timeString}
		        </span>
		        <span 
		        	className="comment-delete"
		        	onClick={this.handleDeleteComment.bind(this)}>删除</span>
		    </div>		
		)
	}
}
export default Comment;