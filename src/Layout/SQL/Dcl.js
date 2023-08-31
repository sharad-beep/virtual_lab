import React from 'react'
import Layout from '../Layout'
import SqlMenu from './SqlMenu'

const Dcl = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <SqlMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <h1>DCL info</h1>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
  )
}

export default Dcl
