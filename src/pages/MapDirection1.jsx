/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/MapDirection.css";

const MapDirection1 = () => {
    return (
        <div className="map-direction-EXP">
            <div className="div-2">
                <Header />
                <div className="MAP-DIRECTION">MAP &amp; DIRECTION</div>
                <div className="text-wrapper-10">Pantai Tanjung Bira</div>
                <div className="text-wrapper-11">Google Maps</div>
                <div className="overlap-2">
                    <div className="MAP-DIRECTION-2">MAP &amp; DIRECTION</div>
                    <div className="text-wrapper-12">Kunjungi Tujuan Mu Sekarang</div>
                </div>
                <div className="overlap-3">
                    <img className="image" alt="Image" src="image-29.png" />
                    <div className="group-2">
                        <img className="ph-map-pin-fill" alt="Ph map pin fill" src="ph-map-pin-fill.svg" />
                        <div className="div-wrapper">
                            <div className="text-wrapper-13">Pantai Tajung Bira</div>
                        </div>
                    </div>
                    <img className="teenyicons-right" alt="Teenyicons right" src="teenyicons-right-solid.svg" />
                    <img className="teenyicons-right-2" alt="Teenyicons right" src="image.svg" />
                    {/* <Group
                        className="group-58"
                        dashiconsNo="dashicons-no-3.svg"
                        logosGoogleMaps="logos-google-maps-4.svg"
                        materialSymbols="material-symbols-search-3.svg"
                        property1="default"
                    /> */}
                </div>
                <p className="text-wrapper-14">
                    Pantai Tanjung Bira, yang terletak di ujung selatan Sulawesi Selatan, adalah salah satu destinasi wisata
                    terindah di Indonesia. Dikenal dengan pasir putihnya yang lembut seperti tepung dan air laut yang jernih
                    berwarna turquoise, pantai ini menawarkan panorama yang menakjubkan dan suasana yang damai. Pengunjung bisa
                    menikmati berbagai aktivitas seperti snorkeling, diving, dan berlayar untuk menjelajahi keindahan bawah laut
                    yang kaya dengan terumbu karang dan kehidupan laut yang beragam.
                </p>
                <img className="logos-google-maps-2" alt="Logos google maps" src="logos-google-maps.svg" />
                <div className="overlap-wrapper">
                    <div className="overlap-4">
                        <div className="text-wrapper-15">Open Trip</div>
                        <img className="material-symbols-2" alt="Material symbols" src="material-symbols-trip.svg" />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default MapDirection1;