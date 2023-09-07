import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Routers from "../router/Routers";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <CustomNavbar />
        <div className="flex-grow">
          <Routers />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
