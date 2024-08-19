import {useState} from "react"

const Button = () => {
	const [counter, setCounter] = useState(0)
	let newCounter = 0
	function ClickHandler(name) {
		newCounter = counter + 1
		setCounter(newCounter)
		console.log(`Hello ${name} ID : ${newCounter}`)
	}
	return (
		<div>
			<button onClick={() => ClickHandler("aldo")}>Klik Here {counter}</button>
		</div>
	)
}

export default Button
