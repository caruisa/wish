import React from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import './playground.css';
import { PageHeader, Progress, Button, Tooltip, } from 'antd';

const ButtonGroup = Button.Group;

class a191231 extends React.Component {
    state = {
        percent: 0,
    };

    increase = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    };

    decline = () => {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    };

    render() {
        return (
            <>
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    onBack={() => window.history.back()}
                    title="Progress"
                    subTitle="(K . Y . W)"
                    extra={[
                        <div id="web_h_playground_btn_group">
                            <Link to="/mplayground"><button id="web_h_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
                        </div>
                    ]}
                />
                <br /><br />
                <div>
                    <Progress type="circle" percent={this.state.percent} />
                    <ButtonGroup>
                        <Button onClick={this.decline} icon="minus" />
                        <Button onClick={this.increase} icon="plus" />
                    </ButtonGroup>
                </div>
                <br /><br />
                <div>
        <Progress percent={this.state.percent} />
        <ButtonGroup>
          <Button onClick={this.decline} icon="minus" />
          <Button onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </div>
      <br /><br />
                <div>
                    <Progress percent={30} />
                    <Progress percent={50} status="active" />
                    <Progress percent={70} status="exception" />
                    <Progress percent={100} />
                    <Progress percent={50} showInfo={false} />
                </div>
                <br /><br />
                <div>
                    <Progress type="circle" percent={75} />
                    <Progress type="circle" percent={70} status="exception" />
                    <Progress type="circle" percent={100} />
                </div>
                <br /><br />
                <div>
                    <Tooltip title="3 done / 3 in progress / 4 to do">
                        <Progress percent={60} successPercent={30} />
                    </Tooltip>

                    <Tooltip title="3 done / 3 in progress / 4 to do">
                        <Progress percent={60} successPercent={30} type="circle" />
                    </Tooltip>

                    <Tooltip title="3 done / 3 in progress / 4 to do">
                        <Progress percent={60} successPercent={30} type="dashboard" />
                    </Tooltip>
                </div>
                <br /><br />
                <div>
                    <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
                    <Progress type="circle" percent={100} format={() => 'Done'} />
                </div>
            </>
        );
    }
}

export default a191231;