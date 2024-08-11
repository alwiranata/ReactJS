import React from "react"
import PropTypes from "prop-types"
import "./ItemList.css"

class ExpenseEntryItemList extends React.Component {
	constructor(props) {
		super(props)

		this.handleMouseEnter = this.handleMouseEnter.bind(this)
		this.handleMouseLeave = this.handleMouseLeave.bind(this)
		this.handleMouseOver = this.handleMouseOver.bind(this)
	}

	handleMouseEnter(e) {
		e.target.parentNode.classList.add("highlight")
	}

	handleMouseLeave(e) {
		e.target.parentNode.classList.remove("highlight")
	}

	handleMouseOver(e) {
		console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")")
	}

	render() {
		// Provide a default value for items
		const {items = []} = this.props

		// Ensure items is an array before calling map
		const lists = items.map((item) => (
			<tr
				key={item.id}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				<td>{item.name}</td>
				<td>{item.amount}</td>
				<td>{new Date(item.spendDate).toDateString()}</td>
				<td>{item.category}</td>
			</tr>
		))

		return (
			<table onMouseOver={this.handleMouseOver}>
				<thead>
					<tr>
						<th>Item</th>
						<th>Amount</th>
						<th>Date</th>
						<th>Category</th>
					</tr>
				</thead>
				<tbody>{lists}</tbody>
			</table>
		)
	}
}

// Add PropTypes to ensure `items` is an array and is required
ExpenseEntryItemList.propTypes = {
	items: PropTypes.array.isRequired,
}

export default ExpenseEntryItemList
