import Mood from "./Mood"
function App() {
	return (
		<div>
			<Mood
				day='Sunday'
				Mood='Sad'
			/>
			<Mood
				day='Friday'
				Mood='Happy'
			/>
		</div>
	)
}

export default App
