import React from 'react'
import Layout from '../Layout'
import SqlMenu from './SqlMenu'
const Tcl = () => {
  return (
	<div>
	  <Layout >
		  <div className="container-flui m-3 p-3">
			<div className="row">
			  <div className="col-md-3">
			   <SqlMenu/>
			  </div>
			  <div className="col-md-9">
			 
				 <p>
				 <h1>TCL (Transaction Control Language)</h1>
				 TCL (Transaction Control Language) is a subset of SQL (Structured Query Language) that is specifically designed to manage transactions within a Database Management System (DBMS). TCL commands are used to control the transactions' behavior, ensuring that they maintain the ACID properties (Atomicity, Consistency, Isolation, Durability) and guarantee data integrity and reliability in a multi-user database environment.
<br></br>
TCL consists of three main commands: `COMMIT`, `ROLLBACK`, and `SAVEPOINT`.<br></br>
<br></br>


1. COMMIT:<br></br>
   - The `COMMIT` command is used to finalize a transaction, making its changes permanent in the database.<br></br>
   - When a `COMMIT` is issued, all the changes made within the current transaction are saved and become permanent, ensuring the Durability property of ACID.<br></br>
   - After a `COMMIT`, the changes become visible to other transactions, and the transaction ends.<br></br>
   <br></br>
2. ROLLBACK:<br></br>
   - The `ROLLBACK` command is used to undo the changes made within a transaction.<br></br>
   - If something goes wrong during the transaction or if the user decides to abort the transaction, a `ROLLBACK` can be issued to revert all the changes back to the state before the transaction began.<br></br>
   - The `ROLLBACK` command helps maintain Atomicity, ensuring that either all changes are applied (via `COMMIT`) or none at all.<br></br>
   <br></br>
3. SAVEPOINT:<br></br>
   - The `SAVEPOINT` command is used to create points within a transaction where you can later decide to either commit the changes made after that point or roll back to that point.<br></br>
   - This provides a more granular way to control a transaction and manage its partial changes.<br></br>
   - For example, you could set a `SAVEPOINT` before a complex update operation, and if the subsequent operations fail, you could rollback only to the savepoint instead of undoing the entire transaction.<br></br>
   <br></br>
Example:<br></br>
Let's consider a banking scenario to illustrate TCL commands:<br></br>
<br></br>
Suppose you want to transfer money from Account A to Account B. Here's how TCL commands come into play:<br></br>
<br></br>
1. Begin a transaction: `BEGIN TRANSACTION;`<br></br>
2. Deduct money from Account A: `UPDATE Accounts SET Balance = Balance - amount WHERE AccountID = A;`<br></br>
3. Add money to Account B: `UPDATE Accounts SET Balance = Balance + amount WHERE AccountID = B;`<br></br>
4. Check if everything is correct. If yes, commit the transaction: `COMMIT;`<br></br>
5. If something goes wrong, rollback the transaction: `ROLLBACK;`<br></br>
<br></br>
TCL commands ensure that either the entire money transfer is successful (by committing the transaction) or no changes are applied at all (by rolling back the transaction).
<br></br>
In summary, Transaction Control Language (TCL) commands are crucial for managing transactions in a DBMS. They provide the necessary control over transactions' lifecycle, ensuring that data changes are consistent, reliable, and maintain the ACID properties that are essential for database integrity and reliability.
<br></br>
				 </p>
				
			  </div>
			</div>
		  </div>
		</Layout>
	</div>
  )
}

export default Tcl
