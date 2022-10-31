import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.scss";
import { Header } from "./components/atoms/Header/Header";
import { AddEmployee } from "./components/pages/AddEmployee/AddEmployee";
import { Dashboard } from "./components/pages/Dashboard/Dashboard";
import { EmployeeDetails } from "./components/pages/EmployeeDetails/EmployeeDetails";
import { LINKS } from "./shared/constants/Header";
import { IMAGES } from "./shared/constants/Images";
import { ROUTES } from "./shared/constants/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="app-wrapper__header">
          <Header headerLinks={LINKS} logoSrc={IMAGES.MAIN_LOGO} />
        </div>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.ADD_EMPLOYEE} element={<AddEmployee />} />
          <Route path={ROUTES.EMPLOYEES} element={<EmployeeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
