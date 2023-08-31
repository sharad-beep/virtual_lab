import React from 'react'
import Layout from '../Layout'
import TransMenu from './TransMenu'
const ConCurr = () => {
  return (
	<div>
	<Layout >
	<div className="container-flui m-3 p-3">
	  <div className="row">
		<div className="col-md-3">
		 <TransMenu/>
		</div>
		<div className="col-md-9">
	   
		   <h1>Concurrency</h1>
		  
		</div>
	  </div>
	</div>
  </Layout>
  </div>
  )
}

export default ConCurr
