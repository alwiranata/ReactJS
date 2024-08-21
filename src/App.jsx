import {useRef} from "react"

const App = () => {
	const msg = useRef(null)
	const displayMsg = useRef(null)

	function clickHandler() {
		console.log(msg.current.value)
		displayMsg.current.innerHTML = msg.current.value
		displayMsg.current.style.color = "#abd"
	}
	return (
		<>
			<div>
				<input
					type='text/'
					ref={msg}
					placeholder='Kirim pesan kamu'
				/>
			</div>
			<div>
				<button onClick={clickHandler}>Klik Here</button>
			</div>
			<div ref={displayMsg}></div>
		</>
	)
}

export default App
