/* eslint-disable no-unused-vars */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/OpenTrip.css'
import img1 from '../assets/9.jpeg'
import img2 from '../assets/18.jpeg'
import img3 from '../assets/30.jpeg'
import img4 from '../assets/29.jpeg'
import img5 from '../assets/17.jpeg'
import img6 from '../assets/27.jpeg'
import img7 from '../assets/15.jpeg'
import img8 from '../assets/5.jpeg'


const OpenTrip = () => {
    const items = [
        { img: img1, alt: 'Pantai Tanjung Bira', kata1: 'Pantai', kata2: 'Tanjung Bira', price: '1.5', detailPrice: 'JT', duration: '3 Hari' },
        { img: img2, alt: 'Tebing Apparalang', kata1: 'Tebing', kata2: ' Apparalang', price: '1.3', detailPrice: 'JT', duration: '3 Hari' },
        { img: img3, alt: 'Pantai Panrang Luhu', kata1: 'Pantai', kata2: ' Panrang Luhu', price: '2.1', detailPrice: 'JT', duration: '3 Hari' },
        { img: img4, alt: 'Pantai Marumasa', kata1: 'Pantai', kata2: ' Marumasa', price: '1.5', detailPrice: 'JT', duration: '3 Hari' },
        { img: img5, alt: 'Pantai Kasuso', kata1: 'Pantai', kata2: ' Kasuso', price: '1.3', detailPrice: 'JT', duration: '3 Hari' },
        { img: img6, alt: 'Pantai Mandala Ria', kata1: 'Pantai', kata2: ' Mandala Ria', price: '2.1', detailPrice: 'JT', duration: '3 Hari' },
        { img: img7, alt: 'Pantai Pasir Putih', kata1: 'Pantai', kata2: ' Pasir Putih', price: '1.5', detailPrice: 'JT', duration: '3 Hari' },
        { img: img8, alt: 'Pantai Bara', kata1: 'Pantai', kata2: ' Bara', price: '1.5', detailPrice: 'JT', duration: '3 Hari' },
    ];

    return (
        <div className="container mt-10">
            <div className='justify-content-md-center'>
                <h1 className='text-uppercase text-center' style={
                    { color: '#FF6600', fontSize: '71px', fontFamily: 'Poppins',
                        fontWeight: '900', lineHeight: '100px', wordWrap: 'break-word',
                        boxShadow: 'unset'
                    }
                }>Open trip</h1>
                <p className='text-center' style={
                    { color: '#577CFF', fontWeight: 'bold' }
                }>Khusus kamu yang ingin menghabiskan Weekend bersama keluarga</p>
            </div>
            <Row className="flex flex-wrap justify-center mb-10">
                {items.map((item, index) => (
                    <Col key={index} xs={6} md={4} lg={3} className="p-4">
                        <div className="text-center">
                            <img src={item.img} alt={item.alt} className="rounded-lg img-card border border-primary border-opacity-20" />
                            <div className='bungkus1 border border-primary d-flex justify-content-between border my-2 px-2 py-2'>
                                <div className="grup1 text-left">
                                    <span className="kata1 text-left">{item.kata1}</span> <br />
                                    <span className="kata2 text-left">{item.kata2}</span>
                                </div>
                                <div className="grup2 d-flex justify-content-end">
                                    <div className="text-center font-bold price">{item.price}</div>
                                    <div className="text-center detail-price">{item.detailPrice}</div>
                                </div>
                            </div>
                            <div className="box-duration">
                                <div className="rectangle">
                                    <span className="duration">{item.duration}</span>
                                </div>
                            </div>
                            {/* <div className="text-center bg-red-600 rounded-full w-16 mx-auto">{item.duration}</div> */}
                        </div>
                    </Col>
                ))}
            </Row>
        </div>

    );
};

export default OpenTrip;