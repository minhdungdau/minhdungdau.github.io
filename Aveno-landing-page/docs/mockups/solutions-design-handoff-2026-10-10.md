# Bàn giao thiết kế trang Giải pháp AVENO

## Định dạng ảnh để triển khai — cập nhật 11/10/2026

Chỉ sử dụng các tệp `.webp` trong thư mục assets. Bộ ảnh hiện hành đã được phục hồi độ phân giải bằng ImageGen và xóa viền trắng thừa ở mép ảnh theo yêu cầu của người dùng. WebP dùng chất lượng 92, có nén mất dữ liệu; không còn là bản lossless của bộ ảnh nhỏ trước đây. PNG trùng nội dung đã được dọn theo yêu cầu. Tổng năm ảnh khoảng 748 KiB. Bản trình bày thiết kế cũng dùng WebP, nén lossless để giữ nguyên chữ và bố cục.

## Phạm vi

Đây là bộ thiết kế và tài nguyên; người dùng dùng AI khác triển khai. Trong lượt dọn ngày 11/10/2026, chỉ 10 đường dẫn ảnh PNG trong `website/solutions.html` được đổi sang WebP sau khi người dùng xác nhận; không sửa bố cục hoặc chức năng. Giữ nguyên header/footer đang có trong `website/solutions.html`, kể cả phiên bản tiếng Anh.

Nguồn nội dung: `docs/AVENO_Website_Content_v2_Simplified.xlsx`, sheet `00_Overview` và `03_Solutions`. Tài liệu này là hướng dẫn bàn giao duy nhất. Ảnh concept không phải nguồn chính xác cho câu chữ, logo hoặc thông tin công ty.

Bản thiết kế hiện hành: `docs/mockups/solutions-redesign-concept-v3-exact-2026-10-10.webp`. Hero và an ninh mạng là các hình được người dùng chọn từ thiết kế đầu tiên. Nội dung phạm vi tiếng Việt và tiếng Anh lấy trực tiếp từ cột tương ứng trong Excel.

## Nguyên tắc căn trục — bắt buộc

| Thuộc tính | Desktop 1440px | Mobile 390px |
|---|---|---|
| Khung nội dung | 1220px, x=110…1330 | 342px, x=24…366 |
| Cột | 586px + 48px gutter + 586px | Một cột |
| Trục giữa | x=720, gutter x=696…744 | x=195 |
| Khung hình chương | 586×400px | 342×234px |
| Khoảng cách giữa chương | Padding trên/dưới 64px | Padding trên/dưới 48px |
| Khoảng cách thành phần | 12/16/24/32px | 12/16/24px |

Các phần hero, mục lục, bốn chương và CTA dùng cùng khung nội dung. Hình nằm trong khung, không full bleed. Nền section có thể phủ toàn viewport. Chương 01 và 03: chữ trái, hình phải; chương 02 và 04: hình trái, chữ phải. Cột có chiều rộng bằng nhau nên trục giữa không dịch chuyển. Căn trên nội dung chương, không căn giữa từng đoạn theo chiều dọc.

Ở desktop nhỏ dùng khung min(1220px,90%) và gutter 32px. Dưới 960px chuyển nội dung mới thành một cột. Header/menu dùng breakpoint hiện tại, không thay theo breakpoint của nội dung mới. Ở mobile nhỏ dùng khoảng mép tối thiểu 20px. Không ép các tiêu đề Việt/Anh thành một dòng.

## Thứ tự và nội dung

