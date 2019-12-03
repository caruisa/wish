import React from 'react';
import './pages.css';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Tabs, Icon } from 'antd';

const { TabPane } = Tabs;

function wish() {
  return (

    <Tabs defaultActiveKey="1">
    <TabPane
      tab={
        <span>
          <Icon type="rocket" />
          React.js 놀이터
        </span>
      }
      key="1"
    >
<div id="web_btn_group">
    <Link to="/mplayground"><button id="web_reactjs">React.js 놀이터</button></Link>
    </div>
    </TabPane>

    <TabPane
      tab={
        <span>
          <Icon type="safety" />
          소망
        </span>
      }
      key="2"
    >
     <div id="web_btn_group">
    <Link to="/wishhomepage"><button id="web_wish">소망(caruisa.github.io/wish/)</button></Link>
    </div>
    </TabPane>
  </Tabs>
  );
}

export default wish;