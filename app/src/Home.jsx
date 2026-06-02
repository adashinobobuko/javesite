import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Opening from "./Opening";

export default function Home() {
  const [isHeroActive, setIsHeroActive] = useState(false);
  const [showOpening, setShowOpening] = useState(false);
  const [checked, setChecked] = useState(false);
  const scrollTo = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
  const hasSeenOpening = localStorage.getItem("hasSeenOpening");

  if (!hasSeenOpening) {
    setShowOpening(true);

    setTimeout(() => {
      setShowOpening(false);
      localStorage.setItem("hasSeenOpening", "true");
    }, 3000);
  }

  setChecked(true);
  }, []);

  if (!checked) return null;

  if (showOpening) {
    return <Opening />;
  }

  return (
    <>
      <Header />

      <main className="page">
        <div id="top"></div>

        {/* TOP */}
        <section id="hero" className="hero">
          <img
            src="/aseplitejavesitagaki_togo2.gif"
            alt="Jave's House ロゴ"
            className="logo"
          />

          <div
            className="topJaveWrap"
            onMouseEnter={() => setIsHeroActive(true)}
            onMouseLeave={() => setIsHeroActive(false)}
            onClick={() => setIsHeroActive((v) => !v)} // スマホ用
            role="button"
            tabIndex={0}
            aria-label="ジャヴをにこにこさせる"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setIsHeroActive((v) => !v);
            }}
          >
            <img
              src={isHeroActive ? "/top_hover.png" : "/top.png"}
              alt="ジャヴ"
              className="top-jave"
            />
          </div>

          <p className="welcome">Welcome to Jave&apos;s House!</p>

          {/* 左下の矢印：押すと紹介へ */}
          <button
            type="button"
            className="downArrow"
            onClick={() => scrollTo("x")}
            aria-label="紹介文へスクロール"
          >
            <img src="/yazirusi.gif" alt="下矢印" />
          </button>
        </section>

        <br />
        <br />

        {/* ABOUT（紹介文） */}
        <section id="about" className="section about">
          <div className="aboutText">
            <br />
            <p>あだしの ききょうと申します。</p>
            <p>
              オリジナルキャラクター「精霊ジャヴ（Jave）」と一緒に活動しているマルチクリエイターです。
              トップ画像のイラストも私が描いたジャヴになります。
            </p>
            <ul>
              <li>イラスト制作（イラスト、ドット絵、漫画制作に対応可能）</li>
              <li>Webアプリ制作</li>
              <li>Webデザイン・コーディング</li>
              <li>Webライティング</li>
            </ul>
            <p>を承っております。</p>
            <p className="note">※制作にはAIアシスタントを使用しております。ご了承ください。</p>

            <div className="spacer" />

            <p>My name is Kikyo Adashino.</p>
            <p>
              I am a multidisciplinary creator working around my original character, the spirit Jave.
              The illustration shown at the top also features Jave.
            </p>
            <p>Services I offer:</p>
            <ul>
              <li>Illustration production (including illustrations, pixel art, and comics)</li>
              <li>Web application development</li>
              <li>Web design and coding</li>
              <li>Web writing</li>
            </ul>
            <p className="note">Please note that I use AI assistants in my creative process.</p>
          </div>

          {/* 右下のジャヴ：押すとトップへ */}
          <button
            type="button"
            className="backToTopJave"
            onClick={() => scrollTo("top")}
            aria-label="トップへ戻る"
            title="トップへ"
          >
            <img src="/Jave&forest_dotjave2blightmove.gif" alt="jave" />
          </button>
        </section>

        <section id="x">X（準備中）</section>
        <section id="instagram">Instagram（準備中）</section>
        <section id="rss">RSS（準備中）</section>
      </main>

      <footer className="footer">
        <p>© 2025 Adashino Kikyo. All rights reserved.</p>
      </footer>
    </>
  );
}