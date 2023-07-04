import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shoppingapp } from "./Components/Shoppingapp";
import { Shopping } from "./Classcomponents/Shopping";
import { Crud } from "./Crud/Crud";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Shoppingapp />} />
          <Route exact path="/nav" element={<Shopping />} />
          <Route exact path="/crud" element={<Crud />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { App };
