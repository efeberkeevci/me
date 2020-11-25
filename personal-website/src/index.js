import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import Signature from "./signature";
import MainPage from "./mainpage";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <Route exact path ="/" component = {Signature}/>
      <Route exact path ="/main" component = {MainPage} />
    </div>
  </Router>
)
ReactDOM.render(routing,document.getElementById("root"));
