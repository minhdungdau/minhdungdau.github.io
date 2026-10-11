# Bàn giao tinh chỉnh Trang chủ — 11/10/2026

Bản thiết kế: `home-redesign-concept-2026-10-11.webp`, 1440×2750px, WebP lossless.

Giữ bốn khối nội dung theo Excel; chỉnh ảnh hero, minh họa giải pháp, mô-đun ba hãng và CTA cuối. Không thiết kế lại toàn bộ kiến trúc trang.

## Cấu trúc

1. Header hiện tại, trạng thái Trang chủ.
2. Hero navy hai cột: nhãn “GIẢI PHÁP HẠ TẦNG DATA CENTER & DOANH NGHIỆP”; H1 định vị hiện có “Xây dựng nền tảng cho trung tâm dữ liệu hiện đại.”; đoạn giới thiệu từ `01_Home!C5`, đủ Network/Compute/Storage/Cybersecurity. Ba câu thông điệp còn lại trong C5 có thể dùng làm nội dung hỗ trợ khi triển khai nếu cần; bản trình bày dùng H1 và đoạn giới thiệu để tránh lặp ý. CTA Khám phá giải pháp → `solutions.html`; Liên hệ AVENO → `contact.html`. Tiêu đề không chạm hoặc đè lên ảnh.
3. Giải pháp cốt lõi: đúng bốn thẻ theo `C6`: Mạng trung tâm dữ liệu / Máy chủ & Compute / Lưu trữ doanh nghiệp / An ninh mạng. Một ảnh và một liên kết cho mỗi thẻ; link Xem tất cả giải pháp ở tiêu đề section. Liên kết lần lượt tới `solutions.html#network`, `#compute`, `#storage`, `#security`.
4. Công nghệ trọng tâm: câu dẫn `C7`, ba thẻ hãng cân bằng bằng icon trung tính. Arista — Mạng trung tâm dữ liệu; Dell Technologies — Máy chủ, lưu trữ và mạng; Check Point — Bảo mật doanh nghiệp. Không gắn ảnh thiết bị chung với model của một hãng. Link Khám phá công nghệ → `products.html`.
5. Vì sao chọn AVENO?: giữ ý tích hợp tại `C8`; ba lợi ích hiện có Hạ tầng đồng bộ / Dễ quản lý / Sẵn sàng mở rộng; link Giới thiệu AVENO → `about.html`. Giữ bốn icon Network/Compute/Storage/Security theo `D8` trong khối này, không tạo dải trang trí riêng hoặc dùng số.
6. CTA cuối theo ngữ cảnh, không gắn nút liên hệ cạnh tranh bên trong khối Vì sao chọn AVENO.
7. Footer hiện tại.

Các mô tả ngắn dưới bốn giải pháp và ba lợi ích kế thừa website hiện tại, không phải trích nguyên văn Excel. Không tự mở rộng thành tính năng hoặc cam kết mới.

## Ảnh đúng bản thiết kế

| Vị trí | Tệp trong website/assets/images/ | Cách dùng |
|---|---|---|
| Hero | solutions-design/compute-racks.webp | Khung 590×510px tại x740/y132 trong bản 1440px, cover giữa |
| Thẻ mạng | solutions-design/network-fabric.webp | Contain để giữ toàn sơ đồ |
| Thẻ máy chủ | solutions-design/compute-racks.webp | Cover giữa, dùng lại nguồn |
| Thẻ lưu trữ | solutions-design/storage-platform.webp | Contain để giữ hình thiết bị |
| Thẻ bảo mật | solutions-design/security-coverage.webp | Contain để giữ toàn sơ đồ |

Bốn khung ảnh thẻ khoảng 288×194px. Dùng màu ở mép ảnh để lấp khoảng thừa khi contain. Các ảnh đã được ghép từ WebP thật vào bản trình bày; không dùng phiên bản ImageGen vẽ lại. Không kéo giãn, không tạo bản sao tài nguyên cho từng trang. Alt mô tả cảnh/sơ đồ, không khẳng định đây là sản phẩm cụ thể của hãng.

## Responsive

