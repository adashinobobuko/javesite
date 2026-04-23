import Headeretc from "./components/Headeretc";
import "./App.css";

export default function AboutJave() {
  return (
    <>
      <Headeretc />
      <main className="page">
        <section className="section about">

          <div className="aboutText">
            <h1>WHO IS JAVE?</h1>
            <h2>ジャヴ（Jave）</h2>

            <img
              src="/javehesotenhaikeinashi.png"
              alt="ジャヴの立ち絵"
              className="javeImg"
            />

            <p>
              ジャヴは小さくて愛らしい精霊です。通称「彗星の子」。
              陽気でフレンドリーな性格ですが、少しやんちゃでいたずら好きな一面もあります。
              そして、とても甘えん坊です。
            </p>

            <p>
              ジャヴは「ちゅるる」「きゅう」などのかわいらしい声で鳴きます。
              また、テレパシーで人と会話することもできます。
              とてもやさしく、人にそっと寄り添ってくれる存在です。
            </p>

            <p>
              ジャヴの正体は、「星の海」で生まれた竜神の赤ちゃんです。
              広い意味では精霊にあたります。
              体の輪郭は少し曖昧で、不定形なところがあり、やや半透明です。
              空に浮かんだり、姿を消したり、泡を吹いたり、竜らしく火を吹いたりもできます。
              赤ちゃんなので、これからどのように成長していくのかは未知数です……。
              人間よりもずっと長い寿命を持つため、長い年月を生きていても、まだ赤ちゃんなんです。
            </p>
          </div>
        </section>
      </main>
    </>
  );
}