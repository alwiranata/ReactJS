import {useEffect} from "react"
import {useState} from "react"

const Button = () => {
	const [like, setLike] = useState(0)
	const [dislike, setDislike] = useState(0)
	useEffect(() => {
		console.log(`Like ke ${like} | Dislike ke ${dislike}`)
	}, [])
	return (
		<div>
			<button
				onClick={() => {
					setDislike(dislike + 1)
				}}
			>
				Dislike {dislike}
			</button>
			<button onClick={() => setLike(like + 1)}> Like {like}</button>
		</div>
	)
}

export default Button
