import Header from "./Header";
import Carousel from "./Carousel";
import Footer from "./Footer";
import AboutDispora from "./AboutDispora";
import OpenTrip from "./OpenTrip";
import Feedback from "./feedback";
// import MapDirection from "./MapDirection";

const Beranda = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <AboutDispora />
            <OpenTrip />
            <Feedback />
            <Footer />
            {/* <MapDirection /> */}

        </div>
    );
};

export default Beranda;