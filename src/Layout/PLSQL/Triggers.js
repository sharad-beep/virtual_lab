

import React from 'react'
import PlsqlMenu from './PlsqlMenu'
import Layout from '../Layout'
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
           
               <h1>Trigger info</h1>
              
            </div>
          </div>
        </div>
      </Layout>
  </div>
  )
}

export default Triggers
