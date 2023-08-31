import React from 'react'
import PlsqlMenu from './PlsqlMenu'
import Layout from '../Layout'
import one from "./plsql_exp_1.PNG";
import two from "./plsql_exp_2.PNG";
const Exceptions = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <PlsqlMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <h1> PL/SQL Exceptions </h1>
				 <p>

PL/SQL exceptions are errors or abnormal conditions that can occur during the execution of a PL/SQL program. Exceptions allow developers to handle unexpected situations gracefully, providing a mechanism to capture and manage errors, prevent application crashes, and ensure proper error reporting to users and administrators. PL/SQL provides a structured way to handle exceptions using blocks of code that catch and manage specific error conditions.
<br></br>
Types of Exceptions:<br></br><br></br>

Predefined Exceptions: These are standard exceptions provided by PL/SQL, covering common error scenarios. Examples include NO_DATA_FOUND, TOO_MANY_ROWS, and ZERO_DIVIDE.
<br></br>
User-Defined Exceptions: Developers can define custom exceptions to handle specific application-related errors.
<br></br>
Exception Handling Syntax:
<br></br>
<div>
  <img src={one} alt="Image of plsql_exp_1" />
</div>

Explanation:<br></br>
<br></br>
DECLARE: Marks the beginning of the PL/SQL block.<br></br>
exception_name1, exception_name2, etc.: The predefined or user-defined exceptions being caught.<br></br>
Code to handle exception: Code block to handle the specific exception.<br></br>
EXCEPTION: Marks the beginning of the exception handling block.<br></br>
WHEN exception_name: Specifies which exception is being handled.<br></br>
Additional exception handlers: More handlers can be added to handle different exceptions.<br></br>
<br></br>
Example of Exception Handling:<br></br>

<div>
  <img src={two} alt="Image of plsql_exp_2" />
</div>





Explanation:<br></br>
In this example, an error occurs when the balance goes negative. The VALUE_ERROR exception is raised explicitly. The code block under WHEN VALUE_ERROR handles the error by displaying an error message. If any other exception occurs (WHEN OTHERS), a generic error message is displayed.
<br></br>
Advantages of Exception Handling:<br></br>
<br></br>
Graceful Error Handling: Exceptions provide a structured way to handle errors, ensuring that the program doesn't crash due to unexpected situations.<br></br>
Error Reporting: Exception messages can be tailored to provide meaningful information to users and administrators.<br></br>
Modularization: Exception handling code can be centralized, making it easier to manage and update.<br></br><br></br>
Considerations:<br></br>
<br></br>
Overusing exceptions can make code harder to understand and maintain.<br></br>
Exception handlers should not hide underlying issues but rather provide informative error messages.<br></br><br></br>
Conclusion:<br></br>

Exception handling is a crucial aspect of writing robust and reliable PL/SQL programs. By anticipating and managing errors effectively, developers can ensure that their applications respond gracefully to unexpected situations, enhancing user experience and maintaining data integrity. Properly designed exception handling helps in troubleshooting, debugging, and maintaining the stability of database applications.
<br></br>
				 </p>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
  )
}

export default Exceptions
