import React from "react";
import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Row,
    Col,
} from "react-bootstrap";
import styles from "./Index.module.scss";

function Index() {
    return (
        <Container fluid>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Row fluid>
                <Col className={`${styles.sidebar} ${styles.fill}`} sm={2}>
                    <Nav className="flex-column">
                        <Nav.Item>Channels</Nav.Item>
                        <Nav.Link>my_channel</Nav.Link>
                        <Nav.Link>your_channel</Nav.Link>
                        <Nav.Link>this_channel</Nav.Link>
                        <Nav.Link>that_channel</Nav.Link>
                        <Nav.Link>fix_this</Nav.Link>
                        <Nav.Link>fix-that</Nav.Link>
                        <Nav.Link>fix-it</Nav.Link>
                        <Nav.Link>fix-them</Nav.Link>
                        <Nav.Link>my_tavalod</Nav.Link>
                        <Nav.Link>your_tavalod</Nav.Link>
                        <Nav.Link>important-tavalod</Nav.Link>
                        <Nav.Link>haha-works</Nav.Link>
                        <Nav.Link>not-works</Nav.Link>

                        <Nav.Item>Directs</Nav.Item>
                        <Nav.Link>Salar Moghaddam</Nav.Link>
                        <Nav.Link>Mahyar Abbaspour</Nav.Link>
                        <Nav.Link>Ye Oskol</Nav.Link>
                        <Nav.Link>Asghar agha</Nav.Link>
                        <Nav.Link>Akbar agha</Nav.Link>
                        <Nav.Link>Saeed</Nav.Link>
                        <Nav.Link>Sahand</Nav.Link>
                        <Nav.Link>Rouzbeh</Nav.Link>
                        <Nav.Link>Hamid</Nav.Link>
                        <Nav.Link>Soheil</Nav.Link>
                        <Nav.Link>Sina</Nav.Link>
                        <Nav.Link>Faramarz</Nav.Link>
                        <Nav.Link>In</Nav.Link>
                        <Nav.Link>Oon</Nav.Link>
                    </Nav>
                </Col>
                <Col>2 of 2</Col>
            </Row>
        </Container>
    );
}

export default Index;
