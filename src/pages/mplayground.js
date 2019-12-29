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
      <br /><Link to="/a191214"><button id="web_basic">191214 - BackTop</button></Link>
      - [브라운 아이즈 - 비오는 압구정] 그대 목소릴 닮은 비만 오네...
      <br /><Link to="/a191215"><button id="web_basic">191215 - Avatar</button></Link>
      - [이문세 - 광화문 연가] 가슴깊이 그리워지면 눈내린 광화문 네거리 이곳에
      <br /><Link to="/a191216"><button id="web_basic">191216 - Steps</button></Link>
      - [에코 - 그대도...내게도...] 그게 나를 위한거에요
      <br /><Link to="/a191217"><button id="web_basic">191217 - Notification</button></Link>
      - [조성모 - 아시나요] 그대가 머문 흔적들 때문에 아마
      <br /><Link to="/a191217_1"><button id="web_basic">191217 - Tree</button></Link>
      - [PSY - 강남스타일] 오오오오 오빤 강남스타일 
      <br /><Link to="/a191218"><button id="web_basic">191218 - Transfer</button></Link>
      - [버스커 버스커 - 벚꽃 엔딩] 바람 불면 저편에서 그대여 니 모습이 자꾸 겹쳐
      <br /><Link to="/a191220"><button id="web_basic">191220 - Upload</button></Link>
      - [Pharrell Williams - Happy] Clap along if you feel like happiness is the truth
      <br /><Link to="/a191221"><button id="web_basic">191221 - Grid</button></Link>
      - [조PD - 친구여] it will be alright
      <br /><Link to="/a191228"><button id="web_basic">191228 - Descriptions</button></Link>
      - [자전거탄풍경 - 너에게 난 나에게 넌] 수많은 별이 되어 영원토록 빛나고 싶어
      <br /><Link to="/a191229"><button id="web_basic">191229 - Input Search</button></Link>
      - [SE7EN - 라 라 라] 넌 내게 오면 돼 너의 가슴이 다시 뛸 수 있게
      <br /><Link to="/a191230"><button id="web_basic">191230 - Form Registration</button></Link>
      - [SE7EN - 라 라 라] 넌 내게 오면 돼 너의 가슴이 다시 뛸 수 있게
      </div>
    </>
  );
}

export default mplayground;