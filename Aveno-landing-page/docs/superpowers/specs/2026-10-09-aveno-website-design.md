# Thiết kế website doanh nghiệp AVENO

Ngày: 09/10/2026. Nguồn yêu cầu chính thức: `docs/AVENO_Website_Content_v2_Simplified.xlsx`, đặc biệt `00_Overview`. Người dùng đã duyệt phác thảo `docs/mockups/aveno-sketch.html`, chọn website 6 trang, xác nhận triển khai và yêu cầu thêm hình ảnh, hiệu ứng.

## Mục tiêu và phạm vi

Website B2B giới thiệu AVENO PTY LTD, giải pháp, dịch vụ, nhóm sản phẩm/công nghệ và kênh liên hệ. Định vị: Data Center & Enterprise Infrastructure Solutions. Tagline tiếng Việt: **Xây dựng nền tảng cho trung tâm dữ liệu hiện đại.** Tagline tiếng Anh: **Building the Foundation for Modern Data Centers.**

Sáu trang có đường dẫn riêng: `/`, `/about`, `/solutions`, `/services`, `/products`, `/contact`. Menu tiếng Việt phải ghi đầy đủ “Sản phẩm & Công nghệ”. Nội dung song ngữ dùng đúng hai cột English Content và Nội dung Tiếng Việt của Excel; mặc định tiếng Việt, nút VI/EN đổi cả nội dung, menu, biểu mẫu và metadata.

## Giao diện đã duyệt

Giữ hướng phác thảo: header sáng, logo chữ AVENO, hero navy lớn với chữ trắng và điểm nhấn tím, ảnh hạ tầng bên phải, section trắng xen kẽ navy, các card rõ ràng, CTA liên hệ và footer tối. Tông màu navy đậm / đen / trắng / tím. Thiết kế desktop rộng, khoảng trắng thoáng; mobile xếp một cột, menu thu gọn dùng bàn phím được.

Thay hình rack minh họa trong mockup bằng ảnh Data Center hoặc server infrastructure. Thêm ảnh ở About, Solutions và Services; các ảnh là minh họa hạ tầng, không tự nhận là cơ sở hoặc đội ngũ thực tế của AVENO. Dùng nguồn ảnh có quyền sử dụng rõ ràng; tải về `website/public/images` khi có thể để không phụ thuộc ảnh ngoài lúc hiển thị. Root đã chuẩn bị năm ảnh local WebP: `data-center.webp` (rack), `network.webp` (cáp mạng), `compute.webp` (bo mạch), `storage.webp` (ổ đĩa), `security.webp` (thiết bị đầu cuối). Ghi nguồn ảnh trong README. Không dùng logo hãng nếu chưa xác nhận quyền; tên hãng dạng chữ đủ đáp ứng yêu cầu.

Hiệu ứng Motion for React: hero xuất hiện theo thứ tự, section/card hiện nhẹ khi vào viewport, hover nâng card và đổi viền tím, ảnh chuyển động nhẹ có giới hạn. Không dùng carousel hoặc hiệu ứng làm che nội dung. Tôn trọng `prefers-reduced-motion`, animation kết thúc ở trạng thái nội dung nhìn thấy, không gây cuộn ngang mobile.

## Nội dung bắt buộc theo trang

- Trang chủ: Hero giải pháp hạ tầng với lợi ích mạng hiệu năng cao, compute/storage tin cậy, an ninh mạng; CTA Khám phá giải pháp và Liên hệ. Đúng 4 core solution cards. Technology Focus gồm Arista, Dell Technologies, Check Point. Why AVENO là cách tiếp cận tích hợp Network / Compute / Storage / Security. Ít thuật ngữ; không đưa SKU hay mô tả kỹ thuật dài vào đây.
- Giới thiệu: đủ Company Overview, What We Do, Technology Approach, How We Work, Value Proposition từ `02_Company_Intro`; flow Khảo sát → Kiến trúc → Cung ứng → Triển khai → Hỗ trợ. Một ảnh hạ tầng.
- Giải pháp: 4 nhóm Data Center Networking, Compute & Servers, Enterprise Storage, Cybersecurity, mô tả và lợi ích từ `03_Solutions`. Có thể minh họa fabric, không liệt kê sản phẩm cụ thể tại đây.
- Dịch vụ: đủ 6 nhóm theo `04_Services`: Khảo sát hạ tầng; Thiết kế kiến trúc; Cung cấp thiết bị & bản quyền; Lắp đặt & tích hợp; Kiểm thử & nghiệm thu; Bảo trì & hỗ trợ kỹ thuật. Giữ phạm vi hỗ trợ theo từng dự án; không công bố giá hoặc SLA tự đặt.
- Sản phẩm & Công nghệ: 3 card hãng từ `05_Products_Tech`; Arista có Data Center Switching / Routing / EOS & CloudVision; Dell có Compute (PowerEdge) / Storage / Networking (PowerSwitch); Check Point có Network Security / Cloud Security / Endpoint Security. CTA dẫn về nhóm giải pháp tương ứng hoặc trang chính thức.
- Liên hệ: AVENO PTY LTD; Ông David Tran – Giám đốc điều hành; 9 Windsor Avenue, Springvale VIC 3171, Australia. Biểu mẫu Name / Company / Email / Phone / Requirement. Không tạo số điện thoại hay email.

## Hành vi biểu mẫu và dữ liệu còn thiếu

Excel ghi điện thoại và email `[Cập nhật sau]`; tài liệu không có endpoint gửi biểu mẫu. Form kiểm tra tên, email hợp lệ, nhu cầu; có thể giữ trường công ty và điện thoại tùy chọn. Nếu chưa có endpoint, phải nói rõ trước khi người dùng gửi rằng gửi trực tuyến chưa được cấu hình; không báo đã gửi hoặc sẽ được liên hệ như một giao dịch thực sự. Không lưu nội dung người dùng vào bộ nhớ trình duyệt nếu không cần.

## Kỹ thuật và chất lượng

Đề xuất React + Vite, React Router, Lucide React và Motion; website tĩnh trong `website/`. Metadata title/description và footer disclaimer đúng `07_SEO_Dev_Notes`. Mỗi trang có một H1, hierarchy heading rõ, alt ảnh, focus visible, skip link, label form, trạng thái aria-live. Các đường dẫn con tải lại được trên host có SPA fallback.

Không đưa số dự án, khách hàng, năm kinh nghiệm, chứng nhận, lời chứng thực hoặc tuyên bố Authorized Distributor / Official Partner / Gold Partner không có trong nguồn. Website tham khảo VDCSoft từng bị công cụ trả 403; chưa thể kết luận giống chính xác. Phác thảo được duyệt là cơ sở giao diện thực thi.

## So sánh lựa chọn

React + Vite phù hợp triển khai nhanh, component dùng lại và hiệu ứng nhất quán; cần fallback khi host đường dẫn con. HTML nhiều trang dễ host nhưng lặp layout và logic song ngữ. CMS thuận tiện cập nhật thường xuyên nhưng tăng phạm vi và vận hành. Khuyến nghị React + Vite ở giai đoạn này, chưa bổ sung CMS hoặc backend.

## Tiêu chí nghiệm thu

Đủ sáu trang, bốn giải pháp, sáu dịch vụ, ba hãng; khớp Overview và nội dung Excel; VI/EN không để sót text UI; không có dữ liệu bịa; ảnh hiển thị; desktop/mobile không tràn; navigation, form validation, giảm chuyển động hoạt động; build thành công; kiểm tra trực quan ảnh chụp desktop/mobile. Không commit hoặc publish khi chưa được xác nhận riêng.
