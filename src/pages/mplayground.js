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
      <br /><Link to="/a191207"><button id="web_basic">191207 - Drawer</button></Link>
      - [서태지 - Heffy End] 난 이제 너와 단 둘만의 소망을 이룰게
      <br /><Link to="/a191209"><button id="web_basic">191209 - Comment</button></Link>
      - [쿨 - 아로하] 아픈 마음도 함께 기쁜맘도 함께 나눠가졌으면 해
      <br /><Link to="/a191210"><button id="web_basic">191210 - Timeline</button></Link>
      - [The Taste Of Ink - The Used] And I'll savor every moment of this
      <br /><Link to="/a191210_1"><button id="web_basic">191210 - Collapse</button></Link>
      - [Stevie Wonder - I Just Called To Say I Love You] I just called to say I love you
      <br /><Link to="/a191211"><button id="web_basic">191211 - message</button></Link>
      - [Frank Sinatra Fly Me To The Moon] Fill my heart with song
      </div>
    </>
  );
}

export default mplayground;