import {memo} from "react"

const ChildMemo = (props) => {
	console.log(" Child component rendering")
	return (
		<div>
			<h2>Instagram : {props.name}</h2>
		</div>
	)
}

export default memo(ChildMemo)
