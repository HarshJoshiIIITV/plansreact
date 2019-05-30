import React,{Component} from 'react';
import 'tachyons';

class Addplan extends Component{
	state={
		content:''
	}
	handleChange=(e)=>{
		this.setState({
			content:e.target.value
		})
	}
	handleSubmit=(e)=>{
		e.preventDefault();
		this.props.addPlan(this.state);
		this.setState({
			content:''
		})
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label className="f3 garamond b "> Add new plan: </label>
					<input className="b pa2 ml3 br3 ml2 mt3 input-reset ba bg-transparent hover-bg-black hover-white w-25" type="text" onChange={this.handleChange} value={this.state.content}/>
				</form>
			</div>
			)
	}
}
export default Addplan; 