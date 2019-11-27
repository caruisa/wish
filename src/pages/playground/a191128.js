import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from 'antd';
import './playground.css';

function onPanelChange(value, mode) {
    console.log(value, mode);
  }

function a191128() {
  return (
    <>
      <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div><br />
  <div id="web_playground_btn_group">
      <Link to="/mplayground"><button id="web_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
      </div>
    </>
  );
}

export default a191128;