/* eslint-disable no-unused-vars */
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const OpenTrip = () => {
    const items = [
        { img: 'https://placehold.co/300x200', alt: 'Pantai Tanjung Bira', title: 'Pantai Tanjung Bira', price: '1.5 JT', duration: '3 Hari' },
        { img: 'https://placehold.co/300x200', alt: 'Tebing Apparalang', title: 'Tebing Apparalang', price: '1.3 JT', duration: '3 Hari' },
        { img: 'https://placehold.co/300x200', alt: 'Pantai Panrang Luhu', title: 'Pantai Panrang Luhu', price: '2.1 JT', duration: '3 Hari' },
        { img: 'https://placehold.co/300x200', alt: 'Pantai Marumasa', title: 'Pantai Marumasa', price: '1.5 JT', duration: '3 Hari' },
        { img: 'https://placehold.co/300x200', alt: 'Pantai Kasuso', title: 'Pantai Kasuso', price: '1.3 JT', duration: '3 Hari' },
        { img: 'https://placehold.co/300x200', alt: 'Pantai Mandala Ria', title: 'Pantai Mandala Ria', price: '2.1 JT', duration: '3 Hari' },
        { img: 'https://placehold.co/300x200', alt: 'Pantai Pasir Putih', title: 'Pantai Pasir Putih', price: '1.5 JT', duration: '3 Hari' },
        { img: 'https://placehold.co/300x200', alt: 'Pantai Bara', title: 'Pantai Bara', price: '1.5 JT', duration: '3 Hari' },
    ];

    return (
        <Row className="flex flex-wrap justify-center mb-10">
            {items.map((item, index) => (
                <Col key={index} xs={6} md={4} lg={3} className="p-4">
                    <div className="text-center">
                        <img src={item.img} alt={item.alt} className="rounded-lg" />
                        <div className="text-center">{item.title}</div>
                        <div className="text-center font-bold">{item.price}</div>
                        <div className="text-center bg-red-600 rounded-full w-16 mx-auto">{item.duration}</div>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default OpenTrip;