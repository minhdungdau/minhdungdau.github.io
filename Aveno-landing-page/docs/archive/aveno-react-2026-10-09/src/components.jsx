import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Network,
  Server,
  Database,
  ShieldCheck,
} from "lucide-react";
export const icons = [Network, Server, Database, ShieldCheck];
export const photos = ["network", "compute", "storage", "security"];
export const ids = ["network", "compute", "storage", "security"];
export const solutionNames = {
  vi: [
    "Mạng trung tâm dữ liệu",
    "Máy chủ & Compute",
    "Lưu trữ doanh nghiệp",
    "An ninh mạng",
  ],
  en: [
    "Data Center Networking",
    "Compute & Servers",
    "Enterprise Storage",
    "Cybersecurity",
  ],
};
export function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}
export function Photo({
  name = "data-center",
  alt = "",
  className = "",
  eager = false,
}) {
  return (
    <img
      className={className}
      src={`/images/${name}.webp`}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      width="1200"
      height="800"
    />
  );
}
export function Button({ to, children, secondary = false }) {
  return (
    <Link className={`button ${secondary ? "secondary" : ""}`} to={to}>
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}
export function PageHero({
  eyebrow,
  title,
  description,
  image = "data-center",
  lang,
}) {
  return (
    <section className="page-hero">
      <Photo
        name={image}
        eager
        alt={
          lang === "vi"
            ? "Hình ảnh minh họa hạ tầng doanh nghiệp"
            : "Illustrative enterprise infrastructure"
        }
      />
      <div className="container">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
export function Layers({ lang }) {
  return (
    <div className="layers">
      {icons.map((Icon, i) => (
        <div key={ids[i]}>
          <Icon size={28} />
          <span className="layer-number">0{i + 1}</span>
          <strong>{["Network", "Compute", "Storage", "Security"][i]}</strong>
          <span>{solutionNames[lang][i]}</span>
        </div>
      ))}
    </div>
  );
}
export function CTA({ lang }) {
  return (
    <section className="cta">
      <div className="container">
        <Reveal className="cta-inner">
          <div>
            <Eyebrow>
              {lang === "vi"
                ? "BẮT ĐẦU TỪ NHU CẦU CỦA BẠN"
                : "START WITH YOUR REQUIREMENTS"}
            </Eyebrow>
            <h2>
              {lang === "vi"
                ? "Cùng xây dựng nền tảng\ncho bước tiến tiếp theo."
                : "Build the foundation\nfor your next step."}
            </h2>
          </div>
          <Button to="/contact">
            {lang === "vi" ? "Trao đổi với AVENO" : "Talk to AVENO"}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