Dưới 960px hero một cột, ảnh sau chữ/nút với chiều cao giới hạn. Bốn thẻ giải pháp: bốn cột desktop, hai cột tablet, một cột mobile. Ba hãng một cột khi thiếu chỗ, không carousel. Phần dẫn Vì sao chọn AVENO đứng trước ba lợi ích; bốn icon có thể thành 2×2. Không ẩn nội dung quan trọng để giảm chiều dài trang.

## Phương pháp và kiểm tra

ImageGen tích hợp tinh chỉnh từ Trang chủ hiện tại. Prompt: giữ bốn khối theo Excel, ảnh xanh lạnh, thẻ hãng trung tính bằng icon, bốn icon hạ tầng trong khối lợi ích, tách CTA toàn chiều ngang, giữ header/footer. Lượt rà soát sửa khoảng cách tiêu đề/ảnh và loại ảnh mang nghĩa hãng. Ghép lại ảnh WebP thật, header/footer và CTA theo ngữ cảnh đã chốt. AI triển khai kiểm tra 1440/1024/768/390/320px, Việt/Anh, liên kết và không tràn ngang.

## Phạm vi và quy chuẩn

Đây là bàn giao thiết kế, chưa triển khai website. Không sửa HTML/CSS/JavaScript, không commit. Header/footer trong bản trình bày được ghép nguyên từ website hiện tại; riêng Liên hệ dùng footer chung từ Trang chủ vì footer đang chạy bị lỗi cấu trúc.

Desktop 1440px: khung nội dung 1220px, lề 110px, căn chung trục header/footer. Be Vietnam Pro hiện tại; navy #0b1224, tím #8054e8, chữ #192438, chữ phụ #637086, nền sáng #f3f5f9, viền #e3e7ee. H1 48–56px, H2 32–40px, thân bài 16–18px/1.6; nhãn trường ít nhất 16px. Nút chính tím, mục tiêu bấm tối thiểu 44px. Icon nét tím cùng hệ, không dùng số trang trí. Chữ và nút phải là HTML thật, không dùng ảnh chụp bản thiết kế làm website.

Mobile 390/320px: lề 16–24px, H1 32–36px, H2 26–30px, thân bài ít nhất 16px. Header/menu/footer giữ hành vi hiện tại. Đặc tả responsive là hướng dẫn cho AI triển khai, chưa phải kết quả kiểm thử trang mới.

Các lựa chọn bố cục, tiêu đề biên tập, trường bắt buộc và CTA cuối là đề xuất thiết kế đã được người dùng duyệt; chỉ những nội dung có ghi ô nguồn mới là yêu cầu nguyên văn Excel. Không thêm số liệu, chứng nhận, thời gian phản hồi hoặc tuyên bố đối tác chưa có tài liệu xác nhận.

## CTA cuối trang — cập nhật 11/10/2026

Đây là phần biên tập giao diện được người dùng yêu cầu, không phải trích nguyên văn Excel. Giữ một cấu trúc chung: tiêu đề → một câu mô tả → một nút dẫn tới `contact.html`, giữ ngôn ngữ đang chọn. Không có nhãn nhỏ phía trên, liên kết phụ hoặc nút cạnh tranh.

- Tiêu đề: **Bắt đầu từ bài toán hạ tầng của bạn.**
- Câu mô tả: **Chia sẻ hiện trạng và nhu cầu để trao đổi hướng giải pháp phù hợp.**
- Nút: **Trao đổi nhu cầu** → `contact.html`.
- Nền: `#F1EDFC`; nút: `#8054E8`; chữ nút trắng. Chữ tiêu đề `#192438`, mô tả `#637086` trên nền sáng; riêng Giải pháp dùng trắng và `#CBD5E1` trên nền navy.

Khung nội dung tối đa 1220px, cùng trục giữa với toàn trang; khối chữ căn giữa, giới hạn khoảng 1120px trên desktop để câu mô tả có thể nằm một dòng ở 1440px. Khi cần xuống dòng, để tự nhiên, không giảm cỡ chữ. Tiêu đề 32px/1.3, mô tả 16px/1.65; đệm trên/dưới 64px, khoảng tiêu đề–mô tả 16px, mô tả–nút 24px. Nút cao 48px, chữ 16px, đệm ngang 24px, bo 5px. Không ép chiều cao cố định khi nội dung hoặc ngôn ngữ thay đổi.

