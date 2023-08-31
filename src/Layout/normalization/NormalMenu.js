import React from 'react'
import { NavLink } from 'react-router-dom'
const NormalMenu = () => {
  return (
	<div>
		  <div className="text-center dashboard-menu">
			<div className="list-group">
			  <h4>Menu</h4>

			  <NavLink
				to="/aimnobj"
				className="list-group-item list-group-item-action"
			  >
				Aim And Objective
			  </NavLink>
			  <NavLink
				to="/pretest"
				className="list-group-item list-group-item-action"
			  >
				Pretest
			  </NavLink>
			  <NavLink
				to="/1nf"
				className="list-group-item list-group-item-action"
			  >
				1NF
			  </NavLink>
			  <NavLink
				to="/2nf"
				className="list-group-item list-group-item-action"
			  >
				2NF
			  </NavLink>
			  <NavLink
				to="/3nf"
				className="list-group-item list-group-item-action"
			  >
				3NF
			  </NavLink>
			  <NavLink
				to="/bcnf"
				className="list-group-item list-group-item-action"
			  >
			    BCNF
			  </NavLink>
			  <NavLink
				to="/4nf"
				className="list-group-item list-group-item-action"
			  >
			    4NF
			  </NavLink>
			  <NavLink
				to="/5nf"
				className="list-group-item list-group-item-action"
			  >
			    5NF
			  </NavLink>
			  <NavLink
				to="/posttest"
				className="list-group-item list-group-item-action"
			  >
				PostTest
			  </NavLink>
			  <NavLink
				to="/refnfeed"
				className="list-group-item list-group-item-action"
			  >
				Reffernce And Feedback
			  </NavLink>
			</div>
		  </div>
		</div>
	  )
}

export default NormalMenu
