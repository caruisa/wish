import React from "react";
import { Link } from "react-router-dom";
import './playground.css';
import { PageHeader } from 'antd';
import { Drawer, Form, Button, Col, Row, Input, Select, Icon, } from 'antd';

const { Option } = Select;

class NewAccount extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>

        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          onBack={() => window.history.back()}
          title="Drawer"
          subTitle="(K . Y . W)"
          extra={[
            <div id="web_h_playground_btn_group">
              <Link to="/mplayground"><button id="web_h_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
            </div>
          ]}
        />
        <br />
        <Button type="primary" onClick={this.showDrawer}>
          <Icon type="plus" /> 회원가입
        </Button>
        <Drawer
          title="React.js 놀이터 계정 만들기"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="이름">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '이름을 입력해 주세요' }],
                  })(<Input placeholder="이름을 입력해 주세요" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="성별">
                  {getFieldDecorator('sex', {
                    rules: [{ required: true, message: '성별을 선택하세요' }],
                  })(
                    <Select placeholder="성별을 선택하세요">
                      <Option value="male">남성</Option>
                      <Option value="female">여성</Option>
                    </Select>,
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="아이디">
                  {getFieldDecorator('id', {
                    rules: [{ required: true, message: '아이디를 입력해 주세요' }],
                  })(<Input placeholder="아이디를 입력해 주세요" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="이메일">
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: '이메일을 입력해 주세요' }],
                  })(<Input placeholder="이메일을 입력해 주세요" />)}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="비밀번호">
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '비밀번호를 입력해 주세요' }],
                  })(<Input placeholder="비밀번호를 입력해 주세요" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="비밀번호 확인">
                  {getFieldDecorator('passwordcheck', {
                    rules: [{ required: true, message: '비밀번호를 입력해 주세요' }],
                  })(<Input placeholder="비밀번호를 입력해 주세요" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="홈페이지">
                  {getFieldDecorator('url', {
                    rules: [{ required: true, message: '홈페이지 주소를 입력해 주세요' }],
                  })(<Input placeholder="홈페이지 주소를 입력해 주세요" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="홈페이지에 대해 설명해 주세요">
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: '홈페이지에 대해 설명해 주세요',
                      },
                    ],
                  })(<Input.TextArea rows={4} placeholder="홈페이지에 대해 설명해 주세요" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              취소
            </Button>
            <Button onClick={this.onClose} type="primary">
              신청
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

const a191207 = Form.create()(NewAccount);
export default a191207;