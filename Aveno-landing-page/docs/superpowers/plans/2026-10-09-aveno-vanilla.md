# Kế hoạch chuyển AVENO sang HTML, CSS và JavaScript thuần

Ngày: 09/10/2026. Người dùng yêu cầu chuyển website đã triển khai sang HTML và JavaScript thuần, không dùng React. Yêu cầu này cho phép thực hiện thay đổi công nghệ; tiếp tục giữ thiết kế đã duyệt, hình ảnh và nội dung Excel. Không commit hoặc xuất bản.

## Nguồn yêu cầu và phạm vi

- `docs/AVENO_Website_Content_v2_Simplified.xlsx` là yêu cầu chính thức, ưu tiên `00_Overview` và đối chiếu toàn bộ các sheet nội dung, SEO.
- `docs/mockups/aveno-sketch.html` và giao diện đã duyệt là cơ sở bố cục. Giữ màu navy, đen, trắng, tím và hình ảnh hạ tầng.
- Tài liệu này thay thế các quyết định React, Vite, React Router, Motion và Lucide React trong kế hoạch và thiết kế trước đây. Các yêu cầu nội dung, hình ảnh, khả năng truy cập và giới hạn biểu mẫu vẫn áp dụng.

## Lựa chọn kiến trúc

| Phương án | Ưu điểm | Hạn chế |
|---|---|---|
| Sáu trang HTML tĩnh — lựa chọn thực hiện | Đọc được nội dung khi tắt JavaScript, mở bằng tệp hoặc máy chủ tĩnh, dễ sửa từng trang | Header/footer lặp ở sáu tệp, cần kiểm tra tính nhất quán |
| Một HTML và bộ định tuyến JavaScript | Giảm lặp layout | Phụ thuộc JavaScript để dựng trang, cần xử lý đường dẫn và lịch sử |

Sử dụng sáu HTML độc lập: `index.html`, `about.html`, `solutions.html`, `services.html`, `products.html`, `contact.html`. Liên kết, CSS, JavaScript, ảnh và font dùng đường dẫn tương đối. Không cần npm, Vite hoặc bước build để chạy. Không có thư viện React hoặc framework ở thời điểm chạy.

## Cấu trúc và chức năng

- Agent thực thi tạo bản chuyển đổi trong `website-html/`. Sau kiểm tra, agent điều phối lưu bản React ngoài thư mục đích và đưa bản HTML thuần vào `website/`; bảo toàn `docs` và tài nguyên gốc.
- Tái sử dụng CSS, ảnh WebP và font cục bộ từ website hiện tại. SVG biểu tượng được lưu trực tiếp trong HTML hoặc tài nguyên, không cần thư viện biểu tượng lúc chạy.
- Toàn bộ nội dung tiếng Việt có sẵn trong HTML, kể cả khi JavaScript bị tắt. Ngôn ngữ tiếng Anh dùng văn bản song ngữ trong HTML hoặc bảng dịch và thuộc tính `data-i18n`; bao gồm tiêu đề, metadata, menu, nhãn biểu mẫu và thông báo.
- JavaScript chỉ xử lý đổi VI/EN, ghi nhớ ngôn ngữ tùy chọn, menu điện thoại, biểu mẫu và hiệu ứng xuất hiện. Không lưu thông tin cá nhân vào localStorage. Lựa chọn ngôn ngữ phải được áp dụng khi chuyển trang.
- Hiệu ứng dùng CSS và `IntersectionObserver`, tôn trọng `prefers-reduced-motion`. Nếu JavaScript hoặc API hiệu ứng không hoạt động, nội dung vẫn hiển thị.
- Biểu mẫu tiếp tục tạo/tải bản yêu cầu cục bộ và nói rõ chưa gửi tới AVENO. Không tạo tuyên bố gửi thành công khi chưa có hệ thống tiếp nhận. Điện thoại/email còn thiếu không được tự bổ sung.

## Trình tự thực hiện

1. Đối chiếu nguồn nội dung hiện có với Excel; giữ đủ sáu trang, bốn nhóm giải pháp, sáu dịch vụ và ba hãng.
2. Chuyển layout thành HTML tĩnh; đưa CSS, ảnh, font và SVG về đường dẫn tương đối.
3. Thêm JavaScript thuần cho ngôn ngữ, menu, biểu mẫu và chuyển động.
4. Kiểm tra chức năng và giao diện trên máy tính/điện thoại, sau đó đổi thư mục đích có bảo toàn bản cũ.
5. Cập nhật README hướng dẫn mở `index.html` hoặc chạy máy chủ tĩnh, ghi rõ giới hạn biểu mẫu. Không yêu cầu cài dependency để xem website.

