import DemoComp from './DemoComp'

function Component(props) {
	return (
		<div className='itemStyle'>
			<h3>First Name : {props.firstName}</h3>
			<h3>Last Name : {props.lastName}</h3>
			<h3>Last ID : {props.id}</h3>
            <DemoComp name="demoapp"/>
		</div>
	)
}


export default Component
