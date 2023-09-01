

import React from 'react'
import PlsqlMenu from './PlsqlMenu'
import Layout from '../Layout'
import one from "./lsql_tri_1.PNG";
import two from "./plsql_tri_2.PNG";
const Triggers = () => {
  return (
    <div>
    <Layout >
        <div className="container-flui m-3 p-3">
          <div className="row">
            <div className="col-md-3">
             <PlsqlMenu/>
            </div>
            <div className="col-md-9">
           
               <h1>PL/SQL Trigger</h1>
               <p>
               <br></br>

A PL/SQL trigger is a database object that defines an automatic action to be performed in response to specific events or changes that occur in a database. Triggers are often used to enforce data integrity, implement business logic, or maintain audit trails. They are a crucial component of a database management system's capability to automate and ensure consistent behavior.
<br></br><br></br>

Types of Triggers:<br></br>
<br></br>


DML Triggers: Fired in response to Data Manipulation Language (DML) statements like INSERT, UPDATE, and DELETE.<br></br>

DDL Triggers: Fired in response to Data Definition Language (DDL) statements like CREATE, ALTER, and DROP.<br></br>

System Triggers: Fired in response to system-level events like database startup or shutdown.<br></br>
<br></br>

Syntax of a DML Trigger:

<br></br>







Explanation:<br></br>

CREATE OR REPLACE TRIGGER: Defines the beginning of a trigger declaration.<br></br>

trigger_name: Name of the trigger.<br></br>

BEFORE or AFTER: Specifies when the trigger fires (before or after the triggering event).<br></br>

INSERT, UPDATE, or DELETE: Specifies the triggering event.<br></br>

ON table_name: Specifies the table on which the trigger operates.<br></br>

FOR EACH ROW: Specifies that the trigger operates for each affected row.<br></br>

DECLARE: Marks the beginning of the declaration section (optional).<br></br>

BEGIN: Marks the start of the trigger body (SQL and PL/SQL statements).<br></br>

EXCEPTION: Handles exceptions raised during trigger execution.<br></br>
<br></br>



Example of a DML Trigger:<br></br>


<br></br>

Explanation:<br></br>

In this example, the trigger AuditEmployeeChanges fires before an INSERT or UPDATE operation on the employees table. For each affected row (:NEW refers to the new row being inserted or updated), the trigger captures the employee_id, the action performed (INSERT or UPDATE), and the current date into an audit_log table.
<br></br>

Calling a Trigger:<br></br>

Triggers are automatically invoked by the database system in response to the specified triggering events. You don't directly call a trigger; rather, the trigger is triggered by the specified event.
<br></br>

Advantages of Triggers:<br></br>


Data Integrity: Triggers can enforce complex integrity rules automatically.<br></br>

Business Logic: They allow encapsulation of business rules directly in the database.<br></br>

Audit Trail: Triggers can maintain logs of changes for auditing purposes.<br></br>

Consistency: Triggers ensure consistent behavior for database operations.<br></br>
<br></br>



Considerations:<br></br>

Overusing triggers can lead to complex and hard-to-maintain code.<br></br>

Triggers can affect performance, so they should be used judiciously.<br></br>
<br></br>


Conclusion:<br></br>

PL/SQL triggers are a powerful mechanism for automating actions based on specific events in a database. They play a crucial role in maintaining data integrity, implementing business logic, and enabling auditing. Understanding triggers and their appropriate usage is important to harness their benefits effectively while ensuring efficient and maintainable database systems.
<br></br>

</p>
              
            </div>
          </div>
        </div>
      </Layout>
  </div>
  )
}

export default Triggers
