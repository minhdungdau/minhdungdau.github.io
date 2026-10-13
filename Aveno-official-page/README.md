# Website AVENO

Website HTML, CSS và JavaScript thuần gồm 6 trang: Home, About, Solutions, Services, Products và Contact. Không cần Node.js, npm hoặc build.

Tại thư mục `website`, chạy:

```powershell
python -m http.server 4173
```

Mở `http://localhost:4173`. Website dùng tiếng Anh. Biểu mẫu liên hệ chưa gửi trực tuyến; nút gửi đang vô hiệu hóa. Email, tên miền và hệ thống nhận yêu cầu chờ bổ sung; số điện thoại công ty tạm ẩn.

Nội dung nguồn nằm trong `AVENO_Website_Content_v2_Simplified.xlsx` cùng thư mục. HTML nằm tại gốc `website`; CSS, JavaScript, font và hình ảnh nằm trong `assets`. Giấy phép font và Bootstrap Icons được giữ cùng tài nguyên.

Sáu trang dùng bảng màu Emerald: màu chủ đạo `#0D7A50`, hover `#09633F`, nền tối `#0B211B`, footer `#071A14`, accent Mint `#8FE3BB` và nền nhạt `#EEF7F1`. Chín ảnh WebP hiện dùng nằm tại `assets/images/green-theme/`. Bản sao nguyên vẹn của 11 ảnh màu cũ nằm tại `backup/old-color-images/`, giữ tên và thư mục ảnh ban đầu.

Logo chữ ở header dùng Emerald; logo ở footer dùng Mint. Favicon nằm tại `favicon.png`, kích thước `64 × 64`, được xuất trực tiếp từ ảnh chữ A trắng trên nền Emerald đã duyệt (`1254 × 1254`), không vẽ lại biểu tượng.

Ảnh xem trước khi chia sẻ là `assets/images/brand/aveno-thumbnail-network.jpg`, định dạng JPEG, kích thước `1200 × 630`. Ảnh được xuất từ bản minh họa AI đã duyệt (`1731 × 909`) gồm logo AVENO, tủ rack mạng và dây mạng xanh; đây không phải ảnh công trình thực tế. Quá trình xuất giữ trọn bố cục ảnh nguồn, thu nhỏ theo tỷ lệ và căn giữa trên nền nhạt `#EEF7F1`. Sáu trang có metadata Open Graph/Twitter tĩnh. GitHub Pages hiện được cấu hình làm địa chỉ công khai tạm thời tại `https://minhdungdau.github.io/Aveno-official-page/`. URL ảnh, `og:image:secure_url`, `og:url` và canonical của sáu trang dùng URL HTTPS tuyệt đối theo địa chỉ này. Khi chuyển sang tên miền riêng, cần cập nhật các URL metadata tương ứng trên cả sáu trang. Việc hiển thị ảnh thực tế trên Zalo/Viber chưa được xác nhận.
