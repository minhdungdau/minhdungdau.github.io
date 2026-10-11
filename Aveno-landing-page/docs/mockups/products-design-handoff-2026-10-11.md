# Bàn giao thiết kế Sản phẩm & Công nghệ — theo Excel

## Phạm vi

Bản thiết kế hiện hành: `docs/mockups/products-redesign-concept-2026-10-11.webp`, 857×1179px. Bản này thay thế thiết kế ba chương dài trước đây. Chỉ cập nhật bản trình bày, tài nguyên và tài liệu; không sửa HTML/CSS/JavaScript hoặc commit. Giữ header/footer đang có, cả tiếng Việt và tiếng Anh.

Nguồn: `docs/AVENO_Website_Content_v2_Simplified.xlsx`, sheet `05_Products_Tech`, các hàng 5–7; hướng thị giác và nguyên tắc thương hiệu lấy từ `00_Overview` và `07_SEO_Dev_Notes`.

## Đối chiếu yêu cầu

| Yêu cầu trong Excel | Nguồn | Thể hiện trong bản mới |
|---|---|---|
| Danh mục gọn theo hãng/nhóm công nghệ, không cần SKU | `05_Products_Tech!A2` | Một khu vực danh mục với ba thẻ hãng |
| Một brand card và ba nhóm cho Arista | `05_Products_Tech!D5` | Thẻ Arista, đoạn giới thiệu C5, ba nhóm nguyên tên |
| Một brand card và ba nhóm cho Dell Technologies | `05_Products_Tech!D6` | Thẻ Dell, đoạn giới thiệu C6, ba nhóm nguyên tên |
| Một brand card và ba nhóm cho Check Point | `05_Products_Tech!D7` | Thẻ Check Point, đoạn giới thiệu C7, ba nhóm nguyên tên |
| CTA khám phá giải pháp tương ứng | `05_Products_Tech!E5:E7` | Một CTA dưới mỗi thẻ, giữ mục đích khám phá giải pháp |
| Navy/đen/trắng/tím; hình Data Center và hạ tầng | `00_Overview!B11` | Hero navy với ảnh tủ máy chủ, nội dung sáng, tím làm điểm nhấn |
| Không tuyên bố tư cách đối tác khi chưa xác nhận | `00_Overview!B13` | Tên hãng dạng chữ, không badge hoặc tuyên bố đối tác |

Excel quy định cấu trúc một thẻ hãng và ba nhóm; ba cột trên desktop là lựa chọn trình bày của thiết kế. Không thêm mô tả riêng dưới chín nhóm công nghệ. Các đoạn giới thiệu giữ nguyên nội dung tiếng Việt trong Excel, không rút gọn hoặc tự thêm tính năng.

## Nội dung ba thẻ — tiếng Việt

### Arista

Nội dung từ `05_Products_Tech!C5`:

Các công nghệ mạng Data Center và Cloud bao gồm switching hiệu năng cao, routing, EOS và CloudVision phục vụ tự động hóa, telemetry và vận hành mạng.

Ba nhóm từ D5: **Data Center Switching / Routing / EOS & CloudVision**.

CTA: **Khám phá giải pháp Arista** — bản dịch của “Explore Arista Solutions” tại E5.

### Dell Technologies

Nội dung từ `05_Products_Tech!C6`:

Các công nghệ Compute, Storage và Networking doanh nghiệp, bao gồm máy chủ PowerEdge, nền tảng lưu trữ doanh nghiệp và PowerSwitch.

Ba nhóm từ D6: **Compute / Storage / Networking**.

CTA: **Khám phá giải pháp Dell** — bản dịch của “Explore Dell Solutions” tại E6. Không đổi CTA này thành trao đổi cấu hình hoặc liên hệ; không dẫn toàn bộ khối Dell chỉ tới máy chủ.

### Check Point

Nội dung từ `05_Products_Tech!C7`:

Các công nghệ Network Security, Cloud Security và Endpoint Protection cho môi trường doanh nghiệp và Hybrid.

Ba nhóm từ D7: **Network Security / Cloud Security / Endpoint Security**.

CTA: **Khám phá giải pháp bảo mật** — bản dịch của “Explore Security Solutions” tại E7. Đoạn giới thiệu dùng Endpoint Protection, tên nhóm dùng Endpoint Security, đúng hai cột tương ứng trong Excel.

## Nội dung tiếng Anh

| Hãng | Đoạn giới thiệu từ cột B | CTA từ cột E |
|---|---|---|
| Arista | Data center and cloud networking technologies including high-performance switching, routing, EOS and CloudVision for automation, telemetry and network operations. | Explore Arista Solutions |
| Dell Technologies | Enterprise compute, storage and networking technologies including PowerEdge servers, enterprise storage platforms and PowerSwitch networking. | Explore Dell Solutions |
| Check Point | Network security, cloud security and endpoint protection technologies for enterprise and hybrid environments. | Explore Security Solutions |

Tên hãng, chín nhóm và thứ tự giữ nguyên giữa hai ngôn ngữ. Không thêm SKU, giá hoặc model mới.

