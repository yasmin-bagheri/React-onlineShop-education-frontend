import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="relative ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
