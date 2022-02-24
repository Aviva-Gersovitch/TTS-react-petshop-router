import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Care extends React.Component {
  render () {
    return (
      <div>
        <h1>Companion Animal Care Tips</h1>
        <div>
          Care by Animal Type:
        <ul>
          <li>Dogs</li>
          <li>Cats</li>
          <li>Rabbits</li>
          <li>Birds</li>
          <li>Pigs</li>
          <li>Fishes</li>
        </ul>
        </div>
      </div>
    );
  }
}


class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/Care">Care for your Companions</Link>
      </div>
    );
  }
}

class MyRoutes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <hr />
          <Routes>
            <Route path="/" element ={<App/>} />
            <Route path="/care" element={<Care/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);


