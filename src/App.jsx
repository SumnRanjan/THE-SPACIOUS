import { useState } from "react";
import "./App.css";
import Nav from "./NavBar/Nav";
import Box from "./Container/Box";
import Cont from "./Container1/Cont";
import Main from "./Container2/Main";
import OurStory from "./Container3/OurStory";
import Product from "./Container4/Product";
import Read from "./Container5/Read";
import New from "./Container6/New";
import Footer from "./Container7/Footer";

function App() {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden">
        <Nav />
        <Box />
        <Cont />
        <Main />
        <OurStory />
        <Product />
        <Read />
        <New />
        <Footer />
      </div>
    </>
  );
}

export default App;