1. Header hiện tại.
2. Hero navy: nhãn “GIẢI PHÁP HẠ TẦNG”; H1 “Hạ tầng đúng cho bài toán của bạn.”; đoạn dẫn “Kết nối mạng, máy chủ, lưu trữ và bảo mật thành một nền tảng đồng bộ.”; nút “Khám phá giải pháp” tới `#network`, liên kết phụ “Trao đổi nhu cầu” tới `contact.html`; hình tổng quan bên phải.
3. Mục lục bốn nhóm: 01 Mạng / 02 Máy chủ / 03 Lưu trữ / 04 Bảo mật. Desktop bốn cột; mobile 2×2. Không sticky để tránh cạnh tranh với header đang sticky.
4. Bốn chương giải pháp. Dùng nội dung chính từ Excel, chia đoạn theo phạm vi và tiêu chí thiết kế, không thêm cam kết hiệu năng. Mỗi chương có câu định hướng ngắn, hình riêng và dải giá trị 2×2; nhóm bảo mật có ba mục. Lợi ích không dùng chữ nhỏ hơn 15px trên mobile.
5. CTA cuối navy theo cấu trúc và nội dung tại mục “CTA cuối trang — cập nhật 11/10/2026”; một nút dẫn tới Liên hệ.
6. Footer hiện tại.

### Thứ tự mobile của mỗi chương

Số chương → H2 → câu định hướng → hình → nội dung phạm vi → dải giá trị → liên kết công nghệ. Hình không đặt trước tiêu đề chỉ để giữ cách đảo cột desktop. DOM cần có thứ tự đọc hợp lý; việc đảo vị trí hình desktop do CSS chịu trách nhiệm.

### Ma trận giá trị

| Anchor | Tiêu đề | Giá trị |
|---|---|---|
| `network` | Mạng trung tâm dữ liệu | Kết nối ổn định; nâng cấp băng thông theo nhu cầu; quản trị và telemetry; khả năng mở rộng |
| `compute` | Máy chủ doanh nghiệp | Phù hợp ứng dụng; dự phòng; khả năng mở rộng; quản trị vòng đời |
| `storage` | Lưu trữ doanh nghiệp | Dung lượng; hiệu năng; tính sẵn sàng dữ liệu; khả năng mở rộng |
| `security` | An ninh mạng | Bảo vệ mạng/Cloud/endpoint; giảm rủi ro; truy cập an toàn |

Câu định hướng mới là biên tập từ phạm vi trong Excel, không phải lời chứng thực hay tuyên bố kết quả đã đạt được. Copy kỹ thuật phải giữ yếu tố có điều kiện như “có thể”, “theo nhu cầu”, “theo mức độ rủi ro”.

## Hệ thống thị giác

- Font: Be Vietnam Pro trong assets/fonts hiện tại.
- Navy: `#0b1224`; tím: `#8054e8`; chữ chính: `#192438`; chữ phụ: `#637086`; đường phân cách: `#e3e7ee`; nền hình sáng: `#f3f5f9`.
- H1: 56px/1.15 desktop, 34px/1.2 mobile; H2: 34px/1.25 desktop, 28px/1.3 mobile. Thân bài: 16px/1.75 desktop, 15px/1.75 mobile. Đoạn không quá dài; không giảm chữ để ép chiều cao giống ảnh concept.
- Nút: cao tối thiểu 48px; bo 5px; tím cho CTA chính. Nhãn chương 12px có tracking vừa phải. Icon và số chương không thay thế nội dung.
- Ảnh chương: cùng tỷ lệ 586:400; object-fit contain cho minh họa, cover cho ảnh máy chủ. Không cắt mất thiết bị hoặc cạnh shield.
- Chỉ dùng navy ở hero, visual bảo mật và CTA; phần nội dung có nền trắng/xám rất nhạt, đủ khoảng thở.

## Tài nguyên hình ảnh

Thư mục sử dụng: `website/assets/images/solutions-design/`, chỉ có năm ảnh hiện hành. Tiêu đề, copy và lợi ích dùng HTML; nhãn kỹ thuật có sẵn trong hình hero/an ninh mạng được giữ theo yêu cầu ưu tiên giống hình gốc.

