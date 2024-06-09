/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Card, CardBody, CardImg, Button } from 'react-bootstrap';
import img1 from '../assets/24.jpeg'
import img2 from '../assets/29.jpeg'
import img3 from '../assets/30.jpeg'
import logo from '../assets/Bulukumba_Logo1.png'
import '../css/AboutDispora.css'


function AboutDispora() {
    return (
        <Container className="max-w-screen-xl mx-auto p-4">
            <Row className="justify-content-between align-items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <Col md={6} className="p-4">
                    <div className='box' >
                        <div className='grup d-flex'>
                            <img className='bulukumba' src={logo} alt="logo"/>
                            <p className='discoverbulukumba text-center'>
                                <span className='text-wrapper text-center'>Discover</span>
                                <span className='span text-center'>Bulukumba.Com</span>
                            </p>
                        </div>
                    </div>
                    <Row className="grid-cols-2 gap-4">
                        <Col>
                            <Card>
                                <CardImg src={img1} alt="Pantai Tanjung Bira" className="rounded-lg shadow-lg" />
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg src={img2} alt="Pantai Pasiheli" className="rounded-lg shadow-lg" />
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg src={img3} alt="Pantai Liang Tio" className="rounded-lg shadow-lg" />
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className="p-4">
                    <p className="text-zinc-600 text-sm">
                        Discover Bulukumba merupakan perusahaan penyedia layanan petualangan alam terkemuka yang berbasis di Bogor. Kami secara khusus mengkhususkan diri dalam memberikan pengalaman tak terlupakan melalui berbagai paket servis, termasuk rafting, paintball, offroad, outbound, dan akomodasi di hotel.
                    </p>
                    <p className="text-zinc-600 text-sm mt-2">
                        Tim kami terdiri dari para profesional yang berpengalaman dan ahli di bidangnya masing-masing. Kami bangga dapat memberikan pengalaman petualangan yang sesuai dengan ekspektasi Anda dan memberikan kenangan tak terlupakan di tengah keindahan alam yang memukau. Bergabunglah dengan kami di Green Adventure dan temukan petualangan sejati yang akan membuat Anda terinspirasi dan terpukau!
                    </p>
                    <Button variant="primary" className="mt-4">
                        Lihat Profil Kami
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutDispora;