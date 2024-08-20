import {useState} from "react"
import ChildMemo from "./ChildMemo"

const App = () => {
	const [like, setLike] = useState(0)
	const [suscriber, setSuscriber] = useState(0)
	const [name, setName] = useState("aldowiranata17")

	function handlerName() {
		let chanelName = ""
		if (name == "aldowiranata17") {
			chanelName = "awiranata263"
		} else {
			chanelName = "aldowiranata17"
		}
		setName(chanelName)
		console.log(`setname run ${name} `)
	}

	return (
		<div>
			<button onClick={() => setLike(like + 1)}>Like {like} </button>
			<button onClick={() => setSuscriber(suscriber + 1)}>
				Suscriber {suscriber}
			</button>
			<ChildMemo name={name} />
			<button onClick={handlerName}>Change Name</button>
		</div>
	)
}

export default App
