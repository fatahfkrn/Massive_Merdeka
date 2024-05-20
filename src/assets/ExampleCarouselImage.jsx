/* eslint-disable react/prop-types */
import Carousel from 'react-bootstrap/Carousel';
import imgCarousel1 from '../assets/7.jpeg';
import imgCarousel2 from '../assets/10.jpeg';
import imgCarousel3 from '../assets/13.jpeg'


const ExampleCarouselImage = ({ text }) => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="Img-carousel d-block img-fluid w-100"
                    src={imgCarousel1}
                    alt={`${text} slide`}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="Img-carousel d-block img-fluid w-100"
                    src={imgCarousel2}
                    alt={`${text} slide`}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="Img-carousel d-block img-fluid w-100"
                    src={imgCarousel3}
                    alt={`${text} slide`}
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default ExampleCarouselImage;