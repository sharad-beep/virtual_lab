import React from 'react'
import Layout from '../Layout'
import SqlMenu from './SqlMenu'
const Spretest = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <SqlMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <h1>Pretest for SQL</h1>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>

  )
}

export default Spretest
