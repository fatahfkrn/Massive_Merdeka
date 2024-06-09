/* eslint-disable no-unused-vars */
import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { IconName } from "react-icons/bs";
import { Container, Navbar, Nav, NavDropdown, Dropdown, Button, Row, Col, Form, Collapse, Accordion } from 'react-bootstrap';
import LanguageSwitcher from '../hooks/LanguageSwitcher'; // Import the LanguageSwitcher component
// import { FaSearch } from "react-icons/fa";
// import { SearchBar } from '../hooks/SearchBar';
import ig from '../assets/ig.png'
import wa from '../assets/wa.png'





const languages = [
    { code: 'en', name: 'English' },
    { code: 'id', name: 'Indonesia' },
];

const Header = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);

    const [open, setOpen] = useState(false);

    const handleSelect = (eventKey) => {
        setSelectedLanguage(eventKey);
    };

    return (
        // <Navbar bg="light" className="fixed-top" expand="lg">
        //     <Container>
        //         <Navbar.Brand href="#">
        //             <img
        //                 src={logo}
        //                 width="110"
        //                 height="70"
        //                 alt="Logo"
        //             />
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="navbar-nav" />
        //         <Navbar.Collapse id="navbar-nav">
        //             <Nav className="mx-auto">
        //                 <Nav.Link href="#">Beranda</Nav.Link>
        //                 <NavDropdown title="Layanan" id="basic-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">Open Trip</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">
        //                         Hotel & Resto
        //                     </NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Map & Direction</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Reservation & Contact</NavDropdown.Item>
        //                 </NavDropdown>
        //                 <Nav.Link href="#">Blog</Nav.Link>
        //                 <Nav.Link href="#">Profil</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //         <Navbar.Collapse>
        //             <Nav className="mx-auto">
        //                 <SearchBar />
        //                 {/* <Navbar.Collapse>
        //                     <Dropdown onSelect={handleSelect}>
        //                         <Dropdown.Toggle variant="light">
        //                             {languages.find(l => l.code === selectedLanguage).name}
        //                         </Dropdown.Toggle>
        //                         <Dropdown.Menu>
        //                             {languages.map((language) => (
        //                                 <Dropdown.Item eventKey={language.code} key={language.code}>
        //                                     {language.name}
        //                                 </Dropdown.Item>
        //                             ))}
        //                         </Dropdown.Menu>
        //                     </Dropdown>
        //                 </Navbar.Collapse> */}
        //                 <LanguageSwitcher property1="default" className="language-switcher" />
        //                 {/* Pass props to LanguageSwitcher */}
        //                 <Nav.Link href="#">Instagram</Nav.Link>
        //                 <Nav.Link href="#">Whatsapp</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="110"
                        height="70"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link to='/'>Beranda</Link></Nav.Link>
                    <NavDropdown title="Layanan" id="basic-nav-dropdown" style={{ Color: '#3B71CA' }}>
                        
                        
                        
                        <NavDropdown.Item href="OTPages" className="text-primary"><Link className="text-primary" to='/OTPages'>Open Trip</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" className="text-primary"><Link className="text-primary" to='/HotelResto'>Hotel & Resto</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" className="text-primary"><Link className="text-primary" to='/MapDirection'>Map & Direction</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4" className="text-primary"><Link className="text-primary" to='/ReservationContact'>Reservation & Contact</Link></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link><Link className="text-primary" to="/Blog">Blog</Link></Nav.Link>
                    <Nav.Link><Link to='/Profile'>Profile</Link>    </Nav.Link>
                </Nav>

                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header></Accordion.Header>
                        <Accordion.Body>
                            <Form inline id="btn-collapse">
                                <Row>
                                    <Col xs="auto">
                                        <Form.Control
                                            type="text"
                                            placeholder="Search"
                                            className=" mr-sm-2"
                                        />
                                    </Col>
                                    <Col xs="auto">
                                        <LanguageSwitcher property1="default" className="language-switcher" />
                                    </Col>
                                    <Col xs="auto">
                                        <Navbar.Brand href="#">
                                            <img
                                                src={ig}
                                                width="40"
                                                height="40"
                                                className="d-inline-block align-top"
                                                alt="React Bootstrap logo"
                                            />
                                        </Navbar.Brand>
                                    </Col>
                                    <Col xs="auto">
                                        <Navbar.Brand href="#home">
                                            <img
                                                src={wa}
                                                width="40"
                                                height="40"
                                                className="d-inline-block align-top"
                                                alt="React Bootstrap logo"
                                            />
                                        </Navbar.Brand>
                                    </Col>
                                </Row>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </Navbar>
    );
};

export default Header;