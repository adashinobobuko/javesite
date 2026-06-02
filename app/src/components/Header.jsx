import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="menu" className="nav">
      <nav className="navInner">
        <Link to="/about" className="navLink">ABOUT JAVE</Link>
        <Link to="/blog" className="navLink">BLOG</Link>
        <Link to="/art" className="navLink">ART</Link>
        <Link to="/contact" className="navLink">CONTACT</Link>
      </nav>
    </header>
  );
}