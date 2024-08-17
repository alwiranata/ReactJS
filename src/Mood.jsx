import PropTypes from "prop-types"

function Mood(props) {
	return <div>{props.day}</div>
}

Mood.propTypes = {
	day: PropTypes.string.isRequired,
}

export default Mood
