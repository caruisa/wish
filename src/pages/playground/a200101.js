import React from 'react';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import './playground.css';
import { PageHeader, Slider, InputNumber, Row, Col } from 'antd';

class a200101 extends React.Component {
    state = {
        inputValue: 1,
    };

    onChange = value => {
        this.setState({
            inputValue: value,
        });
    };

    render() {
        const { inputValue } = this.state;
        return (
            <>
                <PageHeader
                    style={{
                        border: '1px solid rgb(235, 237, 240)',
                    }}
                    onBack={() => window.history.back()}
                    title="Slider"
                    subTitle="(K . Y . W)"
                    extra={[
                        <div id="web_h_playground_btn_group">
                            <Link to="/mplayground"><button id="web_h_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
                        </div>
                    ]}
                />
                <br />
                <Row>
                    <Col span={12}>
                        <Slider
                            min={1}
                            max={20}
                            onChange={this.onChange}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                        />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={1}
                            max={20}
                            style={{ marginLeft: 16 }}
                            value={inputValue}
                            onChange={this.onChange}
                        />
                    </Col>
                </Row>
            </>
        );
    }
}

export default a200101;