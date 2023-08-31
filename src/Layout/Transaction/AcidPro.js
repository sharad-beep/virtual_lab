import React from 'react'
import TransMenu from './TransMenu'
import Layout from '../Layout'
const AcidPro = () => {
  return (
	<div>
	<Layout >
	<div className="container-flui m-3 p-3">
	  <div className="row">
		<div className="col-md-3">
		 <TransMenu/>
		</div>
		<div className="col-md-9">
	   
		   <h1>Acid Properties</h1><br></br>

		   <p>In a Database Management System (DBMS), a transaction is a sequence of one or more database operations that are treated as a single unit of work. Transactions ensure data integrity, consistency, and reliability in a multi-user environment by guaranteeing that a series of operations are either completed successfully or not applied at all, preventing the database from being left in an inconsistent state.
<br></br>
Transactions are commonly referred to by the acronym **ACID**, which stands for:
<br></br>
<br></br>

1. Atomicity: This property ensures that a transaction is treated as a single, indivisible unit of work. It means that either all the changes made by the transaction are applied, or none of them are. If any part of the transaction fails, the entire transaction is rolled back, and the database remains unchanged.
<br></br>

2. Consistency: Transactions must transform the database from one consistent state to another. The database must satisfy all integrity constraints and business rules before and after the transaction is executed.
<br></br>

3. Isolation:Isolation ensures that the intermediate states of a transaction are not visible to other transactions until the transaction is completed. This prevents interference and maintains the integrity of the data during concurrent execution of multiple transactions.
<br></br>

4. Durability: Once a transaction is successfully completed, its changes are permanently stored in the database and are not lost, even in the presence of system crashes or failures.
<br></br>
<br></br>

Example:<br></br>

Let's consider a banking scenario to understand transactions better:
<br></br>

Suppose you want to transfer money from Account A to Account B. This involves two operations: deducting the amount from Account A and adding the amount to Account B.
<br></br><br></br>


Here's how a transaction ensures the ACID properties:
<br></br>
<br></br>

1. Atomicity: The transaction ensures that both the deduction from Account A and the addition to Account B occur together. If one operation fails (e.g., due to insufficient funds), the entire transaction is rolled back, and neither account is affected.
<br></br>

2. Consistency: The transaction maintains the consistency of the database. Before the transaction, both accounts should satisfy the rule that total assets minus total liabilities should be zero. After the transaction, this rule should still hold.
<br></br>

3. Isolation: While your transaction is in progress, other transactions involving the same accounts might be happening concurrently. Isolation ensures that the effects of other transactions are not visible until your transaction is complete. For example, no other transaction should see the balance of Account A decrease until your transaction is committed.
<br></br>

4. Durability: Once the transaction is successfully completed (funds transferred and accounts updated), the changes are saved in the database. Even if the system crashes immediately after the transaction, the money transfer will still be recorded.
<br></br>

In summary, transactions are a fundamental concept in DBMS that provide a reliable and structured way to manage and manipulate data in a consistent and controlled manner, especially in environments with concurrent access and potential failures.</p>
<br></br>
	  
		</div>
	  </div>
	</div>
  </Layout>
  </div>
  )
}

export default AcidPro
