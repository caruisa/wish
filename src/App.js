import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Icon, Drawer, Form, Button, Col, Row, Input, Select, BackTop, } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import wish from "./pages/wish";
import login from "./pages/login";
import mplayground from "./pages/mplayground";
import wishhomepage from "./pages/wishhomepage";
import a191126 from "./pages/playground/a191126";
import a191128 from "./pages/playground/a191128";
import a191202 from "./pages/playground/a191202";
import a191204 from "./pages/playground/a191204";
import a191205 from "./pages/playground/a191205";
import a191206 from "./pages/playground/a191206";
import a191207 from "./pages/playground/a191207";
import a191209 from "./pages/playground/a191209";
import a191210 from "./pages/playground/a191210";
import a191210_1 from "./pages/playground/a191210_1";
import a191211 from "./pages/playground/a191211";
import a191214 from "./pages/playground/a191214";
import a191215 from "./pages/playground/a191215";
import a191216 from "./pages/playground/a191216";
import a191217 from "./pages/playground/a191217";
import a191217_1 from "./pages/playground/a191217_1";
import a191218 from "./pages/playground/a191218";
import a191220 from "./pages/playground/a191220";
import a191221 from "./pages/playground/a191221";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const { Option } = Select;

class Appjs extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

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
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu
              theme="dark"
              defaultSelectedKeys={['1']}
              mode="inline"
            >
              <div id="web_t_btn"
                style={{ minHeight: '64px' }}
                type={this.state.collapsed ? 'right' : 'left'}
                onClick={this.toggle}
              >
                <Icon id="web_t_i_btn"
                  className="trigger"
                  type={this.state.collapsed ? 'right' : 'left'}
                />
              </div>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="rocket" />
                    <span>React.js 놀이터</span>
                  </span>
                }
              >
                <Menu.Item key="1">
                  <Icon type="tool" />
                  <span>Basic</span>
                  <Link to="/mplayground" />
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="2">
                <Icon type="safety" />
                <span>소망</span>
                <Link to="/wishhomepage" />
              </Menu.Item>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="heart" />
                    <span>패밀리사이트</span>
                  </span>
                }
              >
                <Menu.Item key="3">
                  <a href="http://www.prayer.kr/" target="_blank" rel="noopener noreferrer">
                    <Icon type="desktop" /><span>prayer.kr</span></a>
                </Menu.Item>
                <Menu.Item key="4"><a href="http://holyspirit.kr/" target="_blank" rel="noopener noreferrer">
                  <Icon type="desktop" />
                  <span>holyspirit.kr</span></a></Menu.Item>
                <Menu.Item key="5"><a href="http://lui.kr/" target="_blank" rel="noopener noreferrer">
                  <Icon type="desktop" />
                  <span>lui.kr</span></a></Menu.Item>
                <Menu.Item key="6"><a href="http://caruisa.kr/" target="_blank" rel="noopener noreferrer">
                  <Icon type="desktop" />
                  <span>caruisa.kr</span></a></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider >
          <Layout>
            <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
              <div>
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
              <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="1" onClick={this.showDrawer} style={{ float: 'right' }}>
                  <Icon type="user-add" />
                </Menu.Item>
                <Menu.Item key="2" style={{ float: 'right' }}>
                  <Icon type="login" />
                  <Link to="/login" />
                </Menu.Item>
                <Menu.Item key="3" >
                  <Icon type="home" />
                  <span>홈</span>
                  <Link to="/wish" />
                </Menu.Item>
                <Menu.Item key="4" >
                  <a href="http://www.prayer.kr/hrv/qt/caru_qt.php" target="_blank" rel="noopener noreferrer">
                    <Icon type="heart" />
                    Quiet Time
                    </a>
                </Menu.Item>
                <Menu.Item key="5" >
                  <a href="https://github.com/caruisa/wish" target="_blank" rel="noopener noreferrer">
                    <Icon type="github" />
                    My GitHub
                    </a>
                </Menu.Item>
                <Menu.Item key="6" >
                  <a href="https://play.google.com/store/apps/details?id=kr.prayer.prayer" target="_blank" rel="noopener noreferrer">
                    <Icon type="android" />
                    카루이사 App
                    </a>
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              <Route exact path="/wish" component={wish} />
              <Route path="/login" component={login} />
              <Route path="/mplayground" component={mplayground} />
              <Route path="/wishhomepage" component={wishhomepage} />
              <Route path="/a191126" component={a191126} />
              <Route path="/a191128" component={a191128} />
              <Route path="/a191202" component={a191202} />
              <Route path="/a191204" component={a191204} />
              <Route path="/a191205" component={a191205} />
              <Route path="/a191206" component={a191206} />
              <Route path="/a191207" component={a191207} />
              <Route path="/a191209" component={a191209} />
              <Route path="/a191210" component={a191210} />
              <Route path="/a191210_1" component={a191210_1} />
              <Route path="/a191211" component={a191211} />
              <Route path="/a191214" component={a191214} />
              <Route path="/a191215" component={a191215} />
              <Route path="/a191216" component={a191216} />
              <Route path="/a191217" component={a191217} />
              <Route path="/a191217_1" component={a191217_1} />
              <Route path="/a191218" component={a191218} />
              <Route path="/a191220" component={a191220} />
              <Route path="/a191221" component={a191221} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              COPYRIGHT ⓒ CARUISA All right reserved.
                    </Footer>
          </Layout>
        </Layout>
        <div>
          <BackTop>
            <div className="ant-back-top-inner">UP</div>
          </BackTop>
        </div>
      </Router>
    );
  }
}
const App = Form.create()(Appjs);
export default App;