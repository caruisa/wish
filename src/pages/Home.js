import React from "react";
import './pages.css';
import { Link } from "react-router-dom";

function Home() {
return (
  <>
  <div id="web_btn_group">
    <Link to="/ReactPlayground"><button id="web_reactjs">React.js 놀이터</button></Link>
    <Link to="/caruisa"><button id="web_caruisakr">사랑 홈페이지 (caruisa.kr)</button></Link>
    </div>
  </>
);
}

export default Home;