import React from "react";
import { Link } from "react-router-dom";
import './playground.css';
import { Pagination } from 'antd';
import { PageHeader } from 'antd';

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  function showTotal(total) {
    return `Total ${total} items`;
  }

function a191205() {
  return (
    <>
<PageHeader
    style={{
      border: '1px solid rgb(235, 237, 240)',
    }}
    onBack={() => window.history.back()}
    title="Pagination"
    subTitle="(K . Y . W)"
    extra={[
        <div id="web_h_playground_btn_group">
        <Link to="/mplayground"><button id="web_h_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
        </div>
      ]}
  />
<br />
       <div>
    <Pagination defaultCurrent={1} total={50} />
    <br />
    <Pagination defaultCurrent={6} total={500} />
    <br />
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
    <br />
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    <br />
    <Pagination size="small" total={50} />
    <br />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <br />
    <Pagination size="small" total={50} showTotal={showTotal} />
    <br />
    <Pagination simple defaultCurrent={2} total={50} />
   
  </div>
  
    </>
  );
}

export default a191205;