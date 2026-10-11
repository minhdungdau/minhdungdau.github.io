# Website AVENO

Website doanh nghiệp 6 trang, triển khai theo yêu cầu trong `../docs/AVENO_Website_Content_v2_Simplified.xlsx` và phác thảo đã được duyệt. Nội dung hỗ trợ tiếng Việt và tiếng Anh; tiếng Việt là mặc định.

## Chạy trên máy

Yêu cầu Node.js 22.13.1 hoặc phiên bản mới hơn tương thích Vite 6.

```powershell
cd D:\Minh\MinhBui\Aveno-landing-page\website
npm.cmd ci
npm.cmd run dev -- --port 5173
```

Mở http://127.0.0.1:5173. Để tạo bản production, chạy `npm.cmd run build`; để xem bản build, chạy `npm.cmd run preview`. Không mở `index.html` trực tiếp bằng giao thức file.

## Cấu trúc

- `src/content.json`: nội dung VI/EN lấy từ Excel, giữ nguyên nội dung nguồn cho các trang chi tiết.
- `src/App.jsx`: điều hướng, chuyển ngôn ngữ, menu, metadata, footer.
- `src/pages/`: mỗi trang có tệp riêng; `shared.jsx` chứa helper chung. `src/pages.jsx` xuất lại các trang cho Router.
- `src/components.jsx`: ảnh, nút, hiệu ứng xuất hiện và thành phần dùng chung.
- `src/styles.css`: thiết kế navy/trắng/tím và bố cục responsive.
- `public/images/`, `public/fonts/`: tài nguyên lưu cục bộ, không yêu cầu mạng ngoài để hiển thị.

Các URL: `/`, `/about`, `/solutions`, `/services`, `/products`, `/contact`. React Router dùng History API; máy chủ production cần trả `index.html` cho các đường dẫn giao diện khi tải lại trực tiếp. Vite dev/preview đã hỗ trợ cơ chế này. Các đường dẫn tài nguyên thực phải được phục vụ bình thường. Nếu triển khai dưới thư mục con, cần cấu hình `base` của Vite và `basename` của Router.

## Hiệu ứng và khả năng truy cập

Motion React dùng hiệu ứng xuất hiện nhẹ khi cuộn. CSS hỗ trợ hover ảnh/thẻ, trạng thái focus; mọi hiệu ứng được giảm khi người dùng bật `prefers-reduced-motion`. Có skip link, menu mobile với trạng thái `aria-expanded`, phím Escape, nhãn biểu mẫu và phản hồi `aria-live`.

## Giới hạn cần hoàn thiện trước khi công bố

Email và điện thoại chưa có trong Excel nên giao diện ghi rõ đang cập nhật. Biểu mẫu chưa có máy chủ tiếp nhận; nút “Tạo bản yêu cầu” chỉ tạo bản nháp trong bộ nhớ trình duyệt, và nút tải xuất tệp văn bản khi người dùng chọn. Không hiển thị trạng thái đã gửi, không lưu dữ liệu cá nhân vào localStorage. Cần bổ sung email/điện thoại và tích hợp endpoint thực nếu muốn gửi yêu cầu trực tuyến.

Metadata được cập nhật theo trang/ngôn ngữ bằng React; các nền tảng thu thập nội dung không chạy JavaScript có thể cần prerender/SSR khi triển khai. Domain chưa được cung cấp nên chưa khai báo canonical, sitemap theo domain hoặc tài khoản mạng xã hội.

Ảnh chỉ là hình minh họa, không tuyên bố là cơ sở vật chất của AVENO. Tên hãng hiển thị dưới dạng chữ; không tuyên bố tư cách đối tác, số liệu kinh doanh, giá hoặc SLA.

## Nguồn tài nguyên

Chi tiết nguồn và giấy phép trong `../docs/qa/nguon-tai-nguyen.md`. Ảnh từ Unsplash, sử dụng theo [Unsplash License](https://unsplash.com/license). Be Vietnam Pro lấy qua Google Fonts, giấy phép SIL Open Font License 1.1 lưu tại `public/fonts/OFL.txt`. Nguồn font: https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap.

Tham khảo công nghệ chính thức: [Arista](https://www.arista.com/en/products), [Dell Technologies](https://www.dell.com/), [Check Point](https://www.checkpoint.com/products/). Tham khảo hình ảnh: [VDCSoft](https://vdcsoft.vn/) và phác thảo trong `../docs/mockups/aveno-sketch.html`.
