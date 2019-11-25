import React from 'react';
import './App.css';
import {Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import ReactPlayground from "./pages/ReactPlayground";
import caruisa from "./pages/caruisa";
import a191126 from "./pages/playground/a191126";
/*
function App() {
  return (
   <Router>
   <main>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/ReactPlayground" component={ReactPlayground} />
       <Route path="/caruisa" component={caruisa} />
       <Route path="/a191126" component={a191126} />
     </Switch>
   </main>
 </Router>
);
}
*/


function App() {
   return (
    <Router>
    <header>
     <div id="App_btn_group">
      <Link to="/">
        <button id="App_home">홈</button>
      </Link>
      <Link to="/ReactPlayground">
        <button id="App_reactjs">React.js 놀이터</button>
      </Link>
      <Link to="/caruisa">
        <button id="App_caruisakr">사랑 홈페이지 (caruisa.kr)</button>
      </Link>
      </div>
    </header>
    <hr />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ReactPlayground" component={ReactPlayground} />
        <Route path="/caruisa" component={caruisa} />
        <Route path="/a191126" component={a191126} />
      </Switch>
    </main>
  </Router>
);
}

export default App;