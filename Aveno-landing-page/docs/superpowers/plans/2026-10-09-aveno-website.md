# Kế hoạch triển khai website AVENO

> **Dành cho các agent:** Sử dụng Superpowers `subagent-driven-development` hoặc `executing-plans` để thực hiện theo từng nhiệm vụ. Agent lập kế hoạch, agent thực thi và agent kiểm tra đã được người dùng yêu cầu qua AGENTS.md. Không commit hoặc publish khi chưa có xác nhận riêng.

**Mục tiêu:** Xây dựng website AVENO sáu trang đúng Excel và phác thảo đã duyệt, có nhiều ảnh hạ tầng và hiệu ứng tinh tế.

**Kiến trúc:** React chạy trong dự án tĩnh Vite tại `website/`, sáu route React Router cùng header/footer. Dữ liệu hai ngôn ngữ tập trung, component trang chỉ trình bày nội dung; ảnh lưu local nếu nguồn cho phép. Motion được giới hạn ở hiệu ứng xuất hiện và tương tác, có reduced motion.

**Công nghệ:** React, Vite, React Router, Lucide React, Motion, CSS responsive.

## Cấu trúc dự kiến

- `website/package.json`, `website/index.html`, `website/vite.config.js`: cấu hình và HTML entry.
- `website/src/main.jsx`, `website/src/App.jsx`: khởi tạo, route và state ngôn ngữ.
- `website/src/content.json`: dữ liệu VI/EN lấy từ Excel, menu, trang và footer.
- `website/src/App.jsx`: header, menu mobile, footer, skip link và metadata.
- `website/src/components.jsx`: wrapper hiệu ứng, ảnh và nút dùng chung, có reduced motion.
- `website/src/pages/Home.jsx`, `About.jsx`, `Solutions.jsx`, `Services.jsx`, `Products.jsx`, `Contact.jsx`: sáu trang.
- `website/src/styles.css`: tokens màu, layout và media queries.
- `website/public/images/`, `website/public/fonts/`: năm ảnh WebP và font Be Vietnam Pro local; nguồn trong `docs/qa/nguon-tai-nguyen.md`.
- `website/README.md`: lệnh chạy, giới hạn form và cấu hình host.

## Nhiệm vụ 1: Thiết lập dự án

- [x] Kiểm tra thư mục hiện tại, bảo toàn `docs` và mockup.
- [x] Tạo `website/`, khởi tạo React Vite, cài react-router-dom, lucide-react, motion.
- [x] Ghi scripts `dev`, `build`, `preview`; npm install tạo lockfile.
- [x] Chạy `npm run build` trong `website`; kỳ vọng thư mục `dist` và exit code 0.

## Nhiệm vụ 2: Dữ liệu và tài sản

- [x] Đọc Excel bằng openpyxl UTF-8; lấy nguyên văn hai cột ngôn ngữ, coi chuỗi `\\n` là xuống dòng hiển thị.
- [x] Tạo `src/content.json` với `vi` và `en`, đủ các mục trong đặc tả. Tagline VI đúng “Xây dựng nền tảng cho trung tâm dữ liệu hiện đại.”.
- [x] Thu thập ít nhất ảnh hero rack, About hạ tầng, Solutions mạng/server, Services triển khai; xác nhận nguồn và quyền sử dụng, ghi nguồn README.
- [x] Không dùng ảnh để tuyên bố đó là cơ sở hoặc đội ngũ AVENO; không tạo logo đối tác hay số liệu thành tích.

## Nhiệm vụ 3: Layout và chuyển trang

- [x] Implement `/`, `/about`, `/solutions`, `/services`, `/products`, `/contact` qua React Router.
- [x] Header có sáu link, mục “Sản phẩm & Công nghệ” đầy đủ; CTA liên hệ, nút VI/EN, menu mobile có aria-expanded.
- [x] Layout có skip link, footer địa chỉ và disclaimer Excel; focus visible.
- [x] Đổi route về đầu trang, đóng menu mobile; xử lý route không hợp lệ bằng trang rõ ràng hoặc quay về Home.
- [x] Cập nhật `document.documentElement.lang`, title và description theo ngôn ngữ; không tự thêm claim SEO.

## Nhiệm vụ 4: Sáu trang

- [x] Home: hero ảnh lớn, đúng tagline và định vị, CTA, bốn card giải pháp, technology focus, Why AVENO, CTA cuối.
- [x] About: đủ năm mục Company Intro, ảnh hạ tầng, flow năm bước.
- [x] Solutions: đủ bốn mô tả và lợi ích khách hàng, anchor riêng từng nhóm, ảnh minh họa kỹ thuật.
- [x] Services: đủ sáu dịch vụ, process dễ đọc, không giá hoặc SLA tự đặt.
- [x] Products: ba hãng và ba nhóm công nghệ mỗi hãng; CTA đến solution phù hợp hoặc official source.
- [x] Contact: tên công ty, đại diện, địa chỉ chính xác; phone/email chưa có thì không tạo giá trị; form năm trường.

