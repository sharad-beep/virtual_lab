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
			 
				 <h1>Reference </h1>
				 <iframe width="1000" height="500" src="https://www.youtube.com/embed/iyJxCc9XRxU" title="Lec-68: Introduction to PL-SQL in DBMS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				 <br></br><br></br><br></br>
				 <iframe width="1000" height="500" src="https://www.youtube.com/embed/yFA_ZzMynv0" title="Lec-103: Basic PL-SQL Programming(While, For Loop) With Execution | Part-2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
  )
}

export default Prefnfeed
