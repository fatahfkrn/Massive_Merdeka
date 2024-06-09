import Header from "../components/Header";
import Carousel from "../components/Carousel";
import AboutDispora from "../components/AboutDispora";
import OpenTrip from "../components/OpenTrip";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer"
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import MapDirection from "./MapDirection";

const Beranda = () => {
    return (
        <>
            <Header />
            <Carousel />
            <AboutDispora />
            <OpenTrip />
            <Feedback />
            <Footer />
        </>
    );
};

export default Beranda;