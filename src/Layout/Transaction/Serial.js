import React from 'react'
import Layout from '../Layout'
import TransMenu from './TransMenu'
const Serial = () => {
  return (
	<div>
	<Layout >
	<div className="container-flui m-3 p-3">
	  <div className="row">
		<div className="col-md-3">
		 <TransMenu/>
		</div>
		<div className="col-md-9">
	   
		   <h1>Serializability</h1>
		  
		</div>
	  </div>
	</div>
  </Layout>
  </div>
  )
}

export default Serial

