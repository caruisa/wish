import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from 'antd';
import { Timeline } from 'antd';


function a191210() {
  return (
    <>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        onBack={() => window.history.back()}
        title="Timeline"
        subTitle="(K . Y . W)"
        extra={[
          <div id="web_h_playground_btn_group">
            <Link to="/mplayground"><button id="web_h_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
          </div>
        ]}
      />
      <br />
      <Timeline>
    <Timeline.Item>풀꽃 -나태주 2222-10-04</Timeline.Item>
    <Timeline.Item>자세히 보아야 예쁘다 2222-10-04</Timeline.Item>
    <Timeline.Item>오래 보아야 사랑스럽다 2222-10-04</Timeline.Item>
    <Timeline.Item>너도 그렇다 2222-10-04</Timeline.Item>
  </Timeline>
    </>
  );
}

export default a191210;