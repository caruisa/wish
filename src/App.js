import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import wish from "./pages/wish";
import mplayground from "./pages/mplayground";
import wishhomepage from "./pages/wishhomepage";
import a191126 from "./pages/playground/a191126";

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

render() {
    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>

                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>홈</span>
                            <Link to="/wish" />
                        </Menu.Item>      
                        <SubMenu
                        key="sub1"
                        title={
                          <span>
                            <Icon type="desktop" />
                            <span>React.놀이터</span>
                          </span>
                        }
                       >
                      <Menu.Item key="2">
                      <Icon type="desktop" />
                            <span>Basic</span>
                            <Link to="/mplayground" />
                          </Menu.Item>
                          </SubMenu>

                          <Menu.Item key="3">
                            <Icon type="pie-chart" />
                            <span>소망</span>
                            <Link to="/wishhomepage" />
                        </Menu.Item>   

                        <SubMenu
                        key="sub2"
                        title={
                          <span>
                            <Icon type="mail" />
                            <span>패밀리사이트</span>
                          </span>
                        }
                       >
                      <Menu.Item key="4">
                        <a href="http://www.prayer.kr/" target="_blank" rel="noopener noreferrer">
                          <Icon type="desktop" /><span>prayer.kr</span></a>
                          </Menu.Item>
                      <Menu.Item key="5"><a href="http://holyspirit.kr/" target="_blank" rel="noopener noreferrer">
                        <Icon type="desktop" />
                            <span>holyspirit.kr</span></a></Menu.Item>
                      <Menu.Item key="6"><a href="http://lui.kr/" target="_blank" rel="noopener noreferrer">
                        <Icon type="desktop" />
                            <span>lui.kr</span></a></Menu.Item>
                      <Menu.Item key="7"><a href="http://caruisa.kr/" target="_blank" rel="noopener noreferrer">
                        <Icon type="desktop" />
                            <span>caruisa.kr</span></a></Menu.Item>
                   </SubMenu>
                   
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            style={{ cursor: 'pointer' }}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    <Route exact path="/wish" component={wish} />
                    <Route path="/mplayground" component={mplayground} />
                    <Route path="/wishhomepage" component={wishhomepage} />
                    <Route path="/a191126" component={a191126} />
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



/*
import React from 'react';
import './App.css';
import {Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import ReactPlayground from "./pages/ReactPlayground";
import caruisa from "./pages/caruisa";
import a191126 from "./pages/playground/a191126";
import aa191126 from "./pages/playground/aa191126";

function App() {
   return (
    <Router>
    <header>
     <div id="App_btn_group">
      <Link to="/">
        <button id="App_home">홈</button>
      </Link>
      <Link to="/ReactPlayground">
        <button id="App_reactjs">React.js 놀이터</button>
        </Link>
      <Link to="/caruisa">
        <button id="App_caruisakr">사랑 홈페이지 (caruisa.kr)</button>
        </Link>
      </div>
    </header>
    <hr />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ReactPlayground" component={ReactPlayground} />
        <Route path="/caruisa" component={caruisa} />
        <Route path="/a191126" component={a191126} />
        <Route path="/aa191126" component={aa191126} />
      </Switch>
    </main>
  </Router>
);
}

export default App;
*/