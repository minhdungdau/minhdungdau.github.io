import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal, Photo, Eyebrow, PageHero, CTA } from "../components.jsx";
import { t } from "./shared.jsx";
import c from "../content.json";
export function Products({ lang }) {
  const groups = [
    ["Data Center Switching", "Routing", "EOS & CloudVision"],
    ["Compute / PowerEdge", "Enterprise Storage", "Networking / PowerSwitch"],
    ["Network Security", "Cloud Security", "Endpoint Security"],
  ];
  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={t(lang, "SẢN PHẨM & CÔNG NGHỆ", "PRODUCTS & TECHNOLOGY")}
        title={t(
          lang,
          "Công nghệ phù hợp.\nNền tảng nhất quán.",
          "The right technologies.\nA consistent foundation.",
        )}
        description={t(
          lang,
          "Danh mục tập trung vào Arista, Dell Technologies và Check Point.",
          "A technology portfolio focused on Arista, Dell Technologies and Check Point.",
        )}
        image="compute"
      />
      <section className="container details">
        {c["05_Products_Tech"].map((r, i) => (
          <section
            className="product-section"
            key={r.key}
            id={["arista", "dell", "checkpoint"][i]}
          >
            <Reveal className="product-heading">
              <Eyebrow>
                0{i + 1} /{" "}
                {["NETWORKING", "COMPUTE & STORAGE", "CYBERSECURITY"][i]}
              </Eyebrow>
              <h2>{r.key}</h2>
              <p>{r[lang]}</p>
              <Link
                className="text-link"
                to={"/solutions#" + ["network", "compute", "security"][i]}
              >
                {t(
                  lang,
                  "Khám phá giải pháp liên quan",
                  "Explore related solutions",
                )}
                <ArrowUpRight size={17} />
              </Link>
            </Reveal>
            <Reveal className="product-panel">
              <Photo
                name={["network", "data-center", "security"][i]}
                alt={t(
                  lang,
                  "Hình ảnh minh họa nhóm công nghệ",
                  "Illustrative technology category photo",
                )}
              />
              <div>
                {groups[i].map((g, j) => (
                  <div className="product-group" key={g}>
                    <span>0{j + 1}</span>
                    <h3>{g}</h3>
                    <Check size={17} />
                  </div>
                ))}
              </div>
            </Reveal>
          </section>
        ))}
      </section>
      <CTA lang={lang} />
    </>
  );
}
