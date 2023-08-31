import React from 'react'
import { NavLink } from 'react-router-dom';
const DataMenu = () => {
	return (
		<div>
		  <div className="text-center dashboard-menu">
			<div className="list-group">
			  <h4>Menu</h4>
			  <NavLink
				to="/dbms"
				className="list-group-item list-group-item-action"
			  >
				Introduction
			  </NavLink>
			  <NavLink
				to="/cpp"
				className="list-group-item list-group-item-action"
			  >
				Objectives
			  </NavLink>
			  <NavLink
				to="/listofexp"
				className="list-group-item list-group-item-action"
			  >
				List Of Experiments
			  </NavLink>
			  <NavLink
				to="/target"
				className="list-group-item list-group-item-action"
			  >
				Target Audience
			  </NavLink>
			</div>
		  </div>
		</div>
	  );
}

export default DataMenu

