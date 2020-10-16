import React from "react";
import logo from "../logo.svg";
import "./App.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Dashboard from "../components/dashboard/dashboard";

function App() {
  return (
    <div>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