## Cấu trúc trang

1. Header hiện tại, active Sản phẩm & Công nghệ.
2. Hero navy: nhãn “DANH MỤC CÔNG NGHỆ”; H1 “Sản phẩm & Công nghệ”; dẫn “Các nhóm công nghệ cho Data Center và hạ tầng doanh nghiệp.”; nút “Khám phá danh mục” → `#technology-catalog`; ảnh Data Center bên phải.
3. Khu vực danh mục: nhãn “ARISTA · DELL TECHNOLOGIES · CHECK POINT”; H2 “Danh mục theo hãng”; ba thẻ hãng ngang hàng trên desktop, theo thứ tự Arista → Dell → Check Point.
4. CTA cuối theo ngữ cảnh, nền xanh tím nhạt; dùng nội dung và thông số tại mục “CTA cuối trang — cập nhật 11/10/2026”.
5. Footer hiện tại, giữ nội dung và thông báo nhãn hiệu.

Hero, nhãn danh mục và dải liên hệ là phần biên tập giao diện, không phải trích nguyên văn Excel. Chúng chỉ giới thiệu phạm vi và tạo kênh liên hệ theo mục tiêu tại `00_Overview!B9`, không thêm tuyên bố năng lực hoặc kết quả.

## CTA và anchor

Excel cung cấp tên CTA, chưa quy định URL đích. Đích nội bộ dưới đây là đề xuất thiết kế:

| CTA | Đích đề xuất |
|---|---|
| Khám phá giải pháp Arista | `solutions.html#network` |
| Khám phá giải pháp Dell | `solutions.html` — bao gồm mạng, máy chủ và lưu trữ |
| Khám phá giải pháp bảo mật | `solutions.html#security` |

Giữ anchor `arista`, `dell`, `checkpoint` cho từng thẻ để các liên kết hiện có vẫn hoạt động. Chín tên nhóm là nội dung danh mục; không cần thêm chín mô tả hoặc chín CTA cạnh tranh. Các URL ở cột G của Excel là nguồn tham khảo chính thức, không tự coi là đích CTA đã được khách hàng xác nhận.

## Lưới, chữ và responsive

Desktop 1440px: khung nội dung tối đa 1220px; ba cột bằng nhau, gap 24px, mỗi thẻ khoảng 391px. Hero dùng hai cột cân bằng. Hero, tiêu đề danh mục và hàng thẻ cùng mép khung. CTA cuối phủ toàn chiều ngang; nội dung bên trong giữ khung chung, căn giữa, không đặt trong hộp nhỏ hoặc bố cục chữ trái/nút phải. Thẻ trắng, viền xám nhạt, bo 8px, padding 28–32px; không dùng các minh họa CGI lớn dưới tên hãng.

Trong mỗi thẻ: tên hãng → đoạn giới thiệu → ba hàng nhóm công nghệ → CTA. Các thẻ ngang nhau, ba hàng và CTA cùng trục ngang. Dùng min-height phù hợp cho vùng giới thiệu hoặc lưới chung; không cắt nội dung, không giảm font chỉ để căn đều. Icon nhỏ, nét tím đồng nhất, đứng sau tên hãng và nội dung trong phân cấp thị giác.

Be Vietnam Pro hiện tại. Navy `#0b1224`, tím `#8054e8`, chữ `#192438`, chữ phụ `#637086`, nền `#f3f5f9`, viền `#e3e7ee`. H1 52–56px/1.15; H2 36px/1.25; tên hãng 28px/1.3; thân bài và nhóm 16px/1.65. CTA ít nhất 16px, vùng bấm tối thiểu 44px. Không ép Dell Technologies hoặc Data Center Switching thành một dòng nếu thiếu chỗ.

Dưới 1100px, xếp thẻ một cột để không có một hãng đơn độc trên hàng hai; không đổi thứ tự. Dưới 960px, hero một cột. Mobile 390/320px: lề 20px; H1 32–34px, H2 28px, tên hãng 24px, thân bài ít nhất 15px; mỗi thẻ tự cao theo nội dung. Header/menu dùng hành vi hiện tại. Không thêm slider hoặc tab giấu hãng. CTA cuối trên mobile vẫn căn giữa, tiêu đề và câu dẫn xuống dòng tự nhiên; nút nằm dưới câu dẫn. Bản trình bày hiện hành là desktop; responsive là đặc tả để AI triển khai kiểm tra, chưa phải kết quả thử trên website.

## Ảnh và tệp hiện hành

Ảnh hero: `website/assets/images/solutions-design/compute-racks.webp`, 1624×969px, khoảng 175 KiB. Dùng lại tệp hiện có, không tạo bản trùng trong thư mục sản phẩm. Alt: “Tủ máy chủ trong trung tâm dữ liệu — ảnh minh họa”. Đây là hình hạ tầng chung, không đại diện cho sản phẩm cụ thể của một hãng. Bản trình bày dùng đúng WebP này, giữ tỷ lệ bằng contain hoặc cover nhẹ trong cột phải; không kéo giãn.

Bản thiết kế lưu WebP lossless để giữ chữ. Không giữ PNG hoặc bản thiết kế cũ trùng nội dung trong dự án. Bốn ảnh CGI của thiết kế cũ được dọn sau khi kiểm tra không còn mã website tham chiếu. Ảnh hero mới sử dụng trực tiếp tệp WebP hiện có trong thư mục Giải pháp, không tạo bản sao.

## Kiểm tra bàn giao

Đối chiếu đầy đủ C5:C7, D5:D7 và E5:E7: ba đoạn nguyên văn, chín nhóm đúng tên, ba CTA đúng mục đích. Không có mô tả công nghệ tự thêm, SKU, giá hoặc tuyên bố đối tác. Giữ header/footer; ảnh WebP tồn tại; mã website không thay đổi. Khi triển khai, kiểm tra desktop và mobile, hai ngôn ngữ, đủ nội dung, focus bàn phím, liên kết và anchor.

## Công cụ và chỉ dẫn tạo hình

ImageGen tích hợp: thiết kế mới phần chính theo Excel; ba thẻ hãng bằng nhau, nguyên văn ba đoạn, đúng chín nhóm và ba CTA; ảnh Data Center thay các hình CGI; không thêm số, giá, SKU, logo giả hoặc tính năng. Header/footer lấy từ bản hiện hành. Sau khi tạo, căn thẻ vào chung khung, ghép đúng ảnh WebP và giữ nguyên header/footer. Lượt làm sạch chỉ xóa các mảng nền hình chữ nhật thừa trong hero, không thay nội dung.


## CTA cuối trang — cập nhật 11/10/2026

Đây là phần biên tập giao diện được người dùng yêu cầu, không phải trích nguyên văn Excel. Giữ một cấu trúc chung: tiêu đề → một câu mô tả → một nút dẫn tới `contact.html`, giữ ngôn ngữ đang chọn. Không có nhãn nhỏ phía trên, liên kết phụ hoặc nút cạnh tranh.

- Tiêu đề: **Lựa chọn công nghệ theo nhu cầu hạ tầng.**
- Câu mô tả: **Trao đổi về nhu cầu ứng dụng và môi trường hiện tại để định hướng lựa chọn công nghệ.**
- Nút: **Trao đổi về công nghệ** → `contact.html`.
- Nền: `#E8EDF9`; nút: `#111B30`; chữ nút trắng. Chữ tiêu đề `#192438`, mô tả `#637086` trên nền sáng; riêng Giải pháp dùng trắng và `#CBD5E1` trên nền navy.

Khung nội dung tối đa 1220px, cùng trục giữa với toàn trang; khối chữ căn giữa, giới hạn khoảng 1120px trên desktop để câu mô tả có thể nằm một dòng ở 1440px. Khi cần xuống dòng, để tự nhiên, không giảm cỡ chữ. Tiêu đề 32px/1.3, mô tả 16px/1.65; đệm trên/dưới 64px, khoảng tiêu đề–mô tả 16px, mô tả–nút 24px. Nút cao 48px, chữ 16px, đệm ngang 24px, bo 5px. Không ép chiều cao cố định khi nội dung hoặc ngôn ngữ thay đổi.

Mobile: đệm trên/dưới 40px, lề ngang 20–24px; tiêu đề 26px/1.3, mô tả 15px/1.65; khoảng tiêu đề–mô tả 12px, mô tả–nút 24px. Khối cao theo nội dung. Nút luôn dưới câu mô tả, focus nhìn rõ.

Bản hiện hành dùng nền sạch với sắc độ nhẹ, bỏ sóng chấm ở CTA để giảm sự lặp giữa các trang. Dựng bằng HTML/CSS khi triển khai; không dùng ảnh chứa chữ hoặc nút làm nền. Không cần thêm ảnh vào assets cho CTA này. Các ảnh minh họa nội dung vẫn dùng đúng WebP đã bàn giao. Trang Dịch vụ được tạm dừng, chưa áp dụng hệ CTA mới; trang Liên hệ không thêm CTA cuối.

Tiếng Anh đề xuất (biên tập giao diện):
- Heading: **Choose technology around your infrastructure needs.**
- Description: **Discuss your application needs and current environment to guide technology selection.**
- Button: **Discuss technology**.

Công cụ: ImageGen tích hợp tạo bốn dải CTA cùng hệ căn giữa; sau đó ghép riêng dải của trang vào mockup, bảo toàn pixel phần nội dung và header/footer. Prompt cho dải này: “Flat enterprise website CTA, Be Vietnam Pro, centered heading / one description / one button, background #E8EDF9, button #111B30, exact Vietnamese copy shown above, identical vertical rhythm, no eyebrow, no waves, no dots, no photos or other elements.” Toàn bộ CTA sheet dùng cùng bố cục, mỗi dải rộng tương đương viewport 1440px và cao tham chiếu 300px. Ảnh là tham chiếu thị giác; thông số spacing và văn bản trong mục này là đặc tả để triển khai.
