import React from 'react'
import Layout from '../Layout'
import NormalMenu from './NormalMenu'
const Pretest = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <NormalMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <h1>pretest info</h1>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>

  )
}

export default Pretest
