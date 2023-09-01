import React from 'react'
import Layout from '../Layout'
import NormalMenu from './NormalMenu'
const RefnFeed = () => {
  return (
	<div>
	<Layout >
		<div className="container-flui m-3 p-3">
		  <div className="row">
			<div className="col-md-3">
			 <NormalMenu/>
			</div>
			<div className="col-md-9">
		   
			<iframe width="1000" height="500" src="https://www.youtube.com/embed/ABwD8IYByfk" title="What is Normalization in SQL? | Database Normalization Forms - 1NF, 2NF, 3NF, BCNF | Edureka" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			<iframe width="1000" height="500" src="https://www.youtube.com/embed/GFQaEYEc8_8" title="Learn Database Normalization - 1NF, 2NF, 3NF, 4NF, 5NF" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
			</div>
		  </div>
		</div>
	  </Layout>
  </div>
  )
}

export default RefnFeed
