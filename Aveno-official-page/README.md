# Website AVENO

Website HTML, CSS và JavaScript thuần gồm 6 trang: Home, About, Solutions, Services, Products và Contact. Không cần Node.js, npm hoặc build.

Tại thư mục `website`, chạy:

```powershell
python -m http.server 4173
```

Mở `http://localhost:4173`. Website dùng tiếng Anh. Biểu mẫu liên hệ chưa gửi trực tuyến; nút gửi đang vô hiệu hóa. Email, tên miền và hệ thống nhận yêu cầu chờ bổ sung; số điện thoại công ty tạm ẩn.

Nội dung nguồn nằm trong `AVENO_Website_Content_v2_Simplified.xlsx` cùng thư mục. HTML nằm tại gốc `website`; CSS, JavaScript, font và hình ảnh nằm trong `assets`. Giấy phép font và Bootstrap Icons được giữ cùng tài nguyên.

Sáu trang dùng bảng màu Emerald: màu chủ đạo `#0D7A50`, hover `#09633F`, nền tối `#0B211B`, footer `#071A14`, accent Mint `#8FE3BB` và nền nhạt `#EEF7F1`. Chín ảnh WebP hiện dùng nằm tại `assets/images/green-theme/`. Bản sao nguyên vẹn của 11 ảnh màu cũ nằm tại `backup/old-color-images/`, giữ tên và thư mục ảnh ban đầu.

Logo chữ ở header dùng Emerald; logo ở footer dùng Mint. Favicon nằm tại `favicon.svg`.

Ảnh xem trước khi chia sẻ là `assets/images/brand/aveno-thumbnail.png`, kích thước `1200 × 630`, chỉ gồm biểu tượng favicon gốc được phóng lớn `512 × 512` và đặt giữa nền xanh nhạt `#EEF7F1`. Favicon SVG nguồn tại `favicon.svg` giữ nguyên. Sáu trang có metadata Open Graph/Twitter tĩnh. URL ảnh hiện là đường dẫn tương đối để kiểm tra local; khi có tên miền, cần cấu hình URL HTTPS công khai cho ảnh, `og:url` và canonical từng trang. Việc hiển thị ảnh trên nền tảng chia sẻ cần kiểm tra sau khi có URL công khai.
