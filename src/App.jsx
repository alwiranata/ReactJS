import {useMemo} from "react"
import {useState} from "react"

const App = () => {
	const [like, setLike] = useState(0)
	const [suscriber, setSuscriber] = useState(0)

	function msg() {
		console.log("Message rendered")
		return like < 10 ? "like kurang dari 10" : "like lebih  dari 10"
	}

	const displayLike = useMemo(() => msg(), [like])

	return (
		<div>
			<button onClick={() => setLike(like + 1)}>Like {like} </button>
			{displayLike}
			<button onClick={() => setSuscriber(suscriber + 1)}>
				Suscriber {suscriber}
			</button>
		</div>
	)
}

export default App