## Checklist nghiệm thu

- [x] Sáu HTML có nội dung đầy đủ khi tắt JavaScript; liên kết nội bộ và tài nguyên chạy qua `file://` lẫn HTTP tĩnh.
- [x] Nội dung và menu đúng Overview; menu ghi đầy đủ “Sản phẩm & Công nghệ”; không thêm số liệu hoặc tư cách đối tác chưa xác minh.
- [x] VI/EN bao phủ nội dung, metadata, biểu mẫu và menu; lựa chọn ngôn ngữ giữ khi chuyển trang nếu bộ nhớ trình duyệt khả dụng.
- [x] Menu điện thoại dùng được bằng bàn phím, có trạng thái ARIA và focus rõ; không cuộn ngang.
- [x] Mỗi trang có một H1, skip link, alt ảnh và nhãn biểu mẫu.
- [x] Reduced motion không gây che nội dung; hiệu ứng không chặn thao tác.
- [x] Biểu mẫu kiểm tra trường bắt buộc, tải đúng yêu cầu và thông báo trung thực chưa gửi trực tuyến.
- [x] Không còn React/Vite/framework runtime trong thư mục bàn giao; kiểm tra trực quan desktop/mobile và không có lỗi JavaScript.
- [x] README mô tả cách chạy HTML thuần, nguồn ảnh và giới hạn cần cấu hình khi triển khai trực tuyến.

Agent lập kế hoạch chỉ cập nhật tài liệu này. Agent thực thi chuyển mã nguồn; agent kiểm tra đánh giá độc lập. Không cần duyệt lại thiết kế vì người dùng đã duyệt giao diện và trực tiếp yêu cầu thay đổi công nghệ.

## Kết quả thực hiện và bằng chứng

Đã hoàn thành chuyển đổi. `website/` hiện chứa sáu tệp HTML độc lập, `assets/` gồm CSS, JavaScript, ảnh và font cục bộ, cùng favicon và README. Bản React cũ được bảo toàn tại `docs/archive/aveno-react-2026-10-09/`. Không còn React, Vite hoặc yêu cầu npm trong thư mục website bàn giao. Máy chủ xem thử HTTP tĩnh tại `http://127.0.0.1:4173/` đã trả HTTP 200.

Theo kết quả kiểm tra do agent điều phối và agent kiểm tra cung cấp:

- Kiểm tra trình duyệt cả sáu trang ở chiều rộng 1440, 390 và 320 px, cùng sáu trang khi tắt JavaScript và sáu trang mở qua `file://`; các báo cáo không ghi nhận lỗi.
- Đã kiểm tra chuyển VI/EN và chuyển trang, menu bằng bàn phím, liên kết neo và tải bản yêu cầu từ biểu mẫu.
- Kiểm tra hồi quy tại thư mục và máy chủ bàn giao xác nhận `?lang=vi` ưu tiên hơn ngôn ngữ EN đã lưu, liên kết neo tiếng Anh đúng, biểu mẫu từ chối dữ liệu chỉ có khoảng trắng và giữ dữ liệu khi đổi ngôn ngữ.
- Đã kiểm tra trường hợp chặn bộ nhớ trình duyệt, font cục bộ khi mở bằng tệp, menu điện thoại khi tắt JavaScript và hiệu ứng `IntersectionObserver` thông thường.
- Sau đối chiếu trực quan, đã khôi phục 22 chỗ xuống dòng tiêu đề bằng `<br>` cho VI/EN và ẩn các điều khiển không hoạt động khi tắt JavaScript. Agent đánh giá yêu cầu và agent đánh giá chất lượng đều kết luận đạt.

Bằng chứng kiểm tra nằm tại `docs/qa/vanilla-report.json`, `docs/qa/vanilla-regression-report.json` và `docs/qa/vanilla-screenshots/`. Các kết quả trên mô tả trạng thái được kiểm tra; biểu mẫu vẫn xuất yêu cầu cục bộ và chưa gửi trực tuyến. Không commit hoặc xuất bản.

Kế hoạch này có ưu tiên hơn phần công nghệ trong `2026-10-09-aveno-website.md` và `../specs/2026-10-09-aveno-website-design.md`: những mô tả React trong tài liệu cũ chỉ ghi lại phương án trước khi người dùng yêu cầu chuyển đổi.
