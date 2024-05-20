import * as React from "react";

function MyComponent() {
  return (
    <>
      <div className="div">
        <div className="div-2">Beranda</div>
        <div className="div-3">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e357a46b-e255-42af-aca8-37ab00e6e68c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e357a46b-e255-42af-aca8-37ab00e6e68c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e357a46b-e255-42af-aca8-37ab00e6e68c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e357a46b-e255-42af-aca8-37ab00e6e68c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e357a46b-e255-42af-aca8-37ab00e6e68c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e357a46b-e255-42af-aca8-37ab00e6e68c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e357a46b-e255-42af-aca8-37ab00e6e68c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e357a46b-e255-42af-aca8-37ab00e6e68c?apiKey=fa934a50622b4d5eb8776b9e7c85bd87&"
            className="img"
          />
          Layanan
        </div>
        <div className="div-5">Blog</div>
        <div className="div-6">Profil</div>
      </div>
      <style jsx>{`
        .div {
          display: flex;
          gap: 20px;
          align-self: stretch;
          font-size: 23px;
          color: #577cff;
          font-weight: 600;
          white-space: nowrap;
          line-height: 150%;
          justify-content: space-between;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div {
            max-width: 100%;
            margin-top: 40px;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-2 {
          font-family: Poppins, sans-serif;
        }
        .div-3 {
          disply: flex;
          flex-direction: column;
          font-family: Poppins, sans-serif;
          position: relative;
          justify-content: center;
          overflow: hidden;
          align-self: start;
          aspect-ratio: 5.59;
        }
        @media (max-width: 991px) {
          .div-3 {
            white-space: initial;
          }
        }
        .img {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-4 {
          position: relative;
        }
        .div-5 {
          font-family: Poppins, sans-serif;
        }
        .div-6 {
          font-family: Poppins, sans-serif;
        }
      `}</style>
    </>
  );
}
