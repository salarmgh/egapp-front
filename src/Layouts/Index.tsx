import { Layout, Menu } from "antd";
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { MessageBox, Input, Button } from "react-chat-elements";
import "react-chat-elements/dist/main.css";

const { Header, Content, Sider } = Layout;

const Index = () => {
    return (
        <Layout>
            <Sider
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
                    <Menu.Item key="4" icon={<BarChartOutlined />}>
                        nav 4
                    </Menu.Item>
                    <Menu.Item key="5" icon={<CloudOutlined />}>
                        nav 5
                    </Menu.Item>
                    <Menu.Item key="6" icon={<AppstoreOutlined />}>
                        nav 6
                    </Menu.Item>
                    <Menu.Item key="7" icon={<TeamOutlined />}>
                        nav 7
                    </Menu.Item>
                    <Menu.Item key="8" icon={<ShopOutlined />}>
                        nav 8
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header
                    className="site-layout-background"
                    style={{ padding: 0 }}
                />
                <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, textAlign: "center" }}
                    >
                        <MessageBox
                            title={"MahyarAP"}
                            titleColor={"red"}
                            date={new Date()}
                            forwarded={true}
                            replyButton={true}
                            position={"left"}
                            text={"Hello my dear"}
                        />
                        <MessageBox
                            title={"SalarMgh"}
                            titleColor={"blue"}
                            date={new Date()}
                            forwarded={true}
                            replyButton={true}
                            position={"right"}
                            text={"Hello my dear"}
                            status={"read"}
                        />
                        <MessageBox
                            position={"left"}
                            type={"photo"}
                            text={"folan.png"}
                            data={{
                                uri:
                                    "https://avatars.githubusercontent.com/u/7114804?s=400&u=506cfebd27da6a879325e3181a747607f381f930&v=4",
                                status: {
                                    click: false,
                                    loading: 0,
                                },
                            }}
                        />
                        <MessageBox
                            position={"right"}
                            type={"video"}
                            text={"folan.mp4"}
                            data={{
                                uri:
                                    "https://hajifirouz2.cdn.asset.aparat.com/aparat-video/0bf6fd627aa00638b8b806bb4c4b34ab29320523-144p.mp4",
                                status: {
                                    click: false,
                                    loading: 0,
                                },
                            }}
                        />

                        <Input
                            placeholder="Type here..."
                            multiline={true}
                            rightButtons={
                                <Button
                                    color="white"
                                    backgroundColor="black"
                                    text="Send"
                                />
                            }
                        />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Index;
