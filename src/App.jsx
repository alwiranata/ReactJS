import {useContext} from "react"
import {createContext} from "react"

function Child1() {
	return <Child2 />
}
function Child2() {
	return <Child3 />
}
function Child3() {
	const data = useContext(Context)
	return (
		<div>
			Hello dari {data.nama} umur {data.old}
		</div>
	)
}

const Context = createContext()

function App() {
	return (
		<div>
			<Context.Provider value={{nama: "aldo", old: 17}}>
				<Child1 />
			</Context.Provider>
		</div>
	)
}

export default App
