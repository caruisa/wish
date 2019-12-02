import React from "react";
import { Link } from "react-router-dom";
import './playground.css';
import { Tabs, Radio } from 'antd';

const { TabPane } = Tabs;

class a191202 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mode: 'top',
      };
    }
  
    handleModeChange = e => {
      const mode = e.target.value;
      this.setState({ mode });
    };
  
    render() {
      const { mode } = this.state;
      return (
        <div>
          <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
            <Radio.Button value="top">Horizontal</Radio.Button>
            <Radio.Button value="left">Vertical</Radio.Button>
          </Radio.Group>
          <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
            {[...Array(88).keys()].map(i => (
              <TabPane tab={`Tab-${i}`} key={i}>
                Content of tab {i}
              </TabPane>
            ))}
          </Tabs>
        <br />
       <div id="web_playground_btn_group">
      <Link to="/mplayground"><button id="web_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
      </div>
        </div>
      );
    }
  }

export default a191202;
  
