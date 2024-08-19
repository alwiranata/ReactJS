const Button = () => {
	function ClickHandler(name) {
		console.log(`Hello ${name}`)
	}
	return (
		<div>
			<button onClick={() => ClickHandler("aldo")}>Klik Here</button>
		</div>
	)
}

export default Button
