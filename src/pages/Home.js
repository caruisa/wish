import React from "react";
import './pages.css';
import { Link } from "react-router-dom";

function Home() {
return (
  <>
  <div id="App_btn_group">
    <Link to="/ReactPlayground"><button id="App_reactjs">React.js 놀이터</button></Link>
    <Link to="/caruisa"><button id="App_caruisakr">사랑 홈페이지 (caruisa.kr)</button></Link>
    </div>
  </>
);
}

export default Home;