import React from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import './playground.css';
import { PageHeader, Transfer } from 'antd';

class a191218 extends React.Component {
    state = {
      mockData: [],
      targetKeys: [],
    };
  
    componentDidMount() {
      this.getMock();
    }
  
    getMock = () => {
      const targetKeys = [];
      const mockData = [];
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
          targetKeys.push(data.key);
        }
        mockData.push(data);
      }
      this.setState({ mockData, targetKeys });
    };
  
    filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;
  
    handleChange = targetKeys => {
      this.setState({ targetKeys });
    };
  
    handleSearch = (dir, value) => {
      console.log('search:', dir, value);
    };
  
    render() {
      return (
        <>
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        onBack={() => window.history.back()}
        title="Transfer"
        subTitle="(K . Y . W)"
        extra={[
          <div id="web_h_playground_btn_group">
            <Link to="/mplayground"><button id="web_h_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
          </div>
        ]}
      />
      <br />
      
        <Transfer
          dataSource={this.state.mockData}
          showSearch
          filterOption={this.filterOption}
          targetKeys={this.state.targetKeys}
          onChange={this.handleChange}
          onSearch={this.handleSearch}
          render={item => item.title}
        />
        </>
      );
    }
  }

export default a191218;