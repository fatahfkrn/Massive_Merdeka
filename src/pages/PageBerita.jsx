// eslint-disable-next-line no-unused-vars
import React from "react";
import { Language } from "./Language";
import { Layanan } from "./Layanan";
import { SearchBar } from "./SearchBar";
import "./pageberita.css";

export const BlogPageBerita = () => {
  return (
    <div className="blog-page-berita">
      <div className="div-2">
        <footer className="footer">
          <div className="overlap">
            <div className="text-wrapper-6">INFO LEBIH LANJUT</div>
            <p className="p">Jangan Ragu Untuk Melihat Akun Media Sosial Kami.</p>
          </div>
          <img className="skill-icons" alt="Skill icons" src="skill-icons-instagram.svg" />
          <img className="logos-whatsapp-icon" alt="Logos whatsapp icon" src="logos-whatsapp-icon.svg" />
          <img className="logos-facebook" alt="Logos facebook" src="logos-facebook.svg" />
          <img className="streamline-web" alt="Streamline web" src="streamline-web.svg" />
          <div className="group">
            <div className="overlap-group-3">
              <p className="text-wrapper-7">2024 Discover Bulukumba. All Rights Reserved</p>
              <img className="mdi-copyright" alt="Mdi copyright" src="mdi-copyright.svg" />
            </div>
          </div>
          <img className="mage-tiktok-circle" alt="Mage tiktok circle" src="mage-tiktok-circle.svg" />
        </footer>
        <img className="rectangle-4" alt="Rectangle" src="rectangle-58.png" />
        <div className="overlap-2">
          <img className="image" alt="Image" src="image-10.png" />
          <div className="rectangle-5" />
          <p className="BLOG-TERBARU">
            <span className="span">BLOG TERBARU </span>
            <span className="text-wrapper-8">BULUKUMBA</span>
          </p>
          <p className="text-wrapper-9">Temukan Kabar Terbaru Dari Destinasi Wisatamu</p>
          <div className="text-wrapper-10">Berita</div>
          <div className="overlap-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-11">Artikel</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-12">Event</div>
            </div>
          </div>
        </div>
        <p className="bulukumba-dinobatkan">
          Bulukumba Dinobatkan Menjadi Destinasi Wisata Terbaik&nbsp;&nbsp;Di Sulawesi Selatan
        </p>
        <div className="text-wrapper-13">Destinasi Wisata Terbaik 2022-2024</div>
        <div className="text-wrapper-14">Aria Wardana (2024)</div>
        <div className="text-wrapper-15">13 Desember 2023</div>
        <div className="text-wrapper-16">9:00 WIB</div>
        <div className="text-wrapper-17">Events / Update</div>
        <p className="text-wrapper-18">
          Bulukumba diakui sebagai destinasi wisata terbaik di Sulawesi Selatan, memperoleh penghargaan yang mengukuhkan
          posisinya dalam industri pariwisata lokal. Keindahan alamnya yang menakjubkan dan beragamnya atraksi wisata
          yang ditawarkan telah menarik perhatian wisatawan dari dalam dan luar negeri, menjadikannya sebagai tujuan
          yang sangat diminati bagi para pelancong yang ingin mengeksplorasi kekayaan budaya dan alam Sulawesi Selatan.
        </p>
        <p className="text-wrapper-19">
          Penghargaan ini diberikan berdasarkan berbagai kriteria, termasuk pengelolaan destinasi, fasilitas wisata, dan
          keberlanjutan lingkungan. Bulukumba dikenal dengan pantai-pantainya yang mempesona seperti Pantai Tanjung
          Bira, serta warisan budaya yang kaya, seperti perahu phinisi yang legendaris. Upaya pemerintah daerah dalam
          meningkatkan infrastruktur dan promosi pariwisata juga berperan penting dalam pencapaian ini. Dengan
          pencapaian ini, Bulukumba diharapkan dapat semakin meningkatkan jumlah kunjungan wisatawan dan memberikan
          dampak positif bagi perekonomian lokal.
        </p>
        <img className="ph-calendar-bold" alt="Ph calendar bold" src="ph-calendar-bold.svg" />
        <img className="mingcute-time-fill" alt="Mingcute time fill" src="mingcute-time-fill.svg" />
        <img className="material-symbols-tag" alt="Material symbols tag" src="material-symbols-tag.svg" />
        <img className="rectangle-6" alt="Rectangle" src="rectangle-59.png" />
        <div className="header">
          <div className="group-2">
            <div className="overlap-group-4">
              <img className="bulukumba" alt="Bulukumba" src="bulukumba-logo1.png" />
              <p className="discoverbulukumba">
                <span className="text-wrapper-20">Discover</span>
                <span className="text-wrapper-21">Bulukumba.Com</span>
              </p>
            </div>
          </div>
          <div className="text-wrapper-22">Beranda</div>
          <div className="text-wrapper-23">Blog</div>
          <div className="text-wrapper-24">Profil</div>
          <SearchBar className="search-bar" />
          <img className="logos-whatsapp-icon-2" alt="Logos whatsapp icon" src="image.svg" />
          <Layanan className="layanan-instance" polygon="polygon-2-5.svg" property1="default" />
          <Language className="language-instance" polygon="polygon-2-6.svg" property1="default" />
          <img className="skill-icons-2" alt="Skill icons" src="skill-icons-instagram-2.svg" />
        </div>
        <img className="logos-whatsapp-icon-3" alt="Logos whatsapp icon" src="logos-whatsapp-icon-2.svg" />
      </div>
    </div>
  );
};