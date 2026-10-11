# Bàn giao tinh chỉnh trang Giới thiệu — 11/10/2026

Bản thiết kế: `about-redesign-concept-2026-10-11.webp`, 1440×2740px, WebP lossless.

Giữ năm khối nội dung `02_Company_Intro!C5:C9`; thay ảnh mở đầu, trung tính hóa mô-đun hãng, bỏ số thứ tự quy trình và tách CTA cuối. Không thêm lịch sử, số năm kinh nghiệm, nhân sự, dự án hoặc chứng nhận.

## Cấu trúc

1. Header hiện tại, trạng thái Giới thiệu.
2. Giới thiệu AVENO: nội dung nguyên văn `C5`, có thể tách hai đoạn; ảnh Data Center `solutions-design/compute-racks.webp` bên phải. Khung 570×340px tại x760/y178 trong bản 1440px, giữ tỷ lệ ảnh nguồn 1624×969. Khác diện tích/cách cắt hero navy của Trang chủ.
3. Chúng tôi làm gì: hai đoạn `C6`; bốn thẻ icon Network/Compute/Storage/Cybersecurity ở cột đối diện, nét tím, không số.
4. Định hướng công nghệ: nền navy, nội dung `C7`; ba thẻ hãng cùng cấu trúc Trang chủ: icon mạng/máy chủ/khiên, tên hãng và phạm vi. Không còn sơ đồ nối AVENO với hãng hoặc CGI thiết bị gắn nhãn hãng. Link Khám phá công nghệ → `products.html`.
5. Cách chúng tôi làm việc: năm bước theo `D8`, không số, trục nối mảnh và icon. Link Xem dịch vụ → `services.html`. Đây là quy trình tổng quan, không đổi thành danh sách sáu dịch vụ và không thêm bước để ép giống trang Dịch vụ.
6. Giá trị AVENO hướng tới: hai đoạn `C9`, không gắn nút liên hệ trong khối văn bản.
7. CTA cuối theo ngữ cảnh.
8. Footer hiện tại.

## Năm bước làm việc

| Bước | Mô tả ngắn |
|---|---|
| Khảo sát | Tìm hiểu hạ tầng hiện tại và nhu cầu phát triển |
| Thiết kế | Xác định kiến trúc và công nghệ phù hợp |
| Cung ứng | Cung cấp thiết bị và giấy phép phần mềm |
| Triển khai | Hỗ trợ cấu hình và tích hợp hệ thống |
| Hỗ trợ | Hỗ trợ kỹ thuật sau triển khai khi cần thiết |

Mô tả ngắn kế thừa website hiện tại và diễn giải flow trong Excel. Đoạn `C8` là nguồn đầy đủ về phương pháp, có thể đặt làm câu dẫn khi triển khai; không tự thêm cam kết thời gian hoặc phạm vi hỗ trợ.

## Responsive và ảnh

Dưới 960px các section hai cột xếp một cột: tiêu đề/đoạn dẫn trước, hình/thẻ sau. Bốn lớp hạ tầng thành 2×2 hoặc một cột khi cần. Ba hãng cùng quy tắc Trang chủ. Quy trình chuyển thành trục dọc/danh sách, giữ thứ tự, không cuộn ngang hoặc thêm số. Khối giá trị có chiều rộng vừa đọc. Ảnh mở đầu dùng nguồn WebP có sẵn, không tạo bản sao; không cần ảnh CGI mới.

## Phương pháp và kiểm tra

ImageGen tích hợp chỉnh từ Giới thiệu hiện tại. Prompt: giữ năm phần theo Excel, ảnh hạ tầng xanh lạnh thật, ba thẻ hãng trung tính, năm bước không số, tách CTA toàn chiều ngang. Ghép lại nguyên header/footer, ảnh WebP nguồn và CTA theo ngữ cảnh. Đối chiếu C5:C9, đủ năm bước/ba hãng. AI triển khai kiểm tra responsive, Việt/Anh, liên kết và focus; không có code website mới trong bộ bàn giao.

## Phạm vi và quy chuẩn

Đây là bàn giao thiết kế, chưa triển khai website. Không sửa HTML/CSS/JavaScript, không commit. Header/footer trong bản trình bày được ghép nguyên từ website hiện tại; riêng Liên hệ dùng footer chung từ Trang chủ vì footer đang chạy bị lỗi cấu trúc.

