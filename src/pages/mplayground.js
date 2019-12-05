import React from "react";
import { Link } from "react-router-dom";
import './pages.css';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

function mplayground() {
  return (
    <>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        onBack={() => window.history.back()}
        title="React.js (Basic) 놀이터"
        subTitle="(K . Y . W)"
      />
      <br />
      <div id="web_basic_btn_group">
        <Link to="/a191126"><button id="web_basic" type="danger" >191126 - Link to</button></Link>
        - [브라운 아이즈 - Like A Flame] All I know , your passion burns me like a flame
      <br /><Link to="/a191128"><button id="web_basic">191128 - Calendar</button></Link>
        - [이승환 - 어떻게 사랑이 그래요] 그대는 나에게 끝없는 이야기
      <br /><Link to="/a191202"><button id="web_basic">191202 - Tabs</button></Link>
        - [Eagles - Hotel California] rising up through the air
      <br /><Link to="/a191204"><button id="web_basic">191204 - Table</button></Link>
        - [Dream Theater - Strange Deja Vu] Today I am searching for it
      <br /><Link to="/a191205"><button id="web_basic">191205 - Pagination</button></Link>
        - [Radiohead - Creep] Whatever makes you happy Whatever you want
      <br /><Link to="/a191206"><button id="web_basic">191206 - Modal</button></Link>
        - [Clean Bandit - Rockabye] Rockabye baby, don't you cry
      </div>
    </>
  );
}

export default mplayground;