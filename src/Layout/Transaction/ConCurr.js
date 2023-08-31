import React from 'react'
import Layout from '../Layout'
import TransMenu from './TransMenu'
const ConCurr = () => {
  return (
	<div>
	<Layout >
	<div className="container-flui m-3 p-3">
	  <div className="row">
		<div className="col-md-3">
		 <TransMenu/>
		</div>
		<div className="col-md-9">
	   
		   <h1>Concurrency</h1>
		   <p>Concurrency control is a fundamental aspect of database management systems that addresses the challenges of allowing multiple transactions to execute concurrently while maintaining the integrity and consistency of the database. In a multi-user environment, where several transactions can access and modify the same data concurrently, ensuring correctness becomes essential to prevent anomalies and ensure data integrity.
<br></br>
Goals of Concurrency Control: <br></br>

Isolation: Transactions should execute in a way that their intermediate and final states are not affected by the presence of other transactions executing concurrently.
<br></br>
Consistency: The execution of transactions should maintain the consistency of the database. The final state should be a valid state that satisfies the database constraints.
<br></br>
Serializability: The outcome of concurrent transactions should be equivalent to a serial execution of those transactions.
<br></br>
<br></br>
Techniques for Concurrency Control:<br></br>
<br></br>


1. Lock-Based Concurrency Control:<br></br>

   - Transactions request and release locks on data items to control access.<br></br>

   - Two main types of locks: shared (read) locks and exclusive (write) locks.<br></br>

   - Ensures that only one transaction can have an exclusive lock on a data item, preventing conflicts.<br></br>
   <br></br>


2. Timestamp-Based Concurrency Control:<br></br>

   - Assigns a timestamp to each transaction and enforces order based on these timestamps.<br></br>

   - Transactions with older timestamps are given priority over newer transactions.<br></br>

   - Can handle both read and write operations efficiently.<br></br><br></br>



3. Multiversion Concurrency Control (MVCC):<br></br>

   - Creates multiple versions of data items to allow transactions to read uncommitted data without blocking.<br></br>

   - Ensures consistency by managing multiple versions of data and handling conflicts gracefully.<br></br>

   <br></br>

4. Optimistic Concurrency Control:<br></br>

   - Transactions execute without locking, and validation is performed at the end.<br></br>

   - If a conflict is detected, one or more transactions are rolled back and re-executed.<br></br>
   <br></br>


5. Two-Phase Locking (2PL):<br></br>

   - Transactions have two phases: the growing phase (acquiring locks) and the shrinking phase (releasing locks).<br></br>

   - Guarantees serializability but can lead to deadlocks if not managed properly.<br></br>

   <br></br>

6. Deadlock Detection and Avoidance:<br></br>

   - Techniques to identify and prevent deadlocks (circular dependencies) caused by transactions waiting for each other's locks.<br></br>

   - Detection involves periodically checking for cycles in the wait-for graph.<br></br>

   - Avoidance employs strategies to ensure that circular wait conditions are never met.<br></br>

   <br></br>

Example:<br></br>

Consider two transactions, T1 and T2, that want to transfer money between two bank accounts. Without concurrency control, if both transactions try to access the accounts simultaneously, anomalies like lost updates or inconsistent reads might occur.
<br></br>

With concurrency control, the system ensures that either T1 or T2 gets exclusive access to the accounts while the other transaction waits. This prevents anomalies and ensures that the money transfer is done accurately.
<br></br>
<br></br>

Conclusion:<br></br>

Concurrency control mechanisms play a vital role in maintaining data integrity and consistency in a multi-user database environment. By ensuring proper isolation, enforcing serializability, and preventing conflicts, these techniques allow transactions to execute concurrently while avoiding data corruption and anomalies. The choice of concurrency control technique depends on factors like system requirements, performance goals, and the nature of the transactions being executed.
<br></br>

</p>

		  
		</div>
	  </div>
	</div>
  </Layout>
  </div>
  )
}

export default ConCurr
