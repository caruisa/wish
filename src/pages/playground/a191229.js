import React from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import './playground.css';
import { Input, PageHeader } from 'antd';

const { Search } = Input;

function a191229() {
    return (
        <>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                onBack={() => window.history.back()}
                title="Input Search"
                subTitle="(K . Y . W)"
                extra={[
                    <div id="web_h_playground_btn_group">
                        <Link to="/mplayground"><button id="web_h_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
                    </div>
                ]}
            />
            <br />
            <div>
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }}
    />
    <br />
    <br />
    <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
    <br />
    <br />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
  </div>
        </>
    );
}

export default a191229;