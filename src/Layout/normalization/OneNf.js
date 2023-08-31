import React from 'react'
import NormalMenu from './NormalMenu'
import Layout from '../Layout'
import rea from "./1nf_1.jpg";
import res from "./1nf_2.PNG"
const OneNf = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <NormalMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <h1>1NF</h1>
				 <h3>Normalization</h3>
				 <p>Normalization is a database design technique that helps organize data in a structured manner to minimize data redundancy and ensure data integrity. It involves breaking down a complex database into smaller, related tables while adhering to certain rules or normal forms. Each normal form has its own set of criteria that must be met to ensure efficient data management and querying.
				 <br></br>
				 <br></br>


<h3>1st Normal Form (1NF)</h3>
1st Normal Form (1NF) is the most basic level of normalization. A table is said to be in 1NF if it meets the following conditions:				 <br></br>


1. Atomic Values: Each column in a table must hold atomic (indivisible) values. This means that a column should not contain multiple values or arrays. Every value should be indivisible, ensuring that each piece of data is unique and meaningful.				 <br></br>


2. No Repeating Groups: A column cannot contain a list or a set of values. All the values within a column must be of the same data type, and each row should hold a single value for that column.				 <br></br>


3. Unique Column Names: Each column in the table should have a unique name that identifies the data it holds. This helps in distinguishing between different attributes.				 <br></br>


Example:			 <br></br>

Consider a table containing information about students and their subjects:			
<div>
  <img src={rea} alt="Image of 1nf1" />
</div>



This table violates 1NF because the "Subjects" column contains multiple values in a single row. To bring it into 1NF, we need to break down the "Subjects" column into separate rows:				 <br></br>
<div>
  <img src={res} alt="Image of 1nf2" />
</div>
</p>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
  )
}

export default OneNf
