import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  Reveal,
  Photo,
  Eyebrow,
  PageHero,
  Layers,
  CTA,
} from "../components.jsx";
import { t, Process } from "./shared.jsx";
import c from "../content.json";
export function About({ lang }) {
  const rows = c["02_Company_Intro"],
    names =
      lang === "vi"
        ? [
            "Tổng quan công ty",
            "Chúng tôi làm gì",
            "Định hướng công nghệ",
            "Cách chúng tôi làm việc",
            "Giá trị AVENO hướng tới",
          ]
        : [
            "Company Overview",
            "What We Do",
            "Technology Approach",
            "How We Work",
            "Value Proposition",
          ];
  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={t(lang, "GIỚI THIỆU AVENO", "ABOUT AVENO")}
        title={t(
          lang,
          "Hạ tầng vững chắc.\nTầm nhìn dài hạn.",
          "Reliable infrastructure.\nA long-term perspective.",
        )}
        description="AVENO PTY LTD · Australia"
      />
      <section className="section container split">
        <Reveal>
          <Eyebrow>AVENO PTY LTD</Eyebrow>
          <h2>{names[0]}</h2>
          <p>{rows[0][lang]}</p>
        </Reveal>
        <Reveal className="about-photo">
          <Photo
            alt={t(
              lang,
              "Các tủ máy chủ — ảnh minh họa",
              "Server racks — illustrative photo",
            )}
          />
        </Reveal>
      </section>
      <section className="why-section">
        <div className="container">
          <Reveal className="section-heading">
            <div>
              <Eyebrow>01 / CAPABILITIES</Eyebrow>
              <h2>{names[1]}</h2>
            </div>
            <p>{rows[1][lang]}</p>
          </Reveal>
          <Layers lang={lang} />
        </div>
      </section>
      <section className="section container">
        <Reveal className="section-heading">
          <div>
            <Eyebrow>02 / TECHNOLOGY</Eyebrow>
            <h2>{names[2]}</h2>
          </div>
          <p>{rows[2][lang]}</p>
        </Reveal>
        <div className="brand-tiles">
          {["Arista", "Dell Technologies", "Check Point"].map((v, i) => (
            <Link
              key={v}
              to={"/products#" + ["arista", "dell", "checkpoint"][i]}
            >
              <span>0{i + 1}</span>
              <strong>{v}</strong>
              <ArrowUpRight />
            </Link>
          ))}
        </div>
      </section>
      <section className="services-preview">
        <div className="section container">
          <Reveal className="section-heading">
            <div>
              <Eyebrow>03 / APPROACH</Eyebrow>
              <h2>{names[3]}</h2>
            </div>
            <p>{rows[3][lang]}</p>
          </Reveal>
          <Process lang={lang} />
        </div>
      </section>
      <section className="section container value-block">
        <Reveal>
          <Eyebrow>04 / VALUE</Eyebrow>
          <h2>{names[4]}</h2>
          <p>{rows[4][lang]}</p>
        </Reveal>
      </section>
      <CTA lang={lang} />
    </>
  );
}
