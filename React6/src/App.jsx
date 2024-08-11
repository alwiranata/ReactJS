import Button from "./basic/Basic1"
import Basic2 from "./basic/basic2"
import MessageWithEvent from "./basic/message"

import Mydata from "./component/MyData"

function App() {
	return (
		<div>
			<h1>Hello World</h1>
			<Button />
			<Basic2 />
			<MessageWithEvent name='aldo' />
			<MessageWithEvent name='wiranata' />
			<Mydata />
		</div>
	)
}

export default App
