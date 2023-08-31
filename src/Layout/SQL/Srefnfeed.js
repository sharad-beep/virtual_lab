import React from 'react'
import Layout from '../Layout'
import SqlMenu from './SqlMenu'
const Srefnfeed = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <SqlMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <h1>Reference and feedback for SQL</h1>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>

  )
}

export default Srefnfeed
