import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import App from "./App.jsx"
import Welcome from "./Welcome.jsx"
import Component from "./component/HelloComponent.jsx"
import PropsClass from "./component/PropClass.jsx"
import Counter from "./component/Counter.jsx"
import Employee from "./component/Employe.jsx"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Welcome name='aldo' /> 
		<hr/>
		<Component
			firstName='aldo'
			lastName='wiranata' 
			id="18"
		/>
		<hr/>
		<App/>
		<hr/>
		<PropsClass name= "aldo"/>
		<hr/>
		<Counter/>
		<hr/>
		<Employee/>

	</StrictMode>
)

