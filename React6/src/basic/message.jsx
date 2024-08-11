import React from "react"
import PropTypes from "prop-types"

class MessageWithEvent extends React.Component {
	constructor(props) {
		super(props)
		this.logEventToConsole = this.logEventToConsole.bind(this)
	}
	logEventToConsole(msg, e) {
		console.log(e.target.innerHTML)
		console.log(msg)
	}
	render() {
		return (
			<div
				onClick={this.logEventToConsole.bind(
					this,
					Math.floor(Math.random() * 10)
				)}
			>
				<p>Hello {this.props.name}</p>
			</div>
		)
	}
}

MessageWithEvent.propTypes = {
	name: PropTypes.string.isRequired,
}

export default MessageWithEvent
