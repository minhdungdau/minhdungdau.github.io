import { useEffect, useState } from "react";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { MotionConfig } from "motion/react";
import content from "./content.json";
import {
  Home,
  About,
  Solutions,
  Services,
  Products,
  Contact,
} from "./pages.jsx";
const paths = [
  "/",
  "/about",
  "/solutions",
  "/services",
  "/products",
  "/contact",
];
const labels = {
  vi: [
    "Trang chủ",
    "Giới thiệu",
    "Giải pháp",
    "Dịch vụ",
    "Sản phẩm & Công nghệ",
    "Liên hệ",
  ],
  en: [
    "Home",
    "About Us",
    "Solutions",
    "Services",
    "Products & Technology",
    "Contact",
  ],
};
export default function App() {
  const [lang, setLang] = useState("vi"),
    [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
    const seo = content["07_SEO_Dev_Notes"];
    const index = paths.indexOf(location.pathname);
    document.documentElement.lang = lang;
    document.title =
      index <= 0 ? seo[0][lang] : `${labels[lang][index]} | AVENO`;
    document.querySelector('meta[name="description"]').content = seo[1][lang];
    const timer = setTimeout(() => {
      if (location.hash) {
        const rawId = location.hash.slice(1);
        let id = rawId;
        try {
          id = decodeURIComponent(rawId);
        } catch {
          // A malformed external hash must not interrupt route rendering.
        }
        document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
      } else window.scrollTo({ top: 0, behavior: "instant" });
    }, 0);
    return () => clearTimeout(timer);
  }, [location, lang]);
  useEffect(() => {
    if (!open) return;
    document.querySelector("#main-navigation a")?.focus();
    const close = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-button")?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        {lang === "vi" ? "Đến nội dung chính" : "Skip to content"}
      </a>
      <header className="header">
        <div className="container header-inner">
          <Link className="logo" to="/" aria-label="AVENO Home">
            AVENO<span>INFRASTRUCTURE SOLUTIONS</span>
          </Link>
          <nav
            className={open ? "nav open" : "nav"}
            id="main-navigation"
            aria-label={lang === "vi" ? "Điều hướng chính" : "Main navigation"}
          >
            {paths.map((path, i) => (
              <NavLink key={path} to={path} end={i === 0}>
                {labels[lang][i]}
                {i === 5 && <ArrowUpRight size={15} />}
              </NavLink>
            ))}
          </nav>
          <div className="header-controls">
            <button
              className="language"
              onClick={() => setLang(lang === "vi" ? "en" : "vi")}
              aria-label={
                lang === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt"
              }
            >
              <span className={lang === "vi" ? "selected" : ""}>VI</span>
              <i>/</i>
              <span className={lang === "en" ? "selected" : ""}>EN</span>
            </button>
            <button
              id="menu-button"
              className="menu-button"
              aria-expanded={open}
              aria-controls="main-navigation"
              aria-label={
                open
                  ? lang === "vi"
                    ? "Đóng menu"
                    : "Close menu"
                  : lang === "vi"
                    ? "Mở menu"
                    : "Open menu"
              }
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <main id="main" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/solutions" element={<Solutions lang={lang} />} />
          <Route path="/services" element={<Services lang={lang} />} />
          <Route path="/products" element={<Products lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
          <Route
            path="*"
            element={
              <section className="container section">
                <h1>
                  {lang === "vi" ? "Không tìm thấy trang" : "Page not found"}
                </h1>
                <Link to="/">{labels[lang][0]}</Link>
              </section>
            }
          />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <Link className="logo" to="/">
                AVENO<span>INFRASTRUCTURE SOLUTIONS</span>
              </Link>
              <p>
                {lang === "vi"
                  ? "Xây dựng nền tảng cho trung tâm dữ liệu hiện đại."
                  : "Building the Foundation for Modern Data Centers."}
              </p>
            </div>
            <div>
              <strong>AVENO PTY LTD</strong>
              <p>
                9 Windsor Avenue, Springvale
                <br />
                VIC 3171, Australia
              </p>
            </div>
            <div className="footer-links">
              {paths.slice(1).map((p, i) => (
                <Link key={p} to={p}>
                  {labels[lang][i + 1]}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} AVENO PTY LTD</span>
            <p>{content["07_SEO_Dev_Notes"][2][lang]}</p>
          </div>
        </div>
      </footer>
    </MotionConfig>
  );
}