| Tên tệp | Vị trí | Cách sử dụng |
|---|---|---|
| `hero-infrastructure.webp` | Hero | 1274×1234px; phục hồi từ concept đầu; giữ nhãn Security/Storage/Compute/Network; contain |
| `network-fabric.webp` | Chương 01 | 1632×964px; giữ hai switch trên, sáu switch giữa và sáu cụm máy chủ dưới; minh họa, không phải sơ đồ Spine–Leaf chuẩn |
| `compute-racks.webp` | Chương 02 | 1624×969px; giữ góc ảnh máy chủ, tiền cảnh rõ và hậu cảnh mờ tự nhiên |
| `storage-platform.webp` | Chương 03 | 1653×952px; giữ bốn biểu tượng và cụm lưu trữ |
| `security-coverage.webp` | Chương 04 | 1744×902px; giữ Cloud/Network/Endpoint, không có slogan trang trí hoặc viền trắng |

Ảnh AI là minh họa, không phải thiết bị thực tế của AVENO, ảnh dự án hay sản phẩm của hãng cụ thể. Không dùng hình ảnh để suy ra cấu hình kỹ thuật, chứng nhận hoặc năng lực đã được kiểm chứng. Với sơ đồ Spine–Leaf chính xác, AI triển khai có thể dựng SVG dựa trên yêu cầu: mỗi Leaf kết nối tới cả hai Spine, nhãn là văn bản thật và có mô tả sơ đồ khái niệm.

Yêu cầu mới nhất: làm sạch viền trắng và tăng độ nét, giữ thiết kế đã chọn. Bản phục hồi giữ bố cục tổng thể, màu sắc, số nhóm thiết bị và nhãn. AI tái dựng chi tiết nhỏ nên không cam kết giống từng pixel của ảnh trích cũ. Bản concept hiện hành được ghép từ bộ ảnh mới để người triển khai dùng đúng hình trong assets.

Ảnh mới có chiều rộng 1274–1744px, phù hợp với khung desktop khoảng 586px và mật độ điểm ảnh 2×. Tỷ lệ ảnh khác nhau: đặt contain trong khung 586×400px, không kéo giãn. Ảnh mạng/máy chủ/lưu trữ có tỷ lệ gần 1.7, an ninh mạng gần 1.93; giữ tỷ lệ thật, dùng nền phù hợp cho khoảng đệm. Không thêm border trắng vào khung ảnh tối.

Phương pháp: công cụ ImageGen tích hợp, chỉnh trực tiếp từng ảnh tham chiếu. Chỉ dẫn chung: phục hồi độ phân giải khoảng 4×; xóa vệt trắng sát mép; giữ bố cục, góc máy, màu, nhãn và kết nối có chủ ý; không thêm thiết bị, khẩu hiệu hoặc viền; làm nét vừa phải, không tạo quầng sáng. Ảnh máy chủ giữ độ sâu trường ảnh tự nhiên.

Alt đề xuất: “Minh họa bốn lớp hạ tầng mạng, máy chủ, lưu trữ và bảo mật”; “Minh họa kết nối thiết bị mạng và máy chủ”; “Tủ máy chủ trong trung tâm dữ liệu — ảnh minh họa do AI tạo”; “Minh họa nền tảng lưu trữ doanh nghiệp”; “Minh họa bảo vệ mạng, Cloud và thiết bị đầu cuối”.

## CTA cuối trang — cập nhật 11/10/2026

Đây là phần biên tập giao diện được người dùng yêu cầu, không phải trích nguyên văn Excel. Giữ một cấu trúc chung: tiêu đề → một câu mô tả → một nút dẫn tới `contact.html`, giữ ngôn ngữ đang chọn. Không có nhãn nhỏ phía trên, liên kết phụ hoặc nút cạnh tranh.

- Tiêu đề: **Tìm phương án phù hợp với hạ tầng của bạn.**
- Câu mô tả: **Chia sẻ bài toán về mạng, máy chủ, lưu trữ hoặc bảo mật để trao đổi phương án phù hợp.**
- Nút: **Trao đổi giải pháp** → `contact.html`.
- Nền: `#111B30`; nút: `#8054E8`; chữ nút trắng. Chữ tiêu đề `#192438`, mô tả `#637086` trên nền sáng; riêng Giải pháp dùng trắng và `#CBD5E1` trên nền navy.

