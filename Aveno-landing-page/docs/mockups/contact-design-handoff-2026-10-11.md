# Bàn giao phương án mới trang Liên hệ — 11/10/2026

Bản thiết kế hiện hành: `contact-redesign-concept-2026-10-11.webp`, 1440×1100px, WebP lossless. Phương án này thay hoàn toàn phần nội dung của bản có hero navy trước đó. Header và footer hiện tại được giữ nguyên; không sửa code website.

## Hướng thiết kế

Một vùng nội dung sáng, hai cột cùng bắt đầu ở đầu trang. Bên trái là lời dẫn và thẻ thông tin công ty nền sáng gọn; bên phải là biểu mẫu. Không có hero navy toàn chiều ngang, icon liên hệ lớn hoặc nút biểu mẫu kéo dài toàn cột. Phương án này ưu tiên khoảng thở, chữ dễ đọc và hành động liên hệ rõ ràng.

## Bố cục desktop

1440px: khung nội dung 1220px, lề 110px. Cột trái khoảng 460px, cột phải khoảng 716px; gutter khoảng 44px. Hai cột căn trên cùng trục. Bắt đầu nội dung khoảng 44px dưới header; kết thúc cách footer khoảng 40px. Hai cột cao theo nội dung, không ép bằng chiều cao cố định.

Cột trái:

- Nhãn LIÊN HỆ AVENO nhỏ, tím.
- H1 **Kết nối với AVENO.**, hai dòng; chữ navy, điểm nhấn tím tiết chế.
- Câu dẫn nguyên văn `06_Contact!C10`.
- Thẻ sáng gọn: AVENO PTY LTD; Ông David Tran · Giám đốc điều hành; địa chỉ; link Xem bản đồ; email và điện thoại ở hai ô nhỏ cuối thẻ. Nền xám tím rất nhạt #f3f5f9 như các section sáng của trang Giới thiệu; viền #e3e7ee, không bóng đổ. Tên công ty và nhãn navy #192438, chữ phụ #637086; thanh nhấn và link bản đồ màu tím. Đường chia xám nhạt, không dùng icon lớn hoặc ảnh minh họa.

Cột phải:

- Biểu mẫu nền trắng, viền xám nhạt, bo 8px, padding 32–40px; không cần bóng đổ.
- Tiêu đề **Chia sẻ nhu cầu của bạn**; câu phụ **Thông tin để bắt đầu trao đổi.**
- Hai hàng trường Họ và tên/Công ty, Email/Điện thoại; textarea Nhu cầu toàn chiều ngang.
- Nhãn thường trực ngoài trường; input khoảng 48px cao, nền xám rất nhạt; textarea khoảng 110–150px cao.
- Nút tím **Gửi yêu cầu tư vấn →**, khoảng 220×48px, căn trái, không kéo dài toàn cột.

Không thêm CTA cuối vì biểu mẫu đã là hành động chính. H1 và các nhãn biên tập là đề xuất của phương án này, không phải trích nguyên văn Excel.

## Nội dung liên hệ theo Excel

- Công ty: AVENO PTY LTD — `06_Contact!C5`.
- Người đại diện: Ông David Tran – Giám đốc điều hành — `C6`.
- Địa chỉ: 9 Windsor Avenue, Springvale VIC 3171, Australia — `C7`.
- Điện thoại và email: **Chờ cập nhật** — `C8:C9`; không bịa dữ liệu.
- Link Xem bản đồ dùng địa chỉ đã cung cấp; không thêm bản đồ nhúng lớn, chân dung hoặc ảnh stock.

## Đúng năm trường biểu mẫu

| Thứ tự đọc | Nhãn | Loại | Lựa chọn UX |
|---|---|---|---|
| 1 | Họ và tên | Văn bản, autocomplete name | Bắt buộc |
| 2 | Công ty | Văn bản, autocomplete organization | Không bắt buộc |
| 3 | Email | Email, autocomplete email | Bắt buộc |
| 4 | Điện thoại | Tel, autocomplete tel | Không bắt buộc |
| 5 | Nhu cầu | Textarea | Bắt buộc |

