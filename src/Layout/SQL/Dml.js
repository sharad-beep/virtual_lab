import React from 'react'
import Layout from '../Layout'
import SqlMenu from './SqlMenu'
const Dml = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <SqlMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <h1>SQL (Structured Query Language)</h1>
				 <p>

SQL (Structured Query Language) is a domain-specific language used for managing and manipulating relational databases. It provides a standardized way to interact with databases, enabling users to create, retrieve, update, and delete data, as well as manage the structure of the database itself. SQL is used by database management systems (DBMS) to execute commands and queries, making it an essential tool for anyone working with databases.
<br></br>
<br></br>

Components of SQL:<br></br>
<br></br>


Data Definition Language (DDL): DDL is used to define the structure of a database, including creating and modifying tables, specifying constraints, and defining relationships.
<br></br>

Data Manipulation Language (DML): DML deals with the manipulation of data stored in the database. It includes commands for inserting, updating, and deleting data.
<br></br>

Data Query Language (DQL): DQL is used for retrieving data from the database. It includes the SELECT statement, which is used to query data based on specified criteria.
<br></br>

Data Control Language (DCL): DCL is used to control access to data within the database. It includes commands like GRANT and REVOKE, which manage user permissions.
<br></br>
<br></br>
<h2> DML (Data Manipulation Language)</h2>

DML (Data Manipulation Language) is a subset of SQL that focuses on manipulating data stored in a database. DML statements enable users to insert, update, delete, and retrieve data, allowing them to perform various operations on the information stored within the database.
<br></br>
Common DML Statements:<br></br>
<br></br>


INSERT: Used to add new records or rows into a table.<br></br>

UPDATE: Used to modify existing records or rows in a table.<br></br>

DELETE: Used to remove records or rows from a table.<br></br>

SELECT: Used to retrieve data from one or more tables.<br></br>
<br></br>


Benefits of DML:<br></br>
<br></br>

Allows users to interact with the data stored in the database.<br></br>
Facilitates data maintenance, ensuring data accuracy and consistency.<br></br>
Supports CRUD (Create, Read, Update, Delete) operations on database records.<br></br>
<br></br>
Considerations:<br></br>
<br></br>
Always ensure proper WHERE clauses when using UPDATE and DELETE statements to avoid unintended consequences.<br></br>
Transactions are essential when performing multiple DML operations together to maintain data integrity.<br></br>
<br></br>
Conclusion:<br></br>
<br></br>
DML in SQL is fundamental for manipulating data stored in a database. Whether it's inserting new records, updating existing ones, deleting unwanted data, or retrieving specific information, DML statements provide the tools needed to manage and maintain the data within a database. Understanding DML is essential for developers and users who interact with databases to perform data-related tasks efficiently and accurately.
<br></br>
</p>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
  )
}

export default Dml
