import React, {useState} from 'react';
import {Button, Steps, theme, message, Row, Col, Statistic, Cascader} from "antd";
import Globals from "../../Globals";
import {CalendarOutlined} from "@ant-design/icons";

const steps = [
    {
        title: '活动报名阶段',
        content: 'First-content',
    },
    {
        title: '材料确认阶段',
        content: 'Second-content',
    },
    {
        title: '返校宣讲阶段',
        content: 'Last-content',
    },
    {
        title: '总结材料递交阶段',
        content: 'Last-content',
    },
    {
        title: '评优揭晓 | 活动结束',
        content: 'Last-content',
    },
];

const options = [
    {
        value: '2023',
        label: '2023-2024学年',
    },
    {
        value: '2022',
        label: '2022-2023学年',
    },
];

const onChange = (value) => {
    console.log(value);
};

const TimeLinePage = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const date = new Date;

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };
    return (
        <div style={{margin: '2%', zIndex:20}}>
            <p>活动年份：</p>
            <Cascader options={options} onChange={onChange} placeholder="活动年份" defaultValue={[date.getFullYear() + "-" + (date.getFullYear() + 1) + '学年']}/>
            <p style={{
                color: Globals.npu_color,
                fontSize: '3vh',
                textAlign: 'center',
                fontFamily: 'font1',
                fontWeight: 'bold',
            }}>活动时间线</p>
            <Steps current={current} items={items} />
            <Row gutter={16} style={{textAlign:'center',marginTop:'4vh'}}>
                <Col span={12}>
                    <Statistic title="该阶段日期" value={'2023-10-5'} prefix={<CalendarOutlined />} />
                </Col>
                <Col span={12}>
                    <Statistic title="以完成该阶段队伍数" value={93} suffix="/ 100" />
                </Col>
            </Row>
            <div style={contentStyle}>{steps[current].content}</div>
        </div>
    );
};

export default TimeLinePage;