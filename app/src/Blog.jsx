import Headeretc from "./components/Headeretc";
import "./App.css";

export default function Blog() {
  return (
    <>
      <Headeretc />
      <main className="page">
        <section className="section about">
          <div className="aboutText">
            <h1>BLOG</h1>
            <p>noteを予定しています。</p>
          </div>
        </section>
      </main>
    </>
  );
}