Khung nội dung tối đa 1220px, cùng trục giữa với toàn trang; khối chữ căn giữa, giới hạn khoảng 1120px trên desktop để câu mô tả có thể nằm một dòng ở 1440px. Khi cần xuống dòng, để tự nhiên, không giảm cỡ chữ. Tiêu đề 32px/1.3, mô tả 16px/1.65; đệm trên/dưới 64px, khoảng tiêu đề–mô tả 16px, mô tả–nút 24px. Nút cao 48px, chữ 16px, đệm ngang 24px, bo 5px. Không ép chiều cao cố định khi nội dung hoặc ngôn ngữ thay đổi.

Mobile: đệm trên/dưới 40px, lề ngang 20–24px; tiêu đề 26px/1.3, mô tả 15px/1.65; khoảng tiêu đề–mô tả 12px, mô tả–nút 24px. Khối cao theo nội dung. Nút luôn dưới câu mô tả, focus nhìn rõ.

Bản hiện hành dùng nền sạch với sắc độ nhẹ, bỏ sóng chấm ở CTA để giảm sự lặp giữa các trang. Dựng bằng HTML/CSS khi triển khai; không dùng ảnh chứa chữ hoặc nút làm nền. Không cần thêm ảnh vào assets cho CTA này. Các ảnh minh họa nội dung vẫn dùng đúng WebP đã bàn giao. Trang Dịch vụ được tạm dừng, chưa áp dụng hệ CTA mới; trang Liên hệ không thêm CTA cuối.

Tiếng Anh đề xuất (biên tập giao diện):
- Heading: **Find an approach that fits your infrastructure.**
- Description: **Share your networking, compute, storage or security needs to discuss a suitable approach.**
- Button: **Discuss solutions**.

Công cụ: ImageGen tích hợp tạo bốn dải CTA cùng hệ căn giữa; sau đó ghép riêng dải của trang vào mockup, bảo toàn pixel phần nội dung và header/footer. Prompt cho dải này: “Flat enterprise website CTA, Be Vietnam Pro, centered heading / one description / one button, background #111B30, button #8054E8, exact Vietnamese copy shown above, identical vertical rhythm, no eyebrow, no waves, no dots, no photos or other elements.” Toàn bộ CTA sheet dùng cùng bố cục, mỗi dải rộng tương đương viewport 1440px và cao tham chiếu 300px. Ảnh là tham chiếu thị giác; thông số spacing và văn bản trong mục này là đặc tả để triển khai.

## Tiếng Anh

Dùng cột English Content của Excel cho nội dung phạm vi. Hero: “Infrastructure for your business needs.” Đoạn dẫn: “Bring networking, compute, storage and cybersecurity together as a coordinated foundation.” CTA: “Explore solutions” / “Discuss your requirements”. Closing và CTA cuối dùng nội dung tiếng Anh tại mục CTA cuối trang bên dưới. Không dịch bằng cách thay chữ trong ảnh.

## Kiểm tra khi triển khai

Giữ nguyên các anchor từ trang chủ/sản phẩm. Kiểm tra viewport 1440/1024/768/390/320px, cả hai ngôn ngữ: không tràn ngang, không cắt tiêu đề, các chương dùng cùng mép và gutter. Chuyển ngôn ngữ không mất nhóm đang đọc. Kiểm tra menu, bàn phím, focus, reduced motion và không JavaScript. Header/footer phải giống bản hiện tại. Không viết lại chức năng form Liên hệ trong phạm vi thiết kế này.

## Ghi chú về ảnh concept

Bản concept hiện hành đã được ghép đúng các ảnh trong bộ assets. Header/footer trong concept vẫn là tham chiếu thị giác; khi triển khai phải tái sử dụng HTML/CSS hiện tại. Câu chữ có thể khác Excel; nếu có khác biệt, tài liệu này và Excel được ưu tiên. Tọa độ trong bảng căn trục là quy tắc chính xác để AI triển khai tuân theo.