Mobile: đệm trên/dưới 40px, lề ngang 20–24px; tiêu đề 26px/1.3, mô tả 15px/1.65; khoảng tiêu đề–mô tả 12px, mô tả–nút 24px. Khối cao theo nội dung. Nút luôn dưới câu mô tả, focus nhìn rõ.

Bản hiện hành dùng nền sạch với sắc độ nhẹ, bỏ sóng chấm ở CTA để giảm sự lặp giữa các trang. Dựng bằng HTML/CSS khi triển khai; không dùng ảnh chứa chữ hoặc nút làm nền. Không cần thêm ảnh vào assets cho CTA này. Các ảnh minh họa nội dung vẫn dùng đúng WebP đã bàn giao. Trang Dịch vụ được tạm dừng, chưa áp dụng hệ CTA mới; trang Liên hệ không thêm CTA cuối.

Tiếng Anh đề xuất (biên tập giao diện):
- Heading: **Start with your infrastructure needs.**
- Description: **Share your current environment and requirements to discuss a suitable solution approach.**
- Button: **Discuss your requirements**.

Công cụ: ImageGen tích hợp tạo bốn dải CTA cùng hệ căn giữa; sau đó ghép riêng dải của trang vào mockup, bảo toàn pixel phần nội dung và header/footer. Prompt cho dải này: “Flat enterprise website CTA, Be Vietnam Pro, centered heading / one description / one button, background #F1EDFC, button #8054E8, exact Vietnamese copy shown above, identical vertical rhythm, no eyebrow, no waves, no dots, no photos or other elements.” Toàn bộ CTA sheet dùng cùng bố cục, mỗi dải rộng tương đương viewport 1440px và cao tham chiếu 300px. Ảnh là tham chiếu thị giác; thông số spacing và văn bản trong mục này là đặc tả để triển khai.


## Nội dung nguồn để triển khai

Nguồn: docs/AVENO_Website_Content_v2_Simplified.xlsx. Dùng văn bản dưới đây khi triển khai, không OCR từ ảnh hoặc tự thêm năng lực.

### Hero — 01_Home!C5

GIẢI PHÁP HẠ TẦNG DATA CENTER & DOANH NGHIỆP
Mạng hiệu năng cao. Compute và Storage tin cậy. An ninh mạng toàn diện.
AVENO PTY LTD cung cấp các giải pháp hạ tầng cho doanh nghiệp và trung tâm dữ liệu hiện đại, bao gồm Network, Compute, Storage và Cybersecurity.

Bản tiếng Anh từ 01_Home!B5:

DATA CENTER & ENTERPRISE INFRASTRUCTURE SOLUTIONS
High-performance networking. Reliable compute and storage. Advanced cybersecurity.
AVENO PTY LTD provides infrastructure solutions for modern enterprises and data centers, covering networking, compute, storage and cybersecurity.

### Core Solutions — 01_Home!C6

Mạng Trung tâm dữ liệu | Máy chủ & Compute | Lưu trữ doanh nghiệp | An ninh mạng

Bản tiếng Anh từ 01_Home!B6:

Data Center Networking | Compute & Servers | Enterprise Storage | Cybersecurity

### Technology Focus — 01_Home!C7

Danh mục công nghệ tập trung vào Arista, Dell Technologies và Check Point.

Bản tiếng Anh từ 01_Home!B7:

Technology portfolio focused on Arista, Dell Technologies and Check Point.

### Why AVENO — 01_Home!C8

Cách tiếp cận hạ tầng tích hợp, kết nối Network, Compute, Storage và Security thành một nền tảng công nghệ dễ quản lý và có khả năng mở rộng.

Bản tiếng Anh từ 01_Home!B8:

An integrated infrastructure approach connecting network, compute, storage and security into a manageable and scalable technology foundation.
