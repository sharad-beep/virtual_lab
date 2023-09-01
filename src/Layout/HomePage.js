import React from 'react';
import Layout from './Layout';
import DataMenu from './DataMenu';

const HomePage = () => {
  return (
	<div>
	 <Layout >
      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
           <DataMenu/>
          </div>
          <div className="col-md-9">
         
             <h1> Home Page</h1>
            
          </div>
        </div>
      </div>
    </Layout>
	</div>
  );
};

export default HomePage;

