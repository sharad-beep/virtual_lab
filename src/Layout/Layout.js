import React from "react";
import Footer from "./Footer";
import Header from "./Header";
 
const Layout = ({ children }) => {
  return (
    <div>
   
      <Header />
      <main style={{ minHeight: "70vh", marginTop: "30px" ,alignContent:"center", padding:"20px"
      }}>
      
    
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "sharad",
};

export default Layout;
