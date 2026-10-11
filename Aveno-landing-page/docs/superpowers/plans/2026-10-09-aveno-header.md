# Điều chỉnh header AVENO

Bạn đã duyệt đề xuất tăng độ dễ đọc và gom các thao tác ở header. Phạm vi chỉ là header, dùng CSS chung cho sáu trang và cả hai ngôn ngữ. Không commit.

## Thiết kế

- Menu chính 14px; dòng phụ dưới logo ở header 9px; nút VI/EN 12px.
- Logo giữ bên trái. Nhóm điều hướng và nút ngôn ngữ gần nhau ở bên phải, với khoảng cách khoảng 22px giữa nhóm.
- Giữ chiều cao header và màu hiện tại. Cỡ chữ logo ở footer không thay đổi vì điều chỉnh chỉ áp dụng cho header.
- Khi màn hình không đủ chỗ cho menu đầy đủ, dùng menu thu gọn đang có thay vì giảm cỡ chữ. Chỉ điều chỉnh breakpoint của header nếu cần; không đổi bố cục nội dung trang.

## Thực hiện và kiểm tra

- [x] Agent thực thi sửa `website/assets/css/styles.css`, tập trung các selector header.
- [x] Kiểm tra header VI/EN trên cả sáu trang; thử các độ rộng 1440, 1366, 1280, 1180, 1101, 1024, 901, 900, 768, 390 và 320px.
- [x] Đo cỡ chữ và khoảng cách thực tế; không có chồng lấn hoặc tràn ngang; thử menu bàn phím ở chế độ thu gọn.
- [x] Agent kiểm tra đọc thay đổi CSS độc lập; chụp header mới và bàn giao link xem.

Kết quả: menu 14px, phụ đề logo ở header 9px, VI/EN 12px; khoảng cách giữa nút Liên hệ và cụm ngôn ngữ 22px tại màn hình 1440px. Header vẫn cao 97px; font phụ đề footer vẫn 7px. Menu bàn phím và sticky hoạt động, menu không JavaScript vẫn hiển thị. Báo cáo `docs/qa/header-review-report.json` ghi không có lỗi; ảnh `docs/qa/header-updated-vi.png` và `header-updated-en.png`. Review độc lập đạt.

## Bổ sung đã được duyệt

Đã bỏ biểu tượng tại nút Liên hệ của 12 header Việt/Anh, giữ biểu tượng của các CTA khác. Trang hiện tại được đánh dấu bằng gạch chân cố định; đường gạch mở từ trái sang phải khi hover hoặc focus bàn phím. Hiệu ứng CSS kéo dài 0,22 giây và tắt khi có tùy chọn giảm chuyển động. Cỡ chữ và bố cục header giữ như lần điều chỉnh trước.

Kiểm tra trình duyệt trên 12 phiên bản trang xác nhận không còn biểu tượng trong nút Liên hệ, gạch chân trang hiện tại hiển thị, hover và focus hoạt động; mobile không tràn ngang. Thời gian chuyển động khi bật reduced motion là 0 giây. `docs/qa/header-underline-report.json` ghi không có lỗi. Review mã nguồn độc lập đạt.
