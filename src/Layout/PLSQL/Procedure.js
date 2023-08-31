import React from 'react'
import PlsqlMenu from './PlsqlMenu'
import Layout from '../Layout'
import one from "./plsql_pro_1.PNG";
import two from "./plsql_pro_2.PNG";
const Procedure = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <PlsqlMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <h1>PL/SQL Procedures </h1>
				 <p>
				 PL/SQL (Procedural Language/Structured Query Language) is an extension of SQL that adds procedural programming capabilities to SQL. PL/SQL procedures are a key feature of PL/SQL and serve as a way to encapsulate a sequence of SQL and procedural statements into a reusable and modular unit. Procedures enhance the power of SQL by allowing developers to create custom logic and control structures.
<br></br>
<br></br>

Benefits of Using Procedures:<br></br>
<br></br>


Modularity: Procedures encapsulate a set of related SQL and PL/SQL statements into a single unit. This enhances code reusability and maintainability.<br></br>

Abstraction: Procedures allow developers to abstract complex operations into a single callable entity, making the code more understandable.<br></br>

Security: Procedures can provide controlled access to data, as users interact with the database only through the predefined interface of the procedure.<br></br>

Performance: Compiled PL/SQL procedures are stored in the database and executed faster than equivalent SQL statements executed individually.<br></br>

Error Handling: Procedures enable centralized error handling, making it easier to manage exceptions and errors.<br></br>
<br></br>


Syntax of a PL/SQL Procedure:<br></br>
<div>
  <img src={one} alt="Image of plsql_pro_1" />
</div>




Explanation:<br></br>
<br></br>
CREATE [OR REPLACE] PROCEDURE: Defines the beginning of a procedure declaration.<br></br>
procedure_name: Name of the procedure.<br></br>
parameter_name: Name of the input or output parameter passed to the procedure.<br></br>
parameter_type: Data type of the parameter.<br></br>
IS: Marks the beginning of the procedure body.<br></br>
BEGIN: Marks the start of the procedural statements.<br></br>
EXCEPTION: Handles exceptions raised during procedure execution.<br></br>
<br></br>


Example of a PL/SQL Procedure:<br></br>
<div>
  <img src={two} alt="Image of plsql_pro_2" />
</div>








Explanation:<br></br>
In this example, the procedure CalculateSalary takes an employee ID as input, retrieves the employee's salary from the database, increases it by 10%, and updates the salary. It demonstrates the use of procedural statements like SELECT, UPDATE, and exception handling.
<br></br>
Calling a PL/SQL Procedure:<br></br><br></br>

You can call a PL/SQL procedure using the following syntax:<br></br>
EXECUTE procedure_name(parameters);
<br></br><br></br>
For the above example:<br></br>
EXECUTE CalculateSalary(101);<br></br><br></br>

Conclusion:<br></br>
PL/SQL procedures are a powerful feature of PL/SQL that allow developers to create modular, efficient, and reusable code units. By encapsulating both SQL and procedural statements, procedures enhance the capabilities of SQL and provide a structured approach to developing database-centric applications.
<br></br>

				 </p>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
  )
}

export default Procedure
