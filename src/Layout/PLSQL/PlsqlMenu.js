import React from 'react'
import { NavLink } from 'react-router-dom'
const PlsqlMenu = () => {
  return (
	<div>
		  <div className="text-center dashboard-menu">
			<div className="list-group">
			  <h4>Menu</h4>
			  <NavLink
				to="/procedure"
				className="list-group-item list-group-item-action"
			  >
				Procedure
			  </NavLink>
			  <NavLink
				to="/Trigger"
				className="list-group-item list-group-item-action"
			  >
				Triggers
			  </NavLink>
			  <NavLink
				to="/Cursors"
				className="list-group-item list-group-item-action"
			  >
				Cursors
			  </NavLink>
			  <NavLink
				to="/Exceptions"
				className="list-group-item list-group-item-action"
			  >
			    Exceptions
			  </NavLink>
			</div>
		  </div>
		</div>
	  )
}

export default PlsqlMenu
