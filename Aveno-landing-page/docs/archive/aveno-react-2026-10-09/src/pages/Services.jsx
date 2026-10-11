import { Reveal, Eyebrow, PageHero, CTA } from "../components.jsx";
import { t, Process, serviceNames, serviceIcons } from "./shared.jsx";
import c from "../content.json";
export function Services({ lang }) {
  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={t(lang, "DỊCH VỤ", "SERVICES")}
        title={t(
          lang,
          "Đồng hành trong từng\ngiai đoạn hạ tầng.",
          "Support at every stage\nof your infrastructure.",
        )}
        description={t(
          lang,
          "Từ tư vấn, cung ứng, triển khai đến hỗ trợ sau bán hàng.",
          "From assessment and supply to deployment and ongoing technical assistance.",
        )}
        image="network"
      />
      <section className="section container">
        <Reveal className="section-heading">
          <div>
            <Eyebrow>
              {t(lang, "CÁCH CHÚNG TÔI LÀM VIỆC", "HOW WE WORK")}
            </Eyebrow>
            <h2>
              {t(
                lang,
                "Một quy trình.\nXuyên suốt dự án.",
                "One approach.\nAcross the project lifecycle.",
              )}
            </h2>
          </div>
          <p>{c["02_Company_Intro"][3][lang]}</p>
        </Reveal>
        <Process lang={lang} />
        <div className="service-grid">
          {c["04_Services"].map((r, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal
                className="service-card"
                key={r.key}
                delay={(i % 3) * 0.06}
              >
                <div className="service-top">
                  <Icon size={27} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{serviceNames[lang][i]}</h3>
                <p>{r[lang]}</p>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CTA lang={lang} />
    </>
  );
}
