# Bàn giao thiết kế trang Dịch vụ AVENO — tư vấn làm trọng tâm

Cập nhật 11/10/2026. Bản hiện hành thay thế nội dung bàn giao cũ trong cùng tệp.

## Phạm vi và nguồn

Chỉ chỉnh bản thiết kế và tài liệu; không sửa code trang Dịch vụ hoặc commit. Header/footer giữ từ bản đã duyệt; khi triển khai tái sử dụng header/footer HTML hiện tại, không dùng ảnh raster thay thế.

- Bản thiết kế: `docs/mockups/services-redesign-concept-2026-10-10.webp`, 857×2106px, WebP lossless.
- Nguồn nội dung: `docs/AVENO_Website_Content_v2_Simplified.xlsx`, sheet `04_Services`, hàng 5–10.
- Yêu cầu trọng tâm: `04_Services!E5` ghi “Đặt đầu tiên để thể hiện năng lực tư vấn.”
- Tiêu đề, nhóm nội dung, câu dẫn rút gọn và CTA dưới đây là biên tập thiết kế theo phạm vi Excel; không phải trích nguyên văn toàn bộ bảng tính.

## Hướng thiết kế được chọn

Giữ đủ sáu dịch vụ, nhấn mạnh Đánh giá hiện trạng và Tư vấn & thiết kế kiến trúc bằng hai thẻ lớn ngay sau hero. Bốn dịch vụ tiếp theo thể hiện khả năng hiện thực hóa, kiểm chứng và hỗ trợ kiến trúc theo phạm vi dự án. Không diễn đạt sáu dịch vụ là các bước bắt buộc của mọi hợp đồng.

Đã cân nhắc chỉ đổi câu chữ trong bố cục cũ: ít thay đổi nhưng năng lực tư vấn dễ bị chìm. Thiết kế lại toàn bộ sẽ gây xáo trộn không cần thiết. Phương án được chọn giữ hệ màu, ảnh, header/footer và bố cục ba nhóm; điều chỉnh trọng tâm hai dịch vụ đầu và CTA.

## Hero

- Nhãn: **TƯ VẤN & DỊCH VỤ HẠ TẦNG**.
- H1: **Hiểu bài toán hạ tầng. Định hình kiến trúc phù hợp.**
- Mô tả: **AVENO đánh giá hiện trạng và nhu cầu phát triển để tư vấn kiến trúc phối hợp mạng, máy chủ, lưu trữ và bảo mật; hỗ trợ hiện thực hóa theo phạm vi dự án.**
- Nút: **Trao đổi nhu cầu tư vấn** → `contact.html`, giữ ngôn ngữ hiện tại.
- Ảnh phải: `services-engineer.webp`. Là ảnh minh họa, không phải ảnh nhân sự hoặc dự án thực tế của AVENO.

Hero navy, chữ trái và ảnh phải, không để tiêu đề chạm ảnh. Giữ ảnh kỹ sư thay vì lặp sơ đồ bốn lớp của trang Giải pháp. Không thêm câu cam kết thời gian phản hồi, tư vấn miễn phí hoặc kết quả định lượng.

## Mục lục và đánh số

| Số | Nhãn mục lục | Tiêu đề dịch vụ | Anchor hiện có |
|---|---|---|---|
| 01 | Khảo sát | Đánh giá hiện trạng hạ tầng | `assessment` |
| 02 | Kiến trúc | Tư vấn & thiết kế kiến trúc | `architecture` |
| 03 | Cung ứng | Cung ứng thiết bị & bản quyền | `supply` |
| 04 | Triển khai | Lắp đặt & tích hợp | `implementation` |
| 05 | Nghiệm thu | Kiểm thử & nghiệm thu | `testing` |
| 06 | Hỗ trợ | Bảo trì & hỗ trợ kỹ thuật | `support` |

Chỉ dịch vụ có số 01–06. Ba nhãn nhóm, checklist và dòng kết quả không có số. Mục lục dẫn đến dịch vụ tương ứng, có khoảng tránh header khi cuộn.

## Nhóm trọng tâm: Tư vấn hiện trạng & kiến trúc

Tiêu đề: **Tư vấn bắt đầu từ hiện trạng và nhu cầu phát triển.**

Hai thẻ bằng nhau, nền lavender rất nhạt, viền tím mảnh ở đầu; số nhỏ → icon → tên dịch vụ → mô tả → checklist → dòng mục đích. Không có CTA riêng trong thẻ. Dòng mục đích là nội dung tĩnh; dấu chỉ hướng trong mockup chỉ để phân cấp, không triển khai thành nút hoặc liên kết.

### 01 — Đánh giá hiện trạng hạ tầng

**Xác định giới hạn kỹ thuật, vấn đề hiệu năng và khoảng trống cần cải thiện, làm cơ sở cho kiến trúc mục tiêu và kế hoạch đầu tư.**