Desktop 1440px: khung nội dung 1220px, lề 110px, căn chung trục header/footer. Be Vietnam Pro hiện tại; navy #0b1224, tím #8054e8, chữ #192438, chữ phụ #637086, nền sáng #f3f5f9, viền #e3e7ee. H1 48–56px, H2 32–40px, thân bài 16–18px/1.6; nhãn trường ít nhất 16px. Nút chính tím, mục tiêu bấm tối thiểu 44px. Icon nét tím cùng hệ, không dùng số trang trí. Chữ và nút phải là HTML thật, không dùng ảnh chụp bản thiết kế làm website.

Mobile 390/320px: lề 16–24px, H1 32–36px, H2 26–30px, thân bài ít nhất 16px. Header/menu/footer giữ hành vi hiện tại. Đặc tả responsive là hướng dẫn cho AI triển khai, chưa phải kết quả kiểm thử trang mới.

Các lựa chọn bố cục, tiêu đề biên tập, trường bắt buộc và CTA cuối là đề xuất thiết kế đã được người dùng duyệt; chỉ những nội dung có ghi ô nguồn mới là yêu cầu nguyên văn Excel. Không thêm số liệu, chứng nhận, thời gian phản hồi hoặc tuyên bố đối tác chưa có tài liệu xác nhận.

## CTA cuối trang — cập nhật 11/10/2026

Đây là phần biên tập giao diện được người dùng yêu cầu, không phải trích nguyên văn Excel. Giữ một cấu trúc chung: tiêu đề → một câu mô tả → một nút dẫn tới `contact.html`, giữ ngôn ngữ đang chọn. Không có nhãn nhỏ phía trên, liên kết phụ hoặc nút cạnh tranh.

- Tiêu đề: **Cùng trao đổi về định hướng hạ tầng của bạn.**
- Câu mô tả: **Trao đổi về nhu cầu hiện tại và định hướng phát triển hạ tầng của doanh nghiệp.**
- Nút: **Kết nối với AVENO** → `contact.html`.
- Nền: `#EDF2F7`; nút: `#111B30`; chữ nút trắng. Chữ tiêu đề `#192438`, mô tả `#637086` trên nền sáng; riêng Giải pháp dùng trắng và `#CBD5E1` trên nền navy.

Khung nội dung tối đa 1220px, cùng trục giữa với toàn trang; khối chữ căn giữa, giới hạn khoảng 1120px trên desktop để câu mô tả có thể nằm một dòng ở 1440px. Khi cần xuống dòng, để tự nhiên, không giảm cỡ chữ. Tiêu đề 32px/1.3, mô tả 16px/1.65; đệm trên/dưới 64px, khoảng tiêu đề–mô tả 16px, mô tả–nút 24px. Nút cao 48px, chữ 16px, đệm ngang 24px, bo 5px. Không ép chiều cao cố định khi nội dung hoặc ngôn ngữ thay đổi.

Mobile: đệm trên/dưới 40px, lề ngang 20–24px; tiêu đề 26px/1.3, mô tả 15px/1.65; khoảng tiêu đề–mô tả 12px, mô tả–nút 24px. Khối cao theo nội dung. Nút luôn dưới câu mô tả, focus nhìn rõ.

Bản hiện hành dùng nền sạch với sắc độ nhẹ, bỏ sóng chấm ở CTA để giảm sự lặp giữa các trang. Dựng bằng HTML/CSS khi triển khai; không dùng ảnh chứa chữ hoặc nút làm nền. Không cần thêm ảnh vào assets cho CTA này. Các ảnh minh họa nội dung vẫn dùng đúng WebP đã bàn giao. Trang Dịch vụ được tạm dừng, chưa áp dụng hệ CTA mới; trang Liên hệ không thêm CTA cuối.

Tiếng Anh đề xuất (biên tập giao diện):
- Heading: **Discuss your infrastructure direction with us.**
- Description: **Discuss your current needs and the future direction of your enterprise infrastructure.**
- Button: **Connect with AVENO**.

