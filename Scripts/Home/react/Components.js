import React, { useState } from 'react';
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Jumbotron,
    Button,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
    CardColumns,
    Toast, ToastBody, ToastHeader
} from 'reactstrap';


export const TestNavbar = (props) => {
    const [isOpen , setIsOpen] = useState(false)

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}


export const TestJumboTron = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div className="p-3 my-2 rounded" style={{ position: "Fixed", left: "70%", bottom: "10%", zIndex: "99999"}}>
                <Toast isOpen={isOpen}>
                    <ToastHeader toggle={() => setIsOpen(!isOpen)} icon="primary">
                        Reactstrap
                    </ToastHeader>
                    <ToastBody>
                        This is a toast on a white background — check it out!
                 </ToastBody>
                </Toast>
            </div>
            <Jumbotron className="mt-3 bg-dark">
                <Container align="center" style={{ color: "White" }}>
                    <h1>React in ASP.NET MVC!</h1>
                    <p>Hello React World</p>
                    <Button color="primary" onClick={() => setIsOpen(!isOpen)}>Wow!</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}


export const PageFooter = (props) => {
    return (
        <footer className="page-footer font-small bg-dark fixed-bottom" style={{ color: "White" }}>

            <div className="footer-copyright text-center py-3">
                <p>© 2019 Copyright</p>
            </div>
        </footer>
    )
}

export const TestCard = (props) => {
    return (
        <CardColumns style={{ marginBottom: "100px" }}>
            <Card>
                <CardImg top width="100%" src="https://reactstrap.github.io/assets/256x186.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" src="https://reactstrap.github.io/assets/256x186.svg" alt="Card image cap" />
            </Card>
            <Card>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
            </Card>
            <Card>
                <CardImg top width="100%" src="https://reactstrap.github.io/assets/256x186.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            <Card body inverse color="primary">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button color="secondary">Button</Button>
            </Card>
        </CardColumns>
    )
}