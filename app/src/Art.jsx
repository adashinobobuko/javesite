import { useState } from "react";
import Headeretc from "./components/Headeretc";
import "./App.css";
import "./Art.css";

export default function Art() {
  const [selected, setSelected] = useState(null);

  const artworks = [
    { id: 1, title: "雨夜", src: "/art/amayonomaiteisyutunoizeWM'.jpg" },
    { id: 2, title: "ジャヴの森", src: "/art/Jave&forestWM.jpg" },
    { id: 3, title: "ブラックナイト", src: "/art/blacknight.jpg" },
    { id: 4, title: "アバターイラスト", src: "/art/avator.jpg" },
    { id: 5, title: "手紙", src: "/art/angel.jpg" },
  ];

  return (
    <>
      <Headeretc />
      <main className="page">
        <section className="section about">
          <div className="aboutText">
            <h1>ART</h1>

            <div className="artGrid">
              {artworks.map((art) => (
                <div
                  className="artCard"
                  key={art.id}
                  onClick={() => setSelected(art)}
                >
                  <img src={art.src} alt={art.title} />
                  <p>{art.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* モーダル */}
      {selected && (
        <div className="modalOverlay" onClick={() => setSelected(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="modalClose" onClick={() => setSelected(null)}>✕</button>
            <img src={selected.src} alt={selected.title} />
            <p>{selected.title}</p>
          </div>
        </div>
      )}
    </>
  );
}