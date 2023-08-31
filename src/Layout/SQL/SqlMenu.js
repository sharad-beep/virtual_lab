import React from 'react'
import { NavLink } from 'react-router-dom'
const SqlMenu = () => {
  return (
	<div>
		  <div className="text-center dashboard-menu">
			<div className="list-group">
			  <h4>Menu</h4>
			  <NavLink
				to="/saim"
				className="list-group-item list-group-item-action"
			  >
			   Aim and Objective
			  </NavLink>
			  <NavLink
				to="/spretest"
				className="list-group-item list-group-item-action"
			  >
			   Pretest
			  </NavLink>
			  
			  <NavLink
				to="/dml"
				className="list-group-item list-group-item-action"
			  >
				DML
			  </NavLink>
			  <NavLink
				to="/dcl"
				className="list-group-item list-group-item-action"
			  >
				DCL
			  </NavLink>
			  <NavLink
				to="/tcl"
				className="list-group-item list-group-item-action"
			  >
				TCL
			  </NavLink>
			  <NavLink
				to="/ddl"
				className="list-group-item list-group-item-action"
			  >
			    DDL
			  </NavLink>
			  <NavLink
				to="/joins"
				className="list-group-item list-group-item-action"
			  >
			   SQL Joins
			  </NavLink>
			  <NavLink
				to="/sposttest"
				className="list-group-item list-group-item-action"
			  >
			   PostTest
			  </NavLink>
			  <NavLink
				to="/sref"
				className="list-group-item list-group-item-action"
			  >
			   Reference and Feedback
			  </NavLink>
			</div>
		  </div>
		</div>
	  )
}

export default SqlMenu
