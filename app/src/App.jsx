import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutJave from "./AboutJave";
import Blog from "./Blog";
import Art from "./Art";
import Contact from "./Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutJave />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/art" element={<Art />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}