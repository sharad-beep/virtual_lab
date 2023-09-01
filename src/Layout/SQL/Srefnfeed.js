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
			 
				 <h1>Reference</h1>
				 <iframe width="1000" height="500" src="https://www.youtube.com/embed/zbMHLJ0dY4w" title="SQL Basics for Beginners | Learn SQL | SQL Tutorial for Beginners | Edureka" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				<br></br><br></br><br></br>
				 <iframe width="1000" height="500" src="https://www.youtube.com/embed/DvNHkJAR0BM" title="SQL Basics For Beginners | SQL Tutorial For Beginners | SQL For Beginners | Learn SQL | Simplilearn" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			  </div>
			</div>
		  </div>
		</Layout>
	</div>

  )
}

export default Srefnfeed