Năm trường theo `06_Contact!D10`. Excel chưa chỉ định trường bắt buộc; lựa chọn trong bảng là đề xuất UX. Textarea gợi ý “Mô tả hạ tầng hiện tại và nhu cầu của bạn…”. Ghi “* Thông tin bắt buộc” trước nút. Không thêm dropdown, ngân sách, ngày triển khai hoặc trường thứ sáu.

## Trạng thái gửi

Lỗi dưới trường tương ứng, giữ nội dung đã nhập, focus trường lỗi và không chỉ dùng màu đỏ. Khi gửi: nút Đang gửi…, ngăn gửi trùng. Chỉ hiển thị Đã gửi yêu cầu khi hệ thống nhận xác nhận thành công; không hứa thời gian phản hồi. Nếu thất bại: báo chưa gửi được, giữ dữ liệu và cho thử lại.

Thiết kế này không tạo backend. Mã hiện tại chỉ tạo bản yêu cầu `.txt`. Nếu AI triển khai vẫn giữ chức năng đó, dùng nhãn **Tạo bản yêu cầu** và trạng thái **Chưa gửi tới AVENO**; chỉ dùng Gửi yêu cầu tư vấn sau khi đã có hệ thống nhận yêu cầu.

## Chữ, màu và responsive

Be Vietnam Pro hiện tại; H1 48–56px, H2 biểu mẫu 28–32px; đoạn dẫn 16–18px/1.6; nhãn trường và nội dung nhập tối thiểu 16px. Navy #0b1224, tím #8054e8, chữ #192438, chữ phụ #637086. Mục tiêu bấm ít nhất 44px, focus rõ. Chữ, nút và biểu tượng là phần tử HTML/SVG, không dùng ảnh chụp bản thiết kế làm website.

Dưới 960px: lời dẫn → biểu mẫu → thẻ thông tin công ty → footer. Thẻ công ty không đẩy biểu mẫu xuống quá sâu trên điện thoại. Dưới 640px mỗi trường một hàng, thứ tự như bảng; email/điện thoại trong thẻ công ty cũng có thể xếp dọc. Lề mobile 20px, H1 32–36px, không tràn ngang. Header/menu/footer giữ hành vi hiện tại. Đây là đặc tả responsive, chưa phải kết quả thử code mới.

## Phương pháp và kiểm tra bàn giao

ImageGen tích hợp tạo phương án mới: nền sáng, bố cục biên tập hai cột, lời dẫn trái, thẻ thông tin nền sáng nhỏ, biểu mẫu phải với nút gọn; bỏ hero navy toàn chiều ngang và icon lớn. Ghép nguyên header/footer từ bản hiện hành để bảo toàn chi tiết. Không cần ảnh mới trong assets. Chỉ giữ bản chốt WebP và tài liệu này, dọn bản nháp không dùng.

AI triển khai đối chiếu đủ năm trường, nội dung liên hệ theo Excel, trạng thái gửi thực tế, 1440/1024/768/390/320px, Việt/Anh và thao tác bàn phím. Bản thiết kế không phải kết quả đã triển khai trên website.

## Nội dung nguồn để triển khai

Nguồn: docs/AVENO_Website_Content_v2_Simplified.xlsx. Dùng văn bản dưới đây khi triển khai, không OCR từ ảnh hoặc tự thêm năng lực.

### Contact CTA — 06_Contact!C10

Hãy chia sẻ nhu cầu về Data Center hoặc hạ tầng doanh nghiệp. Đội ngũ của chúng tôi sẽ liên hệ để trao đổi kiến trúc và phương án công nghệ phù hợp.

Bản tiếng Anh từ 06_Contact!B10:

Tell us about your data center or enterprise infrastructure requirements. Our team will contact you to discuss the appropriate architecture and technology options.


Hiệu chỉnh theo yêu cầu làm sáng: ImageGen chỉ đổi bảng màu thẻ thông tin liên hệ ở cột trái sang nền sáng theo trang Giới thiệu. Bố cục, nội dung, biểu mẫu, header và footer giữ nguyên; footer vẫn nền navy. Bản cuối ghép riêng vùng thẻ đã chỉnh để bảo toàn các vùng còn lại.