Công cụ: ImageGen tích hợp tạo bốn dải CTA cùng hệ căn giữa; sau đó ghép riêng dải của trang vào mockup, bảo toàn pixel phần nội dung và header/footer. Prompt cho dải này: “Flat enterprise website CTA, Be Vietnam Pro, centered heading / one description / one button, background #EDF2F7, button #111B30, exact Vietnamese copy shown above, identical vertical rhythm, no eyebrow, no waves, no dots, no photos or other elements.” Toàn bộ CTA sheet dùng cùng bố cục, mỗi dải rộng tương đương viewport 1440px và cao tham chiếu 300px. Ảnh là tham chiếu thị giác; thông số spacing và văn bản trong mục này là đặc tả để triển khai.


## Nội dung nguồn để triển khai

Nguồn: docs/AVENO_Website_Content_v2_Simplified.xlsx. Dùng văn bản dưới đây khi triển khai, không OCR từ ảnh hoặc tự thêm năng lực.

### Company Overview — 02_Company_Intro!C5

AVENO PTY LTD là doanh nghiệp công nghệ hoạt động tại Australia, tập trung vào hạ tầng doanh nghiệp và trung tâm dữ liệu. Chúng tôi hỗ trợ các tổ chức xây dựng nền tảng công nghệ tin cậy, có khả năng mở rộng và bảo mật cho các ứng dụng kinh doanh, dịch vụ số và các workload có nhu cầu xử lý dữ liệu lớn.

Bản tiếng Anh từ 02_Company_Intro!B5:

AVENO PTY LTD is an Australia-based technology company focused on enterprise and data center infrastructure. We support organizations in building reliable, scalable and secure technology foundations for business applications, digital services and data-intensive workloads.

### What We Do — 02_Company_Intro!C6

Danh mục giải pháp của AVENO bao gồm mạng trung tâm dữ liệu, hệ thống compute doanh nghiệp, lưu trữ dữ liệu và an ninh mạng. Bằng việc kết hợp các lớp hạ tầng này, chúng tôi giúp khách hàng xây dựng môi trường CNTT dễ vận hành, dễ mở rộng và dễ bảo vệ hơn trong dài hạn.

Bản tiếng Anh từ 02_Company_Intro!B6:

AVENO's solution portfolio covers data center networking, enterprise compute, data storage and cybersecurity. By combining these infrastructure layers, we help customers build environments that are easier to operate, expand and protect over time.

### Technology Approach — 02_Company_Intro!C7

AVENO tập trung vào các công nghệ của Arista, Dell Technologies và Check Point. Các nhóm công nghệ này hỗ trợ mạng hiệu năng cao, máy chủ và lưu trữ doanh nghiệp, quản trị hạ tầng và an ninh mạng cho các môi trường Data Center và Cloud hiện đại.

Bản tiếng Anh từ 02_Company_Intro!B7:

AVENO focuses on technologies from Arista, Dell Technologies and Check Point. Together, these technology areas support high-performance networking, enterprise servers and storage, infrastructure management and cybersecurity for modern data center and cloud-oriented environments.

### How We Work — 02_Company_Intro!C8

Cách tiếp cận của chúng tôi bắt đầu từ việc tìm hiểu hạ tầng hiện tại, workload và nhu cầu tăng trưởng của khách hàng. Sau đó, AVENO xác định kiến trúc mục tiêu, lựa chọn công nghệ phù hợp, hỗ trợ triển khai và tiếp tục hỗ trợ kỹ thuật sau khi hệ thống đi vào vận hành khi cần thiết.

Bản tiếng Anh từ 02_Company_Intro!B8:

Our approach begins with understanding the customer's infrastructure, workload and growth requirements. We then define the target architecture, select the appropriate technology, support implementation and continue with technical assistance after deployment when required.

### Value Proposition — 02_Company_Intro!C9

AVENO hướng tới việc đơn giản hóa quá trình hiện đại hóa hạ tầng bằng cách tiếp cận đồng bộ giữa Network, Compute, Storage và Security. Điều này giúp khách hàng hạn chế các quyết định công nghệ rời rạc và xây dựng nền tảng nhất quán hơn cho việc mở rộng trong tương lai.

Bản tiếng Anh từ 02_Company_Intro!B9:

AVENO aims to simplify infrastructure modernization by providing a coordinated view across networking, compute, storage and security. This helps customers avoid fragmented technology decisions and create a more consistent foundation for future expansion.
