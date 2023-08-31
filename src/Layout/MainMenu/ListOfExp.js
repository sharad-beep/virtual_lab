import React from 'react'
import Layout from '../Layout'
import DataMenu from '../DataMenu'
import { NavLink } from 'react-router-dom'
const ListOfExp = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <DataMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <h1>List OF Experiments</h1>
				 <ul>
					   <li>
						<NavLink to="normal"> Normalization</NavLink>
						</li>
						<li>
						<NavLink to="trans"> Transaction</NavLink>
						</li>
						<li>
						<NavLink to="sql"> SQL</NavLink>
						</li>
						<li>
						<NavLink to="plsql"> plsql </NavLink>
					   </li>
				 </ul>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
  )
}

export default ListOfExp
