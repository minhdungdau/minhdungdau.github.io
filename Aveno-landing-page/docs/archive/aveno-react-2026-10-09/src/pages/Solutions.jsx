import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import {
  Reveal,
  Photo,
  Eyebrow,
  PageHero,
  CTA,
  icons,
  photos,
  ids,
  solutionNames,
} from "../components.jsx";
import { t } from "./shared.jsx";
import c from "../content.json";
export function Solutions({ lang }) {
  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={t(lang, "GIẢI PHÁP", "SOLUTIONS")}
        title={t(
          lang,
          "Bốn lớp hạ tầng.\nMột nền tảng đồng bộ.",
          "Four infrastructure layers.\nOne connected foundation.",
        )}
        description={t(
          lang,
          "Mạng, máy chủ, lưu trữ và an ninh mạng cho doanh nghiệp và trung tâm dữ liệu.",
          "Networking, compute, storage and cybersecurity for enterprises and data centers.",
        )}
      />
      <nav
        className="anchor-nav container"
        aria-label={t(lang, "Các nhóm giải pháp", "Solution categories")}
      >
        {ids.map((id, i) => (
          <Link key={id} to={"#" + id}>
            {solutionNames[lang][i]}
            <ArrowUpRight size={15} />
          </Link>
        ))}
      </nav>
      <div className="container details">
        {c["03_Solutions"].map((r, i) => {
          const Icon = icons[i];
          return (
            <section
              className={"detail-section " + (i % 2 ? "reverse" : "")}
              id={ids[i]}
              key={r.key}
            >
              <Reveal className="detail-photo">
                <Photo
                  name={photos[i]}
                  alt={
                    t(lang, "Ảnh minh họa: ", "Illustrative photo: ") +
                    solutionNames[lang][i]
                  }
                />
                <div className="detail-image-tag">
                  <Icon size={24} />
                  {["NETWORK", "COMPUTE", "STORAGE", "SECURITY"][i]}
                </div>
              </Reveal>
              <Reveal>
                <Eyebrow>
                  0{i + 1} / {["NETWORK", "COMPUTE", "STORAGE", "SECURITY"][i]}
                </Eyebrow>
                <h2>{solutionNames[lang][i]}</h2>
                <p>{r[lang]}</p>
                <ul className="benefits">
                  {(lang === "vi"
                    ? [
                        [
                          "Khả năng mở rộng hệ thống mạng",
                          "Giám sát và quản trị tập trung",
                          "Đơn giản hóa vận hành",
                        ],
                        [
                          "Phù hợp yêu cầu ứng dụng",
                          "Cơ chế dự phòng và mở rộng",
                          "Quản trị vòng đời hệ thống",
                        ],
                        [
                          "Dung lượng và hiệu năng",
                          "Tính sẵn sàng của dữ liệu",
                          "Khả năng mở rộng trong tương lai",
                        ],
                        [
                          "Bảo vệ Network, Cloud và Endpoint",
                          "Giảm thiểu rủi ro",
                          "Truy cập an toàn",
                        ],
                      ]
                    : [
                        [
                          "Scalable network environments",
                          "Centralized visibility and management",
                          "Simplified operations",
                        ],
                        [
                          "Workload-appropriate platforms",
                          "Redundancy and expansion",
                          "Lifecycle management",
                        ],
                        [
                          "Capacity and performance",
                          "Data availability",
                          "Future expansion",
                        ],
                        [
                          "Network, cloud and endpoint protection",
                          "Risk reduction",
                          "Secure access",
                        ],
                      ])[i].map((x) => (
                    <li key={x}>
                      <Check size={17} />
                      {x}
                    </li>
                  ))}
                </ul>
                <Link className="text-link" to="/contact">
                  {t(
                    lang,
                    "Trao đổi nhu cầu của bạn",
                    "Discuss your requirements",
                  )}
                  <ArrowUpRight size={18} />
                </Link>
              </Reveal>
            </section>
          );
        })}
      </div>
      <CTA lang={lang} />
    </>
  );
}
