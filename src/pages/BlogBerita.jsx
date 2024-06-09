/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PaginationSearch from "../components/Pagination";
import "../css/BlogBerita.css";
// import { Button } from "react-bootstrap";


const BlogBerita = () => {
  return (
    <div className="blog-berita">
      <div className="div-2">
        <Header />
        <div className="overlap-2">
          <img className="image" alt="Image" src="image-10.png" />
          <div className="rectangle-4" />
          <p className="BLOG-TERBARU">
            <span className="span">BLOG TERBARU </span>
            <span className="text-wrapper-8">BULUKUMBA</span>
          </p>
          <p className="text-wrapper-9">Temukan Kabar Terbaru Dari Destinasi Wisatamu</p>
          <div className="text-wrapper-10">Berita</div>
          <div className="overlap-wrapper">
            <div className="div-wrapper btn btn-primary">
              <div className="text-wrapper-11">Artikel</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-12">Event</div>
            </div>
          </div>
        </div>
        <PaginationSearch className="pagination-instance" />
        <div className="group-2">
          <div className="overlap-3">
            <div className="rectangle-5" />
            <p className="text-wrapper-13">
              Bulukumba Dinobatkan Menjadi
              <br />
              Destinasi Wisata Terbaik Di Sulsel
            </p>
            <div className="rectangle-6" />
            <div className="text-wrapper-14">Selengkapnya</div>
          </div>
        </div>
        <div className="group-3">
          <div className="overlap-4">
            <div className="rectangle-5" />
            <p className="text-wrapper-13">
              Ada Penemuan Kuno Disalah satu
              <br />
              Pantai Yang Ada Di Bulukumba
            </p>
            <div className="rectangle-6" />
            <div className="text-wrapper-14">Selengkapnya</div>
          </div>
        </div>
        <div className="group-4">
          <div className="overlap-5">
            <div className="rectangle-5" />
            <p className="text-wrapper-13">
              Bulukumba Borong 3 Penghargaan
              <br />
              Sebagai Destinasi Terbersih 2025
            </p>
            <div className="rectangle-6" />
            <div className="text-wrapper-14">Selengkapnya</div>
          </div>
        </div>
        <div className="group-5">
          <div className="overlap-6">
            <div className="rectangle-5" />
            <p className="text-wrapper-13">
              Bulukumba Dinobatkan Menjadi
              <br />
              Destinasi Wisata Terbaik Di Sulsel
            </p>
            <div className="rectangle-6" />
            <div className="text-wrapper-14">Selengkapnya</div>
          </div>
        </div>
        <div className="group-6">
          <div className="overlap-7">
            <div className="rectangle-5" />
            <p className="text-wrapper-13">
              Ada Penemuan Kuno Disalah satu
              <br />
              Pantai Yang Ada Di Bulukumba
            </p>
            <div className="rectangle-6" />
            <div className="text-wrapper-14">Selengkapnya</div>
          </div>
        </div>
        <div className="group-7">
          <div className="overlap-8">
            <div className="rectangle-5" />
            <p className="text-wrapper-13">
              Bulukumba Borong 3 Penghargaan
              <br />
              Sebagai Destinasi Terbersih 2025
            </p>
            <div className="rectangle-6" />
            <div className="text-wrapper-14">Selengkapnya</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogBerita;