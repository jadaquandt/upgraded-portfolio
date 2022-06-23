import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function NavigationBar() {
    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand href="/">Jada Quandt</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="projects">Projects</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
