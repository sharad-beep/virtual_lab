import React from 'react'
import Layout from '../Layout'
import NormalMenu from './NormalMenu'
import one from "./4nf_1.PNG";
import two from "./4nf_2.PNG";
import three from "./4nf_3.PNG";
import four from "./4nf_4.PNG";
const FourNf = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <NormalMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <p>
				 <h1>4th Normal Form (4NF) </h1><br></br>

The 4th Normal Form (4NF) is a level of database normalization that builds upon the principles of the 3rd Normal Form (3NF). It addresses issues related to multi-valued dependencies within a relation (table) by ensuring that attributes are functionally dependent only on the primary key and not on other non-key attributes.
<br></br>
To achieve 4NF, a table must first be in the 1st Normal Form (1NF), 2nd Normal Form (2NF), and 3rd Normal Form (3NF). After that, the following condition should be met:
<br></br>
1. The table must have a primary key composed of one or more attributes.<br></br>
2. No multi-valued dependencies exist, meaning non-key attributes are not functionally dependent on portions of the primary key.<br></br>

Example:<br></br>
Consider a table representing students, their courses, and the textbooks required, with attributes `StudentID`, `StudentName`, `Course`, and `Textbook`.
<br></br>
<div>
  <img src={one} alt="Image of 4nf1" />
</div>


Here, the primary key is `(StudentID, Course)`. The `Textbook` attribute depends on both `StudentID` and `Course`, which creates a multi-valued dependency, violating 4NF.
<br></br>
To bring the table into 4NF, we split it into three separate tables:
<br></br>
Table 1: Students
<div>
  <img src={two} alt="Image of 4nf2" />
</div>
<br></br>
Table 2: Courses
<div>
  <img src={three} alt="Image of 4nf3" />
</div>
<br></br>

Table 3: Textbooks
<div>
  <img src={four} alt="Image of 4nf4" />
</div>
<br></br>



Now, each table has attributes that are functionally dependent only on the respective primary keys (`StudentID` in the Students table, `Course` in the Courses table, and `Course` in the Textbooks table).
<br></br>

				 </p>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
  )
}

export default FourNf
