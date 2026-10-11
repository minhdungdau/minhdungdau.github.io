# Website AVENO — HTML, CSS và JavaScript thuần

Website gồm 6 trang độc lập: `index.html`, `about.html`, `solutions.html`, `services.html`, `products.html`, `contact.html`.

Mở trực tiếp `index.html` bằng trình duyệt hoặc chạy từ thư mục này:

```powershell
python -m http.server 4173
```

Sau đó truy cập http://localhost:4173. Không cần cài Node.js, npm hay chạy build. Có thể tải toàn bộ thư mục lên dịch vụ hosting website tĩnh.

Nội dung tiếng Việt được viết đầy đủ trong HTML và vẫn đọc được khi tắt JavaScript. JavaScript hỗ trợ chuyển Việt/Anh, menu điện thoại, hiệu ứng xuất hiện khi cuộn và tải bản yêu cầu tư vấn. Tùy chọn ngôn ngữ được lưu trên trình duyệt; thông tin biểu mẫu không được lưu trong localStorage.

Biểu mẫu chỉ tạo và tải tệp `.txt` trên máy bạn, chưa gửi tới AVENO. Email, số điện thoại và hệ thống nhận yêu cầu cần được bổ sung khi có thông tin chính thức. Khi tắt JavaScript, biểu mẫu không thể tạo tệp; nội dung liên hệ vẫn hiển thị.

Các ảnh, font chữ, CSS và JavaScript nằm trong `assets/`. Mỗi trang có phiên bản tiếng Anh trong phần tử `template`, không cần tải dữ liệu qua mạng. Hiệu ứng cuộn tôn trọng tùy chọn giảm chuyển động của hệ điều hành.

## Chỉnh sửa và nguồn tài nguyên

Chỉnh nội dung tiếng Việt trực tiếp trong từng tệp HTML; nội dung tiếng Anh nằm trong `template#content-en` của cùng tệp. Khi thay đổi menu hoặc footer, cập nhật cả hai ngôn ngữ trên sáu trang. CSS chung nằm ở `assets/css/styles.css`, tương tác nằm ở `assets/js/main.js`.

Nội dung dựa trên `../docs/AVENO_Website_Content_v2_Simplified.xlsx`. Nguồn ảnh và font được ghi trong `../docs/qa/nguon-tai-nguyen.md`; giấy phép font nằm ở `assets/fonts/OFL.txt`. Kế hoạch hiện hành là `../docs/superpowers/plans/2026-10-09-aveno-vanilla.md`.
