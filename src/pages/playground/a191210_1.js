import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from 'antd';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
    console.log(key);
}

const text1 = `
  복 있는 사람은 악인들의 꾀를 따르지 아니하며 죄인들의 길에 서지 아니하며 오만한 자들의 자리에 앉지 아니하고 (시편 1 : 1)
`;

const text2 = `
  오직 여호와의 율법을 즐거워하여 그의 율법을 주야로 묵상하는도다 (시편 1 : 2)
`;

const text3 = `
  그는 시냇가에 심은 나무가 철을 따라 열매를 맺으며 그 잎사귀가 마르지 아니함 같으니 그가 하는 모든 일이 형통하리로다 (시편 1 : 3)
`;

const text4 = `
  악인들은 그렇지 아니함이여 오직 바람에 나는 겨와 같도다 (시편 1 : 4)
`;

const text5 = `
  그러므로 악인들은 심판을 견디지 못하며 죄인들이 의인들의 모임에 들지 못하리로다 (시편 1 : 5)
`;

const text6 = `
  무릇 의인들의 길은 여호와께서 인정하시나 악인들의 길은 망하리로다 (시편 1 : 6)
`;

function a191210_1() {
    return (
        <>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                onBack={() => window.history.back()}
                title="Collapse"
                subTitle="(K . Y . W)"
                extra={[
                    <div id="web_h_playground_btn_group">
                        <Link to="/mplayground"><button id="web_h_playground">뒤로가기 (React. Basic 놀이터)</button></Link>
                    </div>
                ]}
            />
            <br />
            <Collapse onChange={callback}>
                <Panel header="메시지" key="1">
                    <Collapse defaultActiveKey="1">
                        <Panel header="성 경 말 씀" key="1">
                            <p>{text1}</p>
                        </Panel>
                    </Collapse>
                    <Collapse defaultActiveKey="1">
                        <Panel header="성 경 말 씀" key="2">
                            <p>{text2}</p>
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header="메시지" key="2">
                    <Collapse defaultActiveKey="1">
                        <Panel header="성 경 말 씀" key="1">
                            <p>{text3}</p>
                        </Panel>
                    </Collapse>
                </Panel>
                <Panel header="메시지" key="3">
                    <Collapse defaultActiveKey="1">
                        <Panel header="성 경 말 씀" key="1">
                            <p>{text4}</p>
                        </Panel>
                         </Collapse>
                </Panel>

                <Panel header="메시지" key="4">
                    <Collapse defaultActiveKey="1">
                        <Panel header="성 경 말 씀" key="1">
                            <p>{text5}</p>
                        </Panel>
                         </Collapse>
                </Panel>

                <Panel header="메시지" key="5">
                    <Collapse defaultActiveKey="1">
                        <Panel header="성 경 말 씀" key="1">
                            <p>{text6}</p>
                        </Panel>
                         </Collapse>
                </Panel>



            </Collapse>

        </>
    );
}

export default a191210_1;