import React from 'react'
import Layout from '../Layout'
import DataMenu from '../DataMenu'
const TarAud = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <DataMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <h1>Target Audience</h1>
				 <h2>Undergraduate (UG) Level:</h2>
<h3>DBMS Course for B.Tech./B.E. and B.Sc./B.C.A. Students </h3>
<p>The DBMS (Database Management Systems) course is tailored to cater to the needs of first and second-year students pursuing a B.Tech./B.E. in Computer Science & Information Technology, as well as those enrolled in B.Sc./B.C.A programs in Computer Science. This foundational course provides a comprehensive introduction to the principles and practices of managing data effectively in modern information systems.</p>

<p>By the end of this course, UG students will possess a strong foundation in database management, enabling them to work with data in a structured and organized manner. Whether students are aiming to become proficient software developers, data analysts, or pursue further studies in the field, the DBMS course equips them with the skills and knowledge necessary for success in the realm of data-driven technology.</p>

<h2>Postgraduate (PG) Level:</h2>
<h3>DBMS Course for M.Tech./M.E. and MCA Students</h3>
<p>The DBMS (Database Management Systems) course at the postgraduate level is designed to cater to students pursuing M.Tech./M.E. and MCA degrees in fields such as Computer Science, Information Technology, Compilers, Operating Systems, Databases, AI, and Software Engineering. This advanced course delves into the intricate aspects of database management, building upon the foundational knowledge acquired at the undergraduate level.</p>

<p>The DBMS course at the PG level equips students with the expertise needed to tackle real-world challenges in the management of large-scale data systems. Aspiring database administrators, software architects, and researchers will find this course invaluable as it provides them with the skills to design, implement, and optimize databases that meet the demands of modern applications.
</p>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
  )
}

export default TarAud

