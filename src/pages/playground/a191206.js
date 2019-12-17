import React from 'react';
import 'antd/dist/antd.css';
import './playground.css';
import { Link } from "react-router-dom";
import { PageHeader } from 'antd';
import { Modal, Button } from 'antd';

class a191206 extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
        <div>

<PageHeader
    style={{
      border: '1px solid rgb(235, 237, 240)',
    }}
    onBack={() => window.history.back()}
    title="Modal"
    subTitle="(K . Y . W)"
    extra={[
        <div id="web_h_playground_btn_group">
        <Link to="/mplayground"><button id="web_h_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
        </div>
      ]}
  />
<br />
        
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
      </div>
    );
  }
}

export default a191206;
          