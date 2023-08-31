import React from 'react'
import { NavLink } from 'react-router-dom'
const TransMenu = () => {
  return (
	<div>
		  <div className="text-center dashboard-menu">
			<div className="list-group">
			  <h4>Menu</h4>
			  <NavLink
				to="/acidpro"
				className="list-group-item list-group-item-action"
			  >
				ACID Properties
			  </NavLink>
			  <NavLink
				to="/concurr"
				className="list-group-item list-group-item-action"
			  >
				Concurrency
			  </NavLink>
			  <NavLink
				to="/serial"
				className="list-group-item list-group-item-action"
			  >
				Serializability
			  </NavLink>
			</div>
		  </div>
		</div>
  )
}

export default TransMenu
