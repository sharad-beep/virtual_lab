import React from 'react'
import PlsqlMenu from './PlsqlMenu'
import Layout from '../Layout'
import one from "./plsql_cur_1.PNG";

const Cursors = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <PlsqlMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <h1>PL/SQL Curosors</h1>
				 <p>
				 PL/SQL cursors are database objects used to process and manipulate the result sets returned by a SELECT statement. Cursors provide a way to retrieve and work with query results row by row, enabling developers to perform various operations on the retrieved data. Cursors are particularly useful when dealing with large datasets or when performing operations that involve multiple interactions with the database.
<br></br>
Types of Cursors:<br></br>
<br></br>


Implicit Cursors: Automatically created by the database for every DML statement (INSERT, UPDATE, DELETE) and SELECT INTO statement. These cursors manage query results without explicit user intervention.
<br></br>

Explicit Cursors: Created and managed by developers explicitly to handle query results in a more controlled manner.
<br></br>

Explicit Cursor Syntax:
<br></br>
<div>
  <img src={one} alt="Image of plsql_cur_1" />
</div>
<br></br>



Explanation:<br></br>
<br></br>


DECLARE: Marks the beginning of the PL/SQL block.<br></br>

cursor_name: Name of the explicit cursor.<br></br>

SELECT columns FROM table WHERE conditions: The SQL query defining the result set.<br></br>

variable_name: Variable used to store data fetched from the cursor.<br></br>

OPEN cursor_name: Opens the cursor, initializing it for data retrieval.<br></br>

LOOP: A loop to iterate through the rows retrieved from the cursor.<br></br>

FETCH cursor_name INTO variable_name: Retrieves data from the cursor and stores it in the variable.<br></br>

EXIT WHEN cursor_name%NOTFOUND: Exits the loop when there are no more rows to fetch.<br></br>

CLOSE cursor_name: Closes the cursor after data processing.<br></br>

EXCEPTION: Handles exceptions raised during cursor processing.<br></br>
<br></br>


Example of an Explicit Cursor:<br></br>
<br></br>


DECLARE<br></br>

    CURSOR employee_cursor IS<br></br>

        SELECT employee_id, first_name, last_name FROM employees WHERE department_id = 30;<br></br>
		<br></br>

        
    emp_id employees.employee_id%TYPE;<br></br>

    emp_first_name employees.first_name%TYPE;<br></br>

    emp_last_name employees.last_name%TYPE;<br></br>

BEGIN<br></br>

    OPEN employee_cursor;<br></br>

    LOOP<br></br>

        FETCH employee_cursor INTO emp_id, emp_first_name, emp_last_name;<br></br>

        EXIT WHEN employee_cursor%NOTFOUND;<br></br>

        
        DBMS_OUTPUT.PUT_LINE('Employee ID: ' || emp_id || ', Name: ' || emp_first_name || ' ' || emp_last_name);<br></br>

    END LOOP;<br></br>

    CLOSE employee_cursor;<br></br>

EXCEPTION<br></br>

    WHEN OTHERS THEN<br></br>

        DBMS_OUTPUT.PUT_LINE('An error occurred.');<br></br>

END;<br></br>
<br></br>


Explanation:<br></br>

In this example, the explicit cursor employee_cursor retrieves employee details from the employees table for the employees in department 30. The data is fetched row by row, and each employee's ID and name are displayed using DBMS_OUTPUT.PUT_LINE.
<br></br><br></br>


Advantages of Cursors:<br></br>


Cursors enable processing of query results one row at a time, reducing memory consumption for large datasets.<br></br>

Cursors provide control over query execution and result processing.<br></br>

They can help in performing complex calculations and transformations on the retrieved data.<br></br>

<br></br>

Considerations:<br></br>

Explicit cursors require manual opening, fetching, and closing, which can lead to additional coding and potential errors.<br></br>

Cursors should be closed after use to release resources.<br></br>

<br></br>

Conclusion:<br></br>

PL/SQL cursors, both implicit and explicit, offer a powerful mechanism for working with query results in a controlled and efficient manner. Explicit cursors provide developers with more control over the retrieval and processing of data from query results, making them invaluable tools when dealing with complex operations on database data.
<br></br>

				 </p>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
  )
}

export default Cursors
