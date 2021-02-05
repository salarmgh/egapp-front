import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Card, Row, Col } from "antd";
import { Redirect } from "react-router-dom";
import ChatService from "../WebSocket/WebSocket";

const Login = () => {
    const [loginState, setLoginState] = useState(false);
    //ws.onmessage = function (event) {
    //    console.log(`[message] Data received from server: ${event.data}`);
    //};

    const onFinish = async (values: any) => {
        await ChatService.auth(values.username, values.password);
        await ChatService.send();
    };

    const onFinishFailed = async (errorInfo: any) => {
        console.log("Bad input");
        //setLoginState(true);
    };

    const tabList = [
        {
            key: "login",
            tab: "Login",
        },
        {
            key: "register",
            tab: "Register",
        },
    ];

    if (loginState) {
        return <Redirect to="/" />;
    }

    return (
        <Row>
            <Col span={7} offset={9}>
                <Card title="Card title" bordered={true} tabList={tabList}>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default Login;
