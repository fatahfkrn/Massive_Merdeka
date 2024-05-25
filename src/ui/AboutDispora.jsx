/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Card, CardBody, CardImg, Button } from 'react-bootstrap';

function AboutDispora() {
    return (
        <Container className="max-w-screen-xl mx-auto p-4">
            <Row className="justify-content-between align-items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <Col md={6} className="p-4">
                    <h2 className="text-2xl font-bold text-blue-800 mb-2">DiscoverBulukumba.Com</h2>
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
                <Col md={6} className="p-4">
                    <Row className="grid-cols-2 gap-4">
                        <Col>
                            <Card>
                                <CardImg src="https://placehold.co/200x200" alt="Pantai Tanjung Bira" className="rounded-lg shadow-lg" />
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg src="https://placehold.co/200x200" alt="Pantai Pasiheli" className="rounded-lg shadow-lg" />
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardImg src="https://placehold.co/200x200" alt="Pantai Liang Tio" className="rounded-lg shadow-lg" />
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutDispora;