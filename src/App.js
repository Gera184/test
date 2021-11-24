import React from "react";
import Main from "./components/main/Main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BankPage from "./components/bank-page/BankPage";

export default () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/:index" element={<BankPage />} />
        </Routes>
      </Router>
    </div>
  );
};
