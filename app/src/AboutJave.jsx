import Header from "./components/Header";
import "./App.css";

export default function AboutJave() {
  return (
    <>
      <Header />
      <main className="page">
        <section className="section about">
          <div className="aboutText">
            <h1>WHO IS JAVE?</h1>
            <p>ここにジャヴの紹介を書く</p>
          </div>
        </section>
      </main>
    </>
  );
}