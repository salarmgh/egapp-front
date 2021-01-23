import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Card, Row, Col } from "antd";
import { Redirect } from "react-router-dom";

//import ws from "../globals";

const Login = () => {
    const [loginState, setLoginState] = useState(false);
    const { client, xml, jid } = require("@xmpp/client");
    const debug = require("@xmpp/debug");
    //ws.onmessage = function (event) {
    //    console.log(`[message] Data received from server: ${event.data}`);
    //};

    const onFinish = (values: any) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        //console.log("Failed:", errorInfo);
        const xmpp = client({
            service: "ws://172.16.143.34:8085/ws",
            domain: "egapp.im",
            username: "mahyar",
            password: "123",
        });

        debug(xmpp, true);

        xmpp.on("error", (err) => {
            console.error(err);
        });

        xmpp.on("offline", () => {
            console.log("offline");
        });

        xmpp.on("stanza", async (stanza) => {
            if (stanza.is("message")) {
                await xmpp.send(xml("presence", { type: "unavailable" }));
                await xmpp.stop();
            }
        });

        xmpp.on("online", async (address) => {
            // Makes itself available
            await xmpp.send(xml("presence"));

            // Sends a chat message to itself
            const message = xml(
                "message",
                { type: "chat", to: address },
                xml("body", {}, "hello world")
            );
            await xmpp.send(message);
        });

        xmpp.start().catch(console.error);
        //ws.send(
        //    "<stream:stream to='egapp.im' xmlns='jabber:client' xmlns:stream='http://etherx.jabber.org/streams' version='1.0'>"
        //);
        //ws.send(
        //    "<auth xmlns='urn:ietf:params:xml:ns:xmpp-sasl' mechanism='PLAIN' xmlns:ga='http://www.google.com/talk/protocol/auth' ga:client-uses-full-bind-result='true'>AHNhbGFyADEyMw==</auth>"
        //);
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
