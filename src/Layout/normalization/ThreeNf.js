import React from 'react'
import Layout from '../Layout'
import NormalMenu from './NormalMenu'
import one from "./3nf_1.PNG";
import two from "./3nf_2.PNG";
import three from "./3nf_3.PNG";
const ThreeNf = () => {
  return (
	<div>
	  <div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <NormalMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <p>
				 <h1>3rd Normal Form (3NF)
</h1><br></br>
The 3rd Normal Form (3NF) is a further level of database normalization that builds upon the principles of the 2nd Normal Form (2NF). It addresses issues related to transitive dependencies within a relation (table) by ensuring that non-key attributes are only dependent on the primary key and not on other non-key attributes.
<br></br>
To achieve 3NF, a table must first be in both the 1st Normal Form (1NF) and the 2nd Normal Form (2NF). After that, the following conditions should be met:
<br></br>
1. The table must have a primary key composed of one or more attributes.<br></br>
2. Non-key attributes must be directly dependent on the entire primary key and not on other non-key attributes.<br></br>

Example:<br></br>
Consider a table representing courses and their instructors, with attributes `CourseCode`, `CourseName`, `Instructor`, and `InstructorLocation`.
<br></br>
<div>
  <img src={one} alt="Image of 3nf1" />
</div>


Here, the primary key is `CourseCode`. The `InstructorLocation` attribute depends on the instructor's name (`Instructor`), which is a non-key attribute. This creates a transitive dependency, violating 3NF.
<br></br>





To bring the table into 3NF, we split it into two separate tables:
<br></br>


Table 1: Courses
<br></br>
<div>
  <img src={two} alt="Image of 3nf2" />
</div>


Table 2: Instructors
<br></br>
<div>
  <img src={three} alt="Image of 3nf3" />
</div>


Now, each table has attributes that are directly dependent on the respective primary keys (`CourseCode` in the Courses table and `Instructor` in the Instructors table).
<br></br>

				 </p>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
	</div>
  )
}

export default ThreeNf

