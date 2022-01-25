import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Tytul from './strona1';
import PrimarySearchAppBar from "./strona2";
import Screensv from "./strona3";
import 'bootstrap/dist/css/bootstrap.min.css';

function Strona1() {
  return (
      <div>
        <Tytul></Tytul>
      </div>
  );
}

function Strona2() {
  return (
      <div>
        <PrimarySearchAppBar></PrimarySearchAppBar>
      </div>
  );
}

function Strona3() {
  return (
      <div>
        <Screensv></Screensv>
      </div>
  );
}

function App() {
  return (
      <Router>
        <div>

          <nav class="navbar navbar-expand-lg  navbar-light bg-light">
            <h2 class="navbar-brand"> SerwerMinecraft - strona główna 22665! </h2>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#"><Link  to="/1"> Dostępne tryby gry </Link></a>
                <a class="nav-item nav-link" href="#"><Link to="/2"> Twoje konto na serwerze </Link></a>
                <a class="nav-item nav-link" href="#"><Link to="/3"> SerwerMinecraft - socialmedia </Link></a>
              </div>
            </div>
          </nav>
          <body>
            <Routes>
              <Route exact path="/1" element={<Strona1 />}>
              </Route>
              <Route exact path="/2" element={<Strona2 />}>
              </Route>
              <Route exact path="/3" element={<Strona3 />}>
              </Route>
            </Routes>
          </body>
        </div>
      </Router>
  );
}

export default App;

