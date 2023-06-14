import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Col, ConfigProvider, Form, Input, Row} from "antd";
import {FieldNumberOutlined, LockOutlined, MailOutlined} from "@ant-design/icons";
import Globals from "../../Globals";

const FoundPasswordPage = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Row>
            <Col span={24}>
                <p
                    style={{
                        fontSize: "3.2vh",
                        fontFamily: 'font1',
                        fontWeight:'bold',
                        //color: Globals.npu_color,
                    }}
                >
                    学生大使 | 找回密码
                </p>
            </Col>
            <Col span={4}/>
            <Col span={16}>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="mail"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的学号!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            placeholder="注册邮箱"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                            {
                                required: true,
                                message: '请输入验证码!',
                            },
                        ]}
                    >
                        <Row>
                            <Col span={14}>
                                <Input
                                    prefix={<FieldNumberOutlined />}
                                    type="text"
                                    placeholder="验证码"
                                    size="large"
                                />
                            </Col>
                            <Col span={10}>
                                <Button type='primary' style={{marginTop:'0.3vh'}}>发送验证码</Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的密码!',
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="请输入新密码"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item
                        name="passwordAgain"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的密码!',
                            },
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="请再次输入新密码"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: Globals.npu_color,
                                },
                            }}
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                style={{width: '100%'}}
                            >
                                更改密码
                            </Button>
                        </ConfigProvider>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={4}/>
            <Col span={24}>
                <Button
                    type="link"
                    onClick={()=>navigate('/auth/login')}
                >
                    返回登陆页
                </Button>
            </Col>
        </Row>
    );
};

export default FoundPasswordPage;
