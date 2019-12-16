import React from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import './playground.css';
import { Button, Icon, notification, Divider, PageHeader } from 'antd';

const openNotification = placement => {
    notification.info({
        message: `Notification ${placement}`,
        description:
            '우리를 시험에 들게 하지 마시옵고, 다만 악에서 구하시옵소서.',
        placement,
    });
};

function a191217() {
    return (
        <>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                onBack={() => window.history.back()}
                title="Notification"
                subTitle="(K . Y . W)"
                extra={[
                    <div id="web_h_playground_btn_group">
                        <Link to="/mplayground"><button id="web_h_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
                    </div>
                ]}
            />
            <br />
            <div>
                <Button type="primary" onClick={() => openNotification('topLeft')}>
                    <Icon type="radius-upleft" />
                    topLeft
    </Button>
    <Divider />
                <Button type="primary" onClick={() => openNotification('topRight')}>
                    <Icon type="radius-upright" />
                    topRight
    </Button>
                <Divider />
                <Button type="primary" onClick={() => openNotification('bottomLeft')}>
                    <Icon type="radius-bottomleft" />
                    bottomLeft
    </Button>
    <Divider />
                <Button type="primary" onClick={() => openNotification('bottomRight')}>
                    <Icon type="radius-bottomright" />
                    bottomRight
    </Button>
            </div>
        </>
    );
}

export default a191217;