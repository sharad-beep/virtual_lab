import React from 'react'
import Layout from '../Layout'
import NormalMenu from './NormalMenu'
import one from "./2nf_1.PNG";
import two from "./2nf_2.PNG";
import three from "./2nf_3.PNG";


const TwoNf = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <NormalMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <h1>2nd Normal Form (2NF)</h1>
				 <p>The 2nd Normal Form (2NF) is a higher level of database normalization that builds upon the principles of the 1st Normal Form (1NF). It addresses issues related to partial dependencies within a relation (table) by ensuring that each non-key attribute is fully functionally dependent on the entire primary key. In simpler terms, it deals with the scenario where a composite primary key (made up of multiple attributes) has attributes that depend on only a part of that key.<br></br>

To meet the criteria of 2NF, a table must first be in 1NF. After that, the following conditions should be met:<br></br>

1. The table must have a primary key composed of one or more attributes.<br></br>
2. Non-key attributes (attributes not part of the primary key) must be fully functionally dependent on the entire primary key, meaning they should not be dependent on only a portion of the key.<br></br>
<br></br>
Example:<br></br>
Consider a table representing sales transactions, with attributes `OrderID`, `ProductID`, `ProductName`, and `ProductCategory`.<br></br>


<div>
  <img src={one} alt="Image of 2nf1" />
</div>


<br></br>
Here, the primary key is `(OrderID, ProductID)`. However, `ProductName` and `ProductCategory` are dependent only on `ProductID`, which is a part of the composite primary key. This creates partial dependencies, violating 2NF.
<br></br>
To bring the table into 2NF, we split it into two separate tables:
<br></br>
<br></br>

Table 1: Orders
<div>
  <img src={two} alt="Image of 2nf2" />
</div>
<br></br>
Table 2: Products
<div>
  <img src={three} alt="Image of 2nf3" />
</div>




Now, each table has attributes that are fully functionally dependent on the respective primary keys (`OrderID` in the Orders table, and `ProductID` in the Products table).


</p>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
  )
}

export default TwoNf

