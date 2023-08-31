import React from 'react'
import { NavLink } from 'react-router-dom'
const PlsqlMenu = () => {
  return (
	<div>
		  <div className="text-center dashboard-menu">
			<div className="list-group">
			  <h4>Menu</h4>
			  <NavLink
				to="/paim"
				className="list-group-item list-group-item-action"
			  >
				Aim and Objective
			  </NavLink>
			  <NavLink
				to="/ppretest"
				className="list-group-item list-group-item-action"
			  >
				Pretest
			  </NavLink>
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
			  <NavLink
				to="/pposttest"
				className="list-group-item list-group-item-action"
			  >
				PostTest
			  </NavLink>
			  <NavLink
				to="/pref"
				className="list-group-item list-group-item-action"
			  >
				Reference and Feedback
			  </NavLink>
			</div>
		  </div>
		</div>
	  )
}

export default PlsqlMenu
