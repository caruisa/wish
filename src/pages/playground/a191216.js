import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from 'antd';
import './playground.css';
import { Steps } from 'antd';

const { Step } = Steps;

const stepStyle = {
  marginBottom: 60,
  boxShadow: '0px -1px 0 0 #e8e8e8 inset',
};

class a191126 extends React.Component {
  state = {
    current: 0,
  };

  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
  return (
    <>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        onBack={() => window.history.back()}
        title="Steps"
        subTitle="(K . Y . W)"
        extra={[
          <div id="web_h_playground_btn_group">
            <Link to="/mplayground"><button id="web_h_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
          </div>
        ]}
      />
      <br />
     
      <div>
        <Steps
          type="navigation"
          size="small"
          current={current}
          onChange={this.onChange}
          style={stepStyle}
        >
          <Step
            title="Step 1"
            subTitle="00:00:05"
            status="finish"
            description="This is a description."
          />
          <Step
            title="Step 2"
            subTitle="00:01:02"
            status="process"
            description="This is a description."
          />
          <Step
            title="Step 3"
            subTitle="waiting for longlong time"
            status="wait"
            description="This is a description."
          />
        </Steps>
        <Steps type="navigation" current={current} onChange={this.onChange} style={stepStyle}>
          <Step status="finish" title="Step 1" />
          <Step status="process" title="Step 2" />
          <Step status="wait" title="Step 3" />
          <Step status="wait" title="Step 4" />
        </Steps>
        <Steps
          type="navigation"
          size="small"
          current={current}
          onChange={this.onChange}
          style={stepStyle}
        >
          <Step status="finish" title="finish 1" />
          <Step status="finish" title="finish 2" />
          <Step status="process" title="current process" />
          <Step status="wait" title="wait" disabled />
        </Steps>
      </div>

    </>
  );
}
}
export default a191126;