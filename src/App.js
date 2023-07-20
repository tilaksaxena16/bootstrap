import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shoppingapp } from "./Components/Shoppingapp";
import { Shopping } from "./Classcomponents/Shopping";
import { Crud } from "./Crud/Crud";
import { MuiDemo } from "./Mui-demo/Mui-demo";
import { ResponsiveAppBar } from "./Mui-demo/Mui-Nav";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Shoppingapp />} />
          <Route exact path="/nav" element={<Shopping />} />
          <Route exact path="/crud" element={<Crud />} />
          <Route exact path="/mui" element={<MuiDemo />} />
          <Route exact path="/muinav" element={<ResponsiveAppBar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export { App };
