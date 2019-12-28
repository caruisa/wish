import React from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import './playground.css';
import { Descriptions, Badge, PageHeader } from 'antd';


function a191228() {
    return (
        <>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                onBack={() => window.history.back()}
                title="Descriptions"
                subTitle="(K . Y . W)"
                extra={[
                    <div id="web_h_playground_btn_group">
                        <Link to="/mplayground"><button id="web_h_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
                    </div>
                ]}
            />
            <br />
            <Descriptions title="User Info">
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
  <br />
            <Descriptions title="User Info" bordered>
                <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
                <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
                <Descriptions.Item label="Usage Time" span={2}>
                    2019-04-24 18:00:00
    </Descriptions.Item>
                <Descriptions.Item label="Status" span={3}>
                    <Badge status="processing" text="Running" />
                </Descriptions.Item>
                <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
                <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
                <Descriptions.Item label="Config Info">
                    Data disk type: MongoDB
      <br />
                    Database version: 3.4
      <br />
                    Package: dds.mongo.mid
      <br />
                    Storage space: 10 GB
      <br />
                    Replication factor: 3
      <br />
                    Region: East China 1<br />
                </Descriptions.Item>
            </Descriptions>
        </>
    );
}

export default a191228;