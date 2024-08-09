import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import App from "./App.jsx"
import Welcome from "./Welcome.jsx"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Welcome />
		<App />
	</StrictMode>
)
