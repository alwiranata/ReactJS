import {Component} from "react"

class Basic2 extends Component {
	constructor(props) {
		super(props)
		this.state = {backgroundColor: "blue"}
		this.handleButtonClick = this.handleButtonClick.bind(this)
	}

	handleButtonClick() {
		this.setState({backgroundColor: "Red"})
	}

	render() {
		return (
			<div style={{backgroundColor: this.state.backgroundColor}}>
				<button onClick={this.handleButtonClick}>Click Here</button>
			</div>
		)
	}
}

export default Basic2
