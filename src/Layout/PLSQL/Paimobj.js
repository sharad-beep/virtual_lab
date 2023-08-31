import React from 'react'
import Layout from '../Layout'
import PlsqlMenu from './PlsqlMenu'
const Paimobj = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <PlsqlMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <h1>Aim and Objective of plsql</h1>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
  )
}

export default Paimobj
