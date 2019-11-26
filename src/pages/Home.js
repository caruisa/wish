import React from 'react';
import './pages.css';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';

function Home() {
  return (
    <div>
    <h3>반갑습니다</h3>
  <div id="web_btn_group">
    <Link to="/mplayground"><button id="web_reactjs">React.js 놀이터</button></Link>
    <Link to="/wishhomep"><button id="web_wish">소망(caruisa.github.io/wish/)</button></Link>
    </div>
    </div>
  );
}

export default Home;