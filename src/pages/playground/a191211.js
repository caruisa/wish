import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from 'antd';
import { message, Button } from 'antd';

const info = () => {
  message.info('忍忍忍 Please bo true 忍忍忍');
};

function a191211() {
  return (
    <>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        onBack={() => window.history.back()}
        title="Message"
        subTitle="(K . Y . W)"
        extra={[
          <div id="web_h_playground_btn_group">
            <Link to="/mplayground"><button id="web_h_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
          </div>
        ]}
      />
      <br />
      <Button type="primary" onClick={info}>
    전갈 (message)
  </Button>
    </>
  );
}

export default a191211;