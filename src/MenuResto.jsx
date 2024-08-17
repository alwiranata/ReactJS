import "./MenuResto.css"

const MenuResto = () => {
	const styleMenuItem = {
		fontSize: "20px",
		textAlign: "center",
	}
	const Menu = [
		{name: "Ayam Bakar", price: 20000},
		{name: "Ayam Goreng", price: 30000},
		{name: "Ayam Kremes", price: 40000},
	]

	return (
		<>
			{Menu.map((item, i) => {
				return (
					<div
						className='menu-item'
						style={styleMenuItem}
						key={i}
					>
						{item.name} :Rp.{item.price}
					</div>
				)
			})}
		</>
	)
}

export default MenuResto