- Rà soát mạng, máy chủ, lưu trữ và bảo mật.
- Đánh giá nhu cầu xử lý và dung lượng.
- Phân tích khoảng trống cần cải thiện.

Dòng nhấn: **Cơ sở cho kiến trúc và kế hoạch đầu tư**.

Nguồn: `C5/D5`; mô tả nói mục đích, checklist nói phạm vi để tránh lặp ý.

### 02 — Tư vấn & thiết kế kiến trúc

**Xây dựng kiến trúc theo nhu cầu xử lý, tăng trưởng, tính sẵn sàng và bảo mật; phối hợp bốn lớp hạ tầng thành một nền tảng thống nhất.**

- Kiến trúc mục tiêu, cấu hình và quy mô.
- Dự phòng và tích hợp.
- Định hướng chuyển đổi tổng thể.

Dòng nhấn: **Định hướng kiến trúc và chuyển đổi**.

Nguồn: `C6/D6`. Bốn lớp hạ tầng gồm Network, Compute, Storage và Security, đã nêu bằng tiếng Việt trong hero. Không tự thêm cam kết về hồ sơ thiết kế chi tiết, báo cáo miễn phí hoặc sản phẩm bàn giao chưa được thống nhất.

## Nhóm: Hiện thực hóa kiến trúc

Tiêu đề: **Đưa kiến trúc vào thực tế.** Nền xám nhạt; ảnh thiết bị trái, hai khối dịch vụ phải. Nội dung gọn hơn nhóm tư vấn.

### 03 — Cung ứng thiết bị & bản quyền

**Thiết bị, giấy phép và subscription theo cấu hình, phạm vi đã phê duyệt và mốc triển khai.**

Phạm vi: **Máy chủ · Lưu trữ · Mạng · Bảo mật · Bản quyền**.

Nguồn: `C7/D7`. “Subscription” bao gồm trong đoạn dẫn. Có thể tổ chức cung ứng theo từng dự án; không công bố giá. Icon là hộp thiết bị, không dùng biểu tượng cơ sở dữ liệu để đại diện toàn bộ cung ứng.

### 04 — Lắp đặt & tích hợp

**Dịch vụ có thể bao gồm lắp đặt thiết bị, phối hợp đấu nối, cấu hình và tích hợp với môi trường hiện hữu.**

Phạm vi: **Rack & stack · Cấu hình · Tích hợp · Kiểm tra tương thích**.

Nguồn: `C8/D8`. Bản trình bày dùng câu ngắn; khi triển khai giữ cách diễn đạt có điều kiện “có thể bao gồm”, không biến thành phạm vi cố định của mọi dự án.

## Nhóm: Kiểm chứng và đồng hành

Nền trắng, hai panel bằng nhau. Panel nghiệm thu navy để giữ điểm khác biệt được nêu tại `E9`; panel hỗ trợ nền sáng.

### 05 — Kiểm thử & nghiệm thu

**Xác nhận theo thiết kế và tiêu chí nghiệm thu đã thống nhất.**

- Kết nối và hiệu năng.
- Kiểm tra dự phòng.
- Chức năng bảo mật.
- Hỗ trợ nghiệm thu.

Nguồn: `C9/D9`; thực hiện trước bàn giao. Không bỏ kiểm thử kết nối, failover, hiệu năng hoặc bảo mật khi rút câu chữ.

### 06 — Bảo trì & hỗ trợ kỹ thuật

**Hỗ trợ theo phạm vi thống nhất cho từng dự án.**

- Xử lý sự cố và rà soát cấu hình.
- Hỗ trợ nâng cấp, tối ưu hiệu năng.
- Phối hợp với hãng.

Nguồn: `C10/D10`; có thể cung cấp sau triển khai. Không tự thêm SLA, hỗ trợ 24/7 hoặc thời gian xử lý.

## CTA cuối — tập trung nhu cầu tư vấn

- Tiêu đề: **Trao đổi bài toán trước khi lựa chọn công nghệ.**
- Mô tả: **Chia sẻ hạ tầng hiện tại, vấn đề cần giải quyết và nhu cầu phát triển để trao đổi hướng kiến trúc phù hợp.**
- Nút: **Trao đổi nhu cầu tư vấn** → `contact.html`, giữ ngôn ngữ hiện tại.

Nền tím trầm `#302448`, tiêu đề trắng, mô tả `#E5DFF0`; nút trắng, chữ tím trầm. Không sóng chấm, không nhãn nhỏ trên tiêu đề và không liên kết phụ. Một hành động chính.

Dùng cùng cấu trúc với CTA bốn trang đã chốt: tiêu đề → mô tả → nút. Desktop đệm trên/dưới 64px; H2 32px/1.3; mô tả 16px/1.65; khoảng tiêu đề–mô tả 16px, mô tả–nút 24px. Nút cao 48px, bo 5px, đệm ngang 24px. Mobile đệm 40px, H2 26px, mô tả 15px; khoảng đầu 12px, khoảng tới nút 24px. Không ép chiều cao cố định. Nút trong mockup là hướng thiết kế cho liên kết đến Liên hệ, không ngụ ý form hiện tại đã gửi được yêu cầu.

