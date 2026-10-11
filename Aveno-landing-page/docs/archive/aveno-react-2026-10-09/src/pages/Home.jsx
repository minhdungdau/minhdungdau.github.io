import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  Reveal,
  Photo,
  Button,
  Eyebrow,
  Layers,
  CTA,
  icons,
  photos,
  ids,
  solutionNames,
} from "../components.jsx";
import { t, Process } from "./shared.jsx";
import c from "../content.json";
export function Home({ lang }) {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <Eyebrow>DATA CENTER & ENTERPRISE INFRASTRUCTURE SOLUTIONS</Eyebrow>
            <h1>
              {t(
                lang,
                <>
                  Xây dựng nền tảng
                  <br />
                  cho trung tâm dữ liệu <em>hiện đại.</em>
                </>,
                <>
                  Building the Foundation for <em>Modern Data Centers.</em>
                </>,
              )}
            </h1>
            <p>
              {t(
                lang,
                "Mạng hiệu năng cao. Máy chủ và lưu trữ tin cậy. An ninh mạng toàn diện.",
                "High-performance networking. Reliable compute and storage. Advanced cybersecurity.",
              )}
            </p>
            <div className="actions">
              <Button to="/solutions">
                {t(lang, "Khám phá giải pháp", "Explore our solutions")}
              </Button>
              <Button to="/contact" secondary>
                {t(lang, "Trao đổi với AVENO", "Contact us")}
              </Button>
            </div>
            <div className="hero-bottom">
              <span className="status-dot" /> NETWORK · COMPUTE · STORAGE ·
              SECURITY
            </div>
          </Reveal>
          <div className="hero-visual">
            <Photo
              eager
              alt={t(
                lang,
                "Các tủ máy chủ trong trung tâm dữ liệu — ảnh minh họa",
                "Server racks in a data center — illustrative photo",
              )}
            />
            <div className="image-label">
              <span>CONNECTED INFRASTRUCTURE</span>
              <strong>
                {t(
                  lang,
                  "Một nền tảng. Bốn lớp hạ tầng.",
                  "One foundation. Four infrastructure layers.",
                )}
              </strong>
            </div>
            <div className="visual-coordinate">AV / INFRASTRUCTURE</div>
          </div>
        </div>
      </section>
      <div className="technology-strip container">
        <span>{t(lang, "Danh mục công nghệ", "Technology portfolio")}</span>
        <Link to="/products#arista">Arista</Link>
        <Link to="/products#dell">Dell Technologies</Link>
        <Link to="/products#checkpoint">Check Point</Link>
        <Link
          className="strip-more"
          to="/products"
          aria-label={t(lang, "Khám phá công nghệ", "Explore technologies")}
        >
          <ArrowUpRight />
        </Link>
      </div>
      <section className="section container">
        <Reveal className="section-heading">
          <div>
            <Eyebrow>{t(lang, "GIẢI PHÁP CỐT LÕI", "CORE SOLUTIONS")}</Eyebrow>
            <h2>
              {t(
                lang,
                <>
                  Hạ tầng đồng bộ.
                  <br />
                  Sẵn sàng cho tăng trưởng.
                </>,
                <>
                  Connected infrastructure.
                  <br />
                  Ready for growth.
                </>,
              )}
            </h2>
          </div>
          <p>
            {t(
              lang,
              "AVENO cung cấp các giải pháp hạ tầng cho doanh nghiệp và trung tâm dữ liệu hiện đại, bao gồm mạng, máy chủ, lưu trữ và an ninh mạng.",
              "AVENO provides infrastructure solutions for modern enterprises and data centers, covering networking, compute, storage and cybersecurity.",
            )}
          </p>
        </Reveal>
        <div className="solution-grid">
          {icons.map((Icon, i) => (
            <Reveal key={ids[i]} delay={i * 0.07}>
              <Link className="solution-card" to={`/solutions#${ids[i]}`}>
                <div className="card-photo">
                  <Photo
                    name={photos[i]}
                    alt={
                      t(lang, "Hình ảnh minh họa: ", "Illustrative photo: ") +
                      solutionNames[lang][i]
                    }
                  />
                  <span className="card-number">0{i + 1}</span>
                </div>
                <div className="card-body">
                  <Icon size={26} />
                  <h3>{solutionNames[lang][i]}</h3>
                  <p>
                    {
                      (lang === "vi"
                        ? [
                            "Kết nối hiệu năng cao, khả năng mở rộng và vận hành tập trung.",
                            "Nền tảng cho ứng dụng doanh nghiệp và xử lý dữ liệu.",
                            "Dung lượng, hiệu năng và tính sẵn sàng cho dữ liệu trọng yếu.",
                            "Bảo vệ mạng, môi trường Cloud và thiết bị đầu cuối.",
                          ]
                        : [
                            "High-performance connectivity with scalability and centralized operations.",
                            "A foundation for business applications and data-intensive workloads.",
                            "Capacity, performance and availability for critical data.",
                            "Protection for networks, cloud environments and endpoints.",
                          ])[i]
                    }
                  </p>
                  <span className="text-link">
                    {t(lang, "Khám phá giải pháp", "Explore solution")}
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="why-section">
        <div className="container">
          <Reveal className="section-heading">
            <div>
              <Eyebrow>WHY AVENO</Eyebrow>
              <h2>
                {t(
                  lang,
                  <>
                    Kết nối từng lớp.
                    <br />
                    Vận hành như một nền tảng.
                  </>,
                  <>
                    Connected layers.
                    <br />
                    One consistent foundation.
                  </>,
                )}
              </h2>
            </div>
            <p>{c["01_Home"][3][lang]}</p>
          </Reveal>
          <Reveal>
            <Layers lang={lang} />
          </Reveal>
          <Link className="text-link" to="/about">
            {t(
              lang,
              "Tìm hiểu cách AVENO tiếp cận hạ tầng",
              "Discover our infrastructure approach",
            )}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="section container split">
        <Reveal className="about-photo">
          <Photo
            alt={t(
              lang,
              "Hình ảnh minh họa hạ tầng trung tâm dữ liệu",
              "Illustrative data center infrastructure",
            )}
          />
          <span className="photo-note">
            DATA CENTER & ENTERPRISE INFRASTRUCTURE
          </span>
        </Reveal>
        <Reveal className="split-copy">
          <Eyebrow>{t(lang, "VỀ AVENO", "ABOUT AVENO")}</Eyebrow>
          <h2>
            {t(
              lang,
              "Nền tảng công nghệ cho doanh nghiệp hiện đại.",
              "A technology foundation for modern enterprises.",
            )}
          </h2>
          <p>{c["02_Company_Intro"][0][lang]}</p>
          <Button to="/about" secondary>
            {t(lang, "Giới thiệu công ty", "About our company")}
          </Button>
        </Reveal>
      </section>
      <section className="services-preview">
        <div className="section container">
          <Reveal className="section-heading">
            <div>
              <Eyebrow>{t(lang, "DỊCH VỤ", "OUR SERVICES")}</Eyebrow>
              <h2>
                {t(
                  lang,
                  "Từ khảo sát đến vận hành.",
                  "From assessment to operations.",
                )}
              </h2>
            </div>
            <Button to="/services" secondary>
              {t(lang, "Xem tất cả dịch vụ", "Explore all services")}
            </Button>
          </Reveal>
          <Process lang={lang} />
        </div>
      </section>
      <CTA lang={lang} />
    </>
  );
}
