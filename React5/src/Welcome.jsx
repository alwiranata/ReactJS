import React from "react"
import PropTypes from "prop-types"
import "./css/style.css"
import ChildComponen from "./ChildComponen.jsx"
class Welcome extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div className='itemStyle'>
				Hello {this.props.name}
				<ChildComponen />
			</div>
		)
	}
}

Welcome.propTypes = {
	name: PropTypes.string.isRequired,
}

export default Welcome