## Lưới, ảnh và mobile

Desktop 1440px: khung tối đa 1220px, lề 110px, hai cột 586px, gutter 48px, trục giữa 720px. Tất cả nhóm dùng chung mép khung; thẻ tư vấn và hai panel cuối bằng nhau. Không giảm chữ để ép nội dung bằng chiều cao mockup.

Font Be Vietnam Pro hiện có; H1 khoảng 48–54px/1.2, H2 32–34px/1.3, tiêu đề dịch vụ 23px/1.35; nội dung 16px/1.65. Navy `#0B1224`, tím `#8054E8`, chữ `#192438`, chữ phụ `#637086`, nền sáng `#F3F5F9`, nền thẻ tư vấn `#F3EFFF`.

| Ảnh WebP đang dùng | Kích thước | Vị trí trong bản trình bày 857px |
|---|---|---|
| `website/assets/images/services-design/services-engineer.webp` | 1480×1062px | Hero, x443/y78, khung 343×246px |
| `website/assets/images/services-design/services-deployment.webp` | 1537×1023px | Hiện thực hóa kiến trúc, x72/y1059, khung 343×228px |

Hai ảnh được ghép trực tiếp từ chính WebP này, không lấy ảnh AI vẽ lại từ mockup. Giữ tỷ lệ, không kéo giãn, không thêm viền trắng. Icon nhỏ dựng bằng SVG/hệ icon hiện có, nét tím đồng nhất; không cắt icon từ mockup để làm assets. CTA dựng bằng HTML/CSS, không dùng ảnh chứa chữ.

Dưới 960px chuyển một cột: hero chữ → nút → ảnh; mục lục 2×3; thẻ 01 rồi 02; nhóm hiện thực hóa tiêu đề → ảnh → 03 → 04; nhóm cuối 05 rồi 06; CTA. Lề 24px ở 390px và 20px ở 320px. Giữ nội dung hiện rõ, không accordion hoặc slider. Không đổi breakpoint menu hiện tại. Dùng thứ tự DOM đúng, focus rõ, vùng nhấn tối thiểu 44px; tôn trọng reduced motion.

## Tiếng Anh

Nội dung phạm vi lấy từ `04_Services!B5:B10`, có thể biên tập gọn tương đương tiếng Việt nhưng không bỏ phạm vi hoặc yếu tố có điều kiện.

Hero đề xuất:
- Heading: **Understand your infrastructure needs. Define the right architecture.**
- Description: **AVENO assesses your current environment and growth requirements to advise on a coordinated architecture across networking, compute, storage and security, with project-based implementation support.**
- Button: **Discuss your consulting needs**.

Tên dịch vụ: **Infrastructure Assessment / Architecture Consulting & Design / Equipment & License Supply / Installation & Integration / Testing & Commissioning / Maintenance & Technical Support**.

CTA cuối đề xuất:
- Heading: **Discuss your infrastructure needs before choosing technology.**
- Description: **Share your current environment, challenges and growth requirements to discuss an appropriate architecture direction.**
- Button: **Discuss your consulting needs**.

Các câu hero/CTA tiếng Anh là đề xuất biên tập, không phải trích nguyên văn Excel. Cả hai ngôn ngữ cùng trọng tâm tư vấn và giữ sáu dịch vụ.

## Công cụ, prompt và kiểm tra bàn giao

ImageGen tích hợp chỉnh từ bản Dịch vụ đã duyệt. Prompt: giữ header/footer, ảnh kỹ sư ở hero và ảnh thiết bị ở nhóm triển khai; làm hai thẻ đánh giá hiện trạng và tư vấn kiến trúc nổi bật ngay sau hero; chỉ đánh số sáu dịch vụ; rút mô tả trùng checklist; giữ đầy đủ kiểm thử/nghiệm thu và hỗ trợ; CTA nền tím trầm, một tiêu đề/mô tả/nút về nhu cầu tư vấn, không họa tiết sóng. Sau đó ghép đúng ảnh WebP nguồn, phục hồi header/footer từ bản được duyệt và căn CTA theo thông số chung.

Đã kiểm tra: đủ 01–06; tư vấn ở đầu trang và CTA; hai ảnh lấy đúng assets; header/footer giữ nguyên pixel so với bản được duyệt; WebP lossless giữ chữ và bố cục; code Dịch vụ không thay đổi trong lượt thiết kế này. Bộ docs chỉ giữ một bản Dịch vụ hiện hành, không tạo thêm biến thể trong dự án.

Khi triển khai cần kiểm tra 1440/1024/768/390/320px, Việt/Anh, đủ phạm vi Excel, không tràn ngang, các anchor không bị header che, focus bàn phím và ngôn ngữ của link Liên hệ. Responsive là đặc tả bàn giao, chưa phải bản code Dịch vụ đã được triển khai hoặc kiểm thử.