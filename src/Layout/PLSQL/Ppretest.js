import React from 'react'
import Layout from '../Layout'
import PlsqlMenu from './PlsqlMenu'
const Ppretest = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <PlsqlMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <h1>Pretest of plsql</h1>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
  )
}

export default Ppretest
