import {memo} from "react"

function ChildMemo(props) {
	console.log("rendering")
	return (
		<div>
			<h2>Instagram : {props.name}</h2>
			<button onClick={props.aksi}>Change Name</button>
		</div>
	)
}

export default memo(ChildMemo)
