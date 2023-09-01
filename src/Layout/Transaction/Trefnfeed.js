import React from 'react'
import Layout from '../Layout'
import NormalMenu from '../normalization/NormalMenu'
import TransMenu from './TransMenu'
const Trefnfeed = () => {
  return (
	<div>
	<Layout >
		<div className="container-flui m-3 p-3">
		  <div className="row">
			<div className="col-md-3">
			 <TransMenu/>
			</div>
			<div className="col-md-9">
		   
			   <h1>Reference </h1>
			   <iframe width="1000" height="500" src="https://www.youtube.com/embed/sS4gadQw5iM" title="Lecture 12: ACID Properties &amp;&amp; Transactions in DBMS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			 <br></br><br></br>
			   <iframe width="1000" height="500" src="https://www.youtube.com/embed/HAAhn--tZV8" title="8.2 What is Transaction in DBMS ?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
		  </div>
		</div>
	  </Layout>
  </div>
  )
}

export default Trefnfeed
