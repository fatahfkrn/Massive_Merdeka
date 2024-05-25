import Header from "./Header";
import Carousel from "./Carousel";
import Footer from "./Footer";
import AboutDispora from "./AboutDispora";
import OpenTrip from "./OpenTrip";
import Feedback from "./feedback";

const Beranda = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <AboutDispora />
            <OpenTrip />
            <Feedback />
            <Footer />
        </div>
    );
};

export default Beranda;