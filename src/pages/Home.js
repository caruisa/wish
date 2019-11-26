import React from 'react';
import './pages.css';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css';

function Home() {
  return (
  <div id="web_btn_group">
    <Link to="/mplayground"><button id="web_reactjs">React.js 놀이터</button></Link>
    <Link to="/wishhomep"><button id="web_wish">소망(caruisa.github.io/wish/)</button></Link>
    </div>
  );
}

export default Home;