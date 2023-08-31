import React from 'react'
import Layout from '../Layout'
import PlsqlMenu from './PlsqlMenu'
const Prefnfeed = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <PlsqlMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <h1>Reference and Feedback of plsql</h1>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
  )
}

export default Prefnfeed
