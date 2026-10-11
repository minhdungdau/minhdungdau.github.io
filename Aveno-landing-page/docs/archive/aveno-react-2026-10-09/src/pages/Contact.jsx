import { useState } from "react";
import { ArrowUpRight, MapPin, UserRound, Download, Check } from "lucide-react";
import { Reveal, Eyebrow, PageHero } from "../components.jsx";
import { t } from "./shared.jsx";
import c from "../content.json";
export function Contact({ lang }) {
  const [draft, setDraft] = useState(null);
  function submit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setDraft(
      [
        "AVENO — " +
          t(lang, "Yêu cầu tư vấn hạ tầng", "Infrastructure enquiry"),
        ...["name", "company", "email", "phone", "requirement"].map(
          (key, i) =>
            `${(lang === "vi" ? ["Họ và tên", "Công ty", "Email", "Số điện thoại", "Nhu cầu"] : ["Name", "Company", "Email", "Phone", "Requirement"])[i]}: ${data.get(key)}`,
        ),
      ].join("\n\n"),
    );
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([draft], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "AVENO-infrastructure-enquiry.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={t(lang, "LIÊN HỆ", "CONTACT")}
        title={t(
          lang,
          "Cùng trao đổi về\nhạ tầng của bạn.",
          "Let’s talk about\nyour infrastructure.",
        )}
        description={t(
          lang,
          "Chia sẻ nhu cầu về Data Center hoặc hạ tầng doanh nghiệp.",
          "Tell us about your data center or enterprise infrastructure requirements.",
        )}
        image="network"
      />
      <section className="section container contact-grid">
        <Reveal className="contact-info">
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <h2>AVENO PTY LTD</h2>
          <p>
            {t(
              lang,
              "Trao đổi kiến trúc và phương án công nghệ phù hợp với nhu cầu của doanh nghiệp.",
              "Discuss architecture and technology options for your business requirements.",
            )}
          </p>
          <div className="contact-item">
            <MapPin />
            <div>
              <strong>{t(lang, "Địa chỉ", "Address")}</strong>
              <p>
                9 Windsor Avenue, Springvale
                <br />
                VIC 3171, Australia
              </p>
              <a
                className="text-link"
                href="https://www.google.com/maps/search/?api=1&query=9+Windsor+Avenue+Springvale+VIC+3171+Australia"
                target="_blank"
                rel="noreferrer"
              >
                {t(lang, "Xem bản đồ", "View map")}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="contact-item">
            <UserRound />
            <div>
              <strong>{t(lang, "Đại diện", "Representative")}</strong>
              <p>{c["06_Contact"][1][lang]}</p>
            </div>
          </div>
          <div className="contact-pending">
            {t(
              lang,
              "Email và số điện thoại đang được cập nhật.",
              "Email and phone details are being updated.",
            )}
          </div>
        </Reveal>
        <Reveal className="form-panel">
          <h3>
            {t(
              lang,
              "Nhu cầu hạ tầng của bạn",
              "Your infrastructure requirements",
            )}
          </h3>
          <p className="form-note" id="form-note">
            {t(
              lang,
              "Kênh gửi trực tuyến đang được hoàn thiện. Bạn có thể tạo và tải bản yêu cầu bên dưới; thông tin chưa được gửi tới AVENO.",
              "Online submission is being prepared. Create and download your enquiry below; your information will not be sent to AVENO.",
            )}
          </p>
          <form
            onSubmit={submit}
            onChange={() => setDraft(null)}
            aria-describedby="form-note"
          >
            <div className="form-row">
              <label>
                {t(lang, "Họ và tên", "Name")} *
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength="120"
                />
              </label>
              <label>
                {t(lang, "Công ty", "Company")}
                <input
                  name="company"
                  autoComplete="organization"
                  maxLength="160"
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email *
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength="254"
                />
              </label>
              <label>
                {t(lang, "Số điện thoại", "Phone")}
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength="40"
                />
              </label>
            </div>
            <label>
              {t(lang, "Nhu cầu", "Requirement")} *
              <textarea
                name="requirement"
                rows="5"
                required
                maxLength="5000"
                placeholder={t(
                  lang,
                  "Chia sẻ hiện trạng và nhu cầu của doanh nghiệp…",
                  "Tell us about your current environment and requirements…",
                )}
              />
            </label>
            <button className="button" type="submit">
              {t(lang, "Tạo bản yêu cầu", "Create enquiry draft")}
              <ArrowUpRight size={18} />
            </button>
            <p className="required-note">
              * {t(lang, "Thông tin bắt buộc", "Required fields")}
            </p>
          </form>
          <div aria-live="polite">
            {draft && (
              <div className="draft-result">
                <p>
                  <Check size={18} />
                  {t(
                    lang,
                    "Bản yêu cầu đã sẵn sàng. Chưa gửi tới AVENO.",
                    "Your draft is ready. It has not been sent to AVENO.",
                  )}
                </p>
                <button className="text-link" type="button" onClick={download}>
                  <Download size={17} />
                  {t(lang, "Tải bản yêu cầu (.txt)", "Download enquiry (.txt)")}
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}
