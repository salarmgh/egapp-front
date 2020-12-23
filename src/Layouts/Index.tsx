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
        <Container className={`${styles.fullHeight}`} fluid>
            <Navbar className={`${styles.nav}`} bg="light" expand="lg">
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
            <Row className={`${styles.fill}`}>
                <Col className={`${styles.fullHeight}`} sm={2}>
                    <ul>
                        <li>Channels</li>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                        <li>Directs</li>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                        <a href="#">
                            <li>Salar Moghaddam</li>
                        </a>
                    </ul>
                </Col>
                <Col>2 of 2</Col>
            </Row>
        </Container>
    );
}

export default Index;
