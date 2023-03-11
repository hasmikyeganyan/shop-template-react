import React from "react";
import Dashboard from "./components/Dashboard";
import Input from "./components/Input";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import "./assets/styles/style.scss";
import LineChart from "./components/charts/LineChart";
import Income from "./components/Income";
import CircleChart from "./components/charts/CircleChart";
import Daily from "./components/Daily";

function App() {
  return (
    <>
      <Navbar>
        <Input placeholder="Search" />
      </Navbar>
      <div className="d-flex gap-4 vh-100">
        <Sidebar />
        <div>
          <Dashboard />

          <div className="d-flex gap-5">
            <LineChart />
            <LineChart />
            <LineChart />
            <LineChart />
          </div>
          <div className="d-flex mt-4 justify-content-between">
            <Income title="INCOME" />
            <Daily title="DAILY BUDGET" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
