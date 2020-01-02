import React from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import './playground.css';
import { PageHeader, Carousel } from 'antd';

function a200103() {
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
            <Carousel autoplay>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>하얀 모래위 우리의 사랑을 다시 새겨봐 </h3>
                </div>
            </Carousel>
        </>
    );
}

export default a200103;