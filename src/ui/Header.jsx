/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from '../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';

const languages = [
    { code: 'en', name: 'English' },
    { code: 'id', name: 'Indonesia' },
];

const Header = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);

    const handleSelect = (eventKey) => {
        setSelectedLanguage(eventKey);
    };

    return (
        <Navbar bg="light" className="fixed-top" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src={logo}
                        width="110"
                        height="70"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#">Beranda</Nav.Link>
                        <NavDropdown title="Layanan" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Open Trip</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Hotel & Resto
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Map & Direction</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Reservation & Contact</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">Blog</Nav.Link>
                        <Nav.Link href="#">Profil</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Search</Nav.Link>
                        <Navbar.Collapse>
                            <Dropdown onSelect={handleSelect}>
                                <Dropdown.Toggle variant="light">
                                    {languages.find(l => l.code === selectedLanguage).name}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {languages.map((language) => (
                                        <Dropdown.Item eventKey={language.code} key={language.code}>
                                            {language.name}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Navbar.Collapse>
                        <Nav.Link href="#">Instagram</Nav.Link>
                        <Nav.Link href="#">Whatsapp</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;