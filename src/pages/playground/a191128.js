import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from 'antd';
import './playground.css';
import { PageHeader } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function a191128() {
  return (
    <>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        onBack={() => window.history.back()}
        title="Calendar"
        subTitle="(K . Y . W)"
        extra={[
          <div id="web_h_playground_btn_group">
            <Link to="/mplayground"><button id="web_h_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
          </div>
        ]}
      />
      <br />
      <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    </>
  );
}

export default a191128;