import { Link } from "react-router-dom";

export default function Header() {
  return (
      <header id="menu" className="nav">
        <a href="/">
          <img
            src="/aseplitejavesitagaki_togo2.gif"
            alt="Jave's House のロゴアニメーション"
            className="logo"
          />
        </a>

      <nav className="navInner">
        <Link to="/about" className="navLink">WHO IS JAVE?</Link>
        <Link to="/blog" className="navLink">BLOG</Link>
        <Link to="/art" className="navLink">ART</Link>
        <Link to="/contact" className="navLink">CONTACT</Link>
      </nav>
    </header>
  );
}