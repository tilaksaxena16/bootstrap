import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shoppingapp } from "./Components/Shoppingapp";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Shoppingapp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { App };