## Nhiệm vụ 5: Form và hiệu ứng

- [x] Form có labels, email type, autocomplete; required tên/email/nhu cầu, validate bằng HTML và trạng thái aria-live.
- [x] Khi chưa có backend, thông báo rõ việc gửi trực tuyến chưa được cấu hình trước submit; submit không giả vờ thành công.
- [x] Reveal dùng Motion, duration khoảng 0.45–0.7 giây, khoảng dịch chuyển nhỏ; không ẩn nội dung lâu.
- [x] Hover card/ảnh dùng transform và transition nhẹ; reduced-motion tắt dịch chuyển, stagger và cuộn hoạt hình.
- [x] Ảnh ngoài hero dùng lazy loading, kích thước hoặc aspect ratio để hạn chế layout shift.

## Nhiệm vụ 6: Kiểm tra và bàn giao

- [x] Chạy `npm run build`; bắt buộc exit code 0, sửa lỗi trước bàn giao.
- [x] Chạy preview/dev local và kiểm tra desktop khoảng 1440px, mobile khoảng 390px; chụp ít nhất Home, Contact và menu mobile.
- [x] Kiểm tra sáu route, reload đường dẫn con, VI/EN, toàn bộ CTA, link anchor và liên kết hãng.
- [x] Kiểm tra form thiếu dữ liệu, email sai, form hợp lệ không báo gửi thành công khi chưa có endpoint.
- [x] Kiểm tra bàn phím menu, focus, heading, alt ảnh, reduced motion, không cuộn ngang và lỗi console.
- [x] Agent kiểm tra đối chiếu từng sheet, ghi lỗi thực tế cho agent thực thi sửa; chạy lại phần kiểm tra bị ảnh hưởng.
- [x] README tiếng Việt ghi `npm install`, `npm run dev -- --host 127.0.0.1`, `npm run build`, `npm run preview`, yêu cầu SPA fallback khi host; ghi chưa có email/phone/backend và không commit/publish.
- [ ] Bàn giao link local đang chạy, trạng thái build và những thông tin cần bổ sung để form hoạt động thật (root thực hiện khi trả kết quả cuối).

## Tự rà soát

Đặc tả Overview được phủ bởi nhiệm vụ 2–4; ảnh và hiệu ứng bởi 2 và 5; SEO, thương hiệu và liên hệ bởi 3–5; kiểm tra và hạn chế vận hành bởi 6. Chưa có domain, phone/email, endpoint gửi form hoặc chứng nhận partner trong nguồn; những điểm này không ngăn tạo website xem trước nhưng phải ghi rõ khi bàn giao.

## Kết quả thực hiện — 09/10/2026

Các nhiệm vụ triển khai và kiểm tra đã hoàn thành. Danh sách bên trên phản ánh kết quả; cấu trúc cuối dùng `content.json`, `components.jsx`, `pages.jsx` xuất lại sáu component trang và `pages/shared.jsx` chứa helper. Header/footer nằm trong `App.jsx`.

- Theo kết quả root cung cấp, lần `npm run build` mới nhất kết thúc với exit code 0.
- `docs/qa/browser-report.json` ghi 12 lượt xem desktop/mobile, kiểm tra thêm bề rộng 320px, validation, xuất bản nháp, menu và hash; `errors` rỗng.
- `docs/qa/interaction-report.json` có `errors` rỗng; xác nhận hiệu ứng thường kết thúc, Enter/Escape menu, hash sai định dạng, sáu trang EN, tablet 768px và EN mobile 390px.
- Reviewer đặc tả xác nhận SPEC PASS; reviewer chất lượng xác nhận QUALITY PASS sau khi sửa hai vấn đề, theo báo cáo root.
- Biểu mẫu tạo bản yêu cầu tại trình duyệt và xuất tệp văn bản khi người dùng chọn; không gửi đến máy chủ, không lưu localStorage và không báo đã gửi.
- README ghi cách chạy, History API fallback, tài nguyên local và giới hạn metadata phía client. Nguồn ảnh/font có trong `docs/qa/nguon-tai-nguyen.md`.

Giới hạn thật: Excel chưa có điện thoại hoặc email; chưa có endpoint tiếp nhận biểu mẫu và domain triển khai. Không có chứng nhận partner trong nguồn nên không có tuyên bố tư cách đối tác. Chưa commit hoặc publish. Phần bàn giao link local cho người dùng do root thực hiện sau bước này.

