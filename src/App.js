import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import wish from "./pages/wish";
import mplayground from "./pages/mplayground";
import wishhomepage from "./pages/wishhomepage";
import a191126 from "./pages/playground/a191126";
import a191128 from "./pages/playground/a191128";
import a191202 from "./pages/playground/a191202";
import a191204 from "./pages/playground/a191204";
import a191205 from "./pages/playground/a191205";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends React.Component {
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

  render() {
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
              <div
                style={{ position: 'relative', minHeight: '45px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#002140', }}
                type={this.state.collapsed ? 'right' : 'left'}
                onClick={this.toggle}
              >
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'right' : 'left'}
                  style={{ cursor: 'pointer', fontSize: '14px', color: 'white', }}
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
              <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="1" >
                  <Icon type="home" />
                  <span>홈</span>
                  <Link to="/wish" />
                </Menu.Item>
                <Menu.Item key="2" style={{ float: 'right' }}>
                  <a href="http://www.prayer.kr/hrv/qt/caru_qt.php" target="_blank" rel="noopener noreferrer">
                    <Icon type="heart" />
                    Quiet Time
                    </a>
                </Menu.Item>
                <Menu.Item key="3" style={{ float: 'right' }}>
                  <a href="https://github.com/caruisa/wish" target="_blank" rel="noopener noreferrer">
                    <Icon type="github" />
                    My GitHub
                    </a>
                </Menu.Item>
                <Menu.Item key="4" style={{ float: 'right' }}>
                  <a href="https://play.google.com/store/apps/details?id=kr.prayer.prayer" target="_blank" rel="noopener noreferrer">
                    <Icon type="android" />
                    카루이사 App
                    </a>
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              <Route exact path="/wish" component={wish} />
              <Route path="/mplayground" component={mplayground} />
              <Route path="/wishhomepage" component={wishhomepage} />
              <Route path="/a191126" component={a191126} />
              <Route path="/a191128" component={a191128} />
              <Route path="/a191202" component={a191202} />
              <Route path="/a191204" component={a191204} />
              <Route path="/a191205" component={a191205} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              COPYRIGHT ⓒ CARUISA All right reserved.
                    </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;