import React from "react"

function Button() {
	const [cliks, setClick] = React.useState(0)

	function handelClick() {
		setClick(cliks + 1)
		console.log(cliks)
	}

	return (
		<div>
			<p>Clcik here {cliks}</p>
			<button onClick={handelClick}>Click Here </button>
		</div>
	)
}

export default Button
