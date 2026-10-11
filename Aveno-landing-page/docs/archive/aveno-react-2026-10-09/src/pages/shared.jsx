import {
  ArrowRight,
  ClipboardCheck,
  Layers as LayersIcon,
  Package,
  Settings,
  ShieldCheck,
  Headset,
} from "lucide-react";
import { Reveal } from "../components.jsx";
export const t = (lang, vi, en) => (lang === "vi" ? vi : en);
export const serviceNames = {
  vi: [
    "Khảo sát hạ tầng",
    "Thiết kế kiến trúc",
    "Cung ứng thiết bị & bản quyền",
    "Lắp đặt & tích hợp",
    "Kiểm thử & nghiệm thu",
    "Bảo trì & hỗ trợ kỹ thuật",
  ],
  en: [
    "Infrastructure Assessment",
    "Architecture Design",
    "Equipment & License Supply",
    "Installation & Integration",
    "Testing & Commissioning",
    "Maintenance & Technical Support",
  ],
};
export const serviceIcons = [
  ClipboardCheck,
  LayersIcon,
  Package,
  Settings,
  ShieldCheck,
  Headset,
];
export function Process({ lang }) {
  const labels =
    lang === "vi"
      ? ["Khảo sát", "Thiết kế", "Cung ứng", "Triển khai", "Hỗ trợ"]
      : ["Assess", "Architect", "Supply", "Deploy", "Support"];
  return (
    <div className="process">
      {labels.map((l, i) => (
        <Reveal key={l} delay={i * 0.06}>
          <span>0{i + 1}</span>
          <h3>{l}</h3>
          {i < 4 && <ArrowRight className="process-arrow" size={22} />}
        </Reveal>
      ))}
    </div>
  );
}
