import React from 'react'
import Layout from '../Layout'
import TransMenu from './TransMenu'
const Serial = () => {
  return (
	<div>
	<Layout >
	<div className="container-flui m-3 p-3">
	  <div className="row">
		<div className="col-md-3">
		 <TransMenu/>
		</div>
		<div className="col-md-9">
	   
		   <h1>Serializability</h1>
		   <p>

Serializability is a crucial concept in the field of database management systems that ensures the correctness and consistency of concurrent transactions. In a database system, multiple transactions can run concurrently, and ensuring their outcomes are equivalent to executing them in a serial order (one after the other) is essential to maintain data integrity.
<br></br>
Definition:<br></br>

Serializability refers to the property that a schedule of concurrent transactions produces the same result as if the transactions were executed serially in some order.
<br></br>
<br></br>

Types of Schedules:<br></br>

Serial Schedule: A schedule in which transactions are executed one after the other without any overlap.<br></br>

Concurrent Schedule: A schedule in which transactions are executed in an interleaved manner.<br></br>


Conflict Operation:<br></br>

A conflict operation occurs when two transactions access the same data item, and at least one of the operations is a write operation.<br></br>


Serializable Schedule:<br></br>

A concurrent schedule is serializable if its execution produces the same final state as some serial execution of the same transactions.<br></br>

<br></br>

Example:<br></br>

Consider two transactions: T1 and T2, which operate on two accounts: A and B.<br></br>


T1: Reads from account A, writes to account B.<br></br>

T2: Reads from account B, writes to account A.<br></br>


Let's examine the following two schedules:<br></br>
<br></br>


1.Schedule S1:<br></br>

   - T1 reads from A<br></br>

   - T2 reads from B<br></br>

   - T1 writes to B<br></br>

   - T2 writes to A<br></br>

   <br></br>

2. Schedule S2:<br></br>

   - T2 reads from B<br></br>

   - T1 reads from A<br></br>

   - T2 writes to A<br></br>

   - T1 writes to B<br></br>

   <br></br>

In both S1 and S2, transactions are interleaved and executed concurrently. However, the final state of the accounts differs between the two schedules.<br></br>

<br></br>

- In Schedule S1: A = 100, B = 200<br></br>

- In Schedule S2: A = 200, B = 100<br></br>
<br></br>


Serializable Schedule:<br></br>

A schedule that is equivalent to a serial execution (T1 followed by T2 or vice versa) would produce the same final state, regardless of the order of execution. In this case, neither S1 nor S2 is serializable since the final states are different from those produced by the serial execution.
<br></br>

Serializable Equivalent Schedules:<br></br>

Serial Schedule:** T1 followed by T2<br></br>

   - T1 reads from A<br></br>

   - T1 writes to B<br></br>

   - T2 reads from B<br></br>

   - T2 writes to A<br></br>

   - Final state: A = 200, B = 100<br></br>
   <br></br>


Serial Schedule: T2 followed by T1<br></br>

   - T2 reads from B<br></br>

   - T2 writes to A<br></br>

   - T1 reads from A<br></br>

   - T1 writes to B<br></br>

   - Final state: A = 200, B = 100<br></br>
   <br></br>


Both of these serial schedules produce the same final state, which matches the state of the original schedules.<br></br>
<br></br>


Conclusion:<br></br>

Serializability ensures that the execution of concurrent transactions maintains the same consistency and correctness as if the transactions were executed sequentially. Achieving serializability is essential to prevent anomalies, such as lost updates and inconsistent reads, in a multi-user database environment. Various concurrency control techniques, such as locking and timestamp ordering, are employed to ensure serializability while allowing efficient parallel execution of transactions.
<br></br>

</p>
		  
		</div>
	  </div>
	</div>
  </Layout>
  </div>
  )
}

export default Serial

