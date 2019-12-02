import React from "react";
import { Link } from "react-router-dom";
import './pages.css';
import 'antd/dist/antd.css';


function mplayground() {
  return (
    <>
    <h1>React. Basic 놀이터</h1>
    
    <div id="web_basic_btn_group">
      <Link to="/a191126"><button id="web_basic" type="danger" >191126 - Link to</button></Link> 
      - [브라운 아이즈 - Like A Flame] All I know , your passion burns me like a flame
      <br /><Link to="/a191128"><button id="web_basic">191128 - Calendar</button></Link>
      - [이승환 - 어떻게 사랑이 그래요] 그대는 나에게 끝없는 이야기
      <br /><Link to="/a191202"><button id="web_basic">191202 - tabs</button></Link>
      - [Eagles - Hotel California] rising up through the air
      </div>
    
    </>
  );
}

export default mplayground;