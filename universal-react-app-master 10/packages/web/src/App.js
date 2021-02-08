import React from "react";
// import { Provider } from "react-redux";
// import { store } from "@universal/common/store";

// import Home from "@universal/common/containers/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
      </Router>
    </React.Fragment>
  );
}
