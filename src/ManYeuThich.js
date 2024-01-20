import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import React from 'react'

const ManYeuThich = () => {
    const danhSach = [
        { id: 1, tenSP: 'Cà phê Arabica', giaSP: 500000, loaiSP: 'cfvn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202112281009085973.jpg', mota: 'Cà phê Arabica có tên khoa học theo danh pháp hai phần là: Coffea arabica, do loài cà phê này có lá nhỏ, cây có một số đặc điểm hình thái giống như cây chè - một loài cây công nghiệp phổ biến ở Việt Nam. Cà phê chè có hai loại: cà phê moka và cà phê catimor.Đây là loài có giá trị kinh tế nhất trong số các loài cây cà phê. Cà phê chè chiếm 61% các sản phẩm cà phê toàn thế giới. Cà phê arabica còn được gọi là Brazilian Milds nếu nó đến từ Brasil, gọi là Colombian Milds nếu đến từ Colombia, và gọi là Other Milds nếu đến từ các nước khác. Qua đó có thể thấy Brasil và Colombia là hai nước xuất khẩu chính loại cà phê này, chất lượng cà phê của họ cũng được đánh giá cao nhất. Các nước xuất khẩu khác gồm có Ethiopia, México, Guatemala, Honduras, Peru, Ấn Độ.Cây cà phê arabica ưa sống ở vùng núi cao. Người ta thường trồng nó ở độ cao từ 1000-1500 m. Cây có tán nhỏ, màu xanh đậm, lá hình oval. Cây cà phê trưởng thành có thể cao từ 4–6 m, nếu để mọc hoang dã có thể cao đến 10 m. Quả hình bầu dục, mỗi quả chứa hai hạt cà phê.Cà phê chè sau khi trồng khoảng 3 đến 4 năm thì có thể bắt đầu cho thu hoạch. Thường thì cà phê 25 tuổi đã được coi là già, không thu hoạch được nữa. Thực tế nó vẫn có thể tiếp tục sống thêm khoảng 70 năm. Cây cà phê arabica ưa thích nhiệt độ từ 16-25°C, lượng mưa khoảng trên 1000 mm.Trên thị trường cà phê chè được đánh giá cao hơn cà phê vối (coffea canephora hay coffea robusta) vì có hương vị thơm ngon và chứa ít hàm lượng caffein hơn. Một bao cà phê chè (60 kg) thường có giá cao gấp 2 lần một bao cà phê vối.Việt Nam là nước xuất khẩu cà phê lớn thứ hai thế giới nhưng chủ yếu là cà phê vối. Năm 2005 dự kiến diện tích trồng cà phê chè mới đạt khoảng 10% tổng diện tích trồng cà phê cả nước (khoảng 40.000 ha/410.000 ha). Hiện cà phê chè được trồng ở các tỉnh Lâm Đồng ở Tây Nguyên, vùng thành phố Sơn La, huyện Mai Sơn, huyện Thuận Châu (Sơn La) và Mường Ảng (Điện Biên) ở Tây Bắc.' },
        { id: 2, tenSP: 'Cà phê Robusta', giaSP: 450000, loaiSP: 'cfvn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121539225779.jpg', mota: 'Cà phê Robusta là cây quan trọng thứ hai trong các loài cà phê. Khoảng 39% các sản phẩm cà phê được sản xuất từ loại cà phê này. Nước xuất khẩu cà phê vối lớn nhất thế giới là Việt Nam.[1] Các nước xuất khẩu quan trọng khác gồm Brasil, Indonesia, Ấn Độ, Malaysia, Uganda, Côte d Ivoire. Ở Brasil cà phê vối được gọi với tên là Conilon[2][3]. Đặc điểm Cây cà phê vối có dạng cây gỗ hoặc cây bụi, chiều cao của cây trưởng thành có thể lên tới 10 m. Quả cà phê có hình tròn, hạt nhỏ hơn hạt cà phê chè (tức cà phê arabica). Hàm lượng caffein trong hạt cà phê vối khoảng 2-4%, trong khi ở cà phê chè chỉ khoảng 1-2%.Giống như cà phê chè, cây cà phê vối 3-4 tuổi có thể bắt đầu thu hoạch. Cây cho hạt trong khoảng từ 20 đến 30 năm. Cà phê vối ưa sống ở vùng nhiệt đới, độ cao thích hợp để trồng cây là dưới 1000 m. Nhiệt độ ưa thích của cây khoảng 24-29°C, lượng mưa khoảng trên 1.000 mm. Cây cà phê vối cần nhiều ánh sáng mặt trời hơn so với cây cà phê chè.Nguồn gốc, phân bố bản địaCó nguồn gốc từ các khu rừng cao nguyên ở Ethiopia, C. canephora mọc hoang dã tại Tây và Trung châu Phi, từ Liberia tới Tanzania và về phía nam tới Angola. Nó không được công nhận như một loài của chi Coffea cho tới tận năm 1897[4], hơn 100 năm sau loài Coffea arabica[5][6]. Nó cũng được tự nhiên hóa tại Borneo, Polynesia thuộc Pháp, Costa Rica, Nicaragua, Jamaica và Tiểu Antilles[7].Trồng và xuất khẩu tại Việt Nam Cà phê vối chứa hàm lượng caffein cao hơn và có hương vị không tinh khiết bằng cà phê chè, do vậy mà được đánh giá thấp hơn. Giá một bao cà phê vối thường chỉ bằng một nửa so với cà phê chè. Niên vụ 2012- 2013 Việt Nam xuất khẩu khoảng 1,426 triệu tấn (~ 23,77 triệu bao, loại 60 kg/bao) cà phê loại này[8], chiếm gần một nửa lượng cà phê vối xuất khẩu của toàn thế giới (trên 60 triệu bao). Hiện nay gần 90% diện tích cà phê ở Việt Nam được trồng cà phê vối, 10% trồng cà phê chè, khoảng 1% còn lại được trồng cà phê mít (Coffea excelsa).' },
        { id: 3, tenSP: 'Cà phê Culi', giaSP: 600000, loaiSP: 'cfvn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121539504360.jpg', mota: 'Cà phê Culi robusta là một loại trái cà phê đặc biệt trên cây cà phê, sự khác biệt của nó so với những trái cà phê khác là nó chỉ có một hạt trong một quả ( cà phê thường có 2 hạt trong một quả). Sự khác biệt này cũng tạo cho cafe rang xay culi có hương vị khác biệt so với các loại cà phê rang xay thông thường. Cà phê hạt culi không có nhiều và qua trình thu hái sàng lọc cũng phức tạp hơn cafe thông thường, sự khác biệt này làm cho giá hạt culi robusta cao hơn hẳn cà phê robusta. Cà phê Culi robusta nguyên chất có hương vị đậm đà hơn, đắng hơn, béo hơn, cafein nhiều hơn so với cà phê robusta thông thường, mùi hương sâu lắng, có vị chát, hậu vị đắng kéo dài. Phù hợp với người thích cà phê đắng đậm, thích sự sâu lắng. 2. Lợi ích Hơn nữa, cà phê culi robusta còn có tác dụng kích thích hệ thần kinh, giúp cải thiện tập trung và tăng cường năng lượng. Có lẽ đây là lý do tại sao cà phê đậm đặc được ưa chuộng bởi những người làm việc văn phòng, những người cần tỉnh táo để bắt đầu một ngày mới hoặc những người cần tập trung cao độ trong công việc sáng tạo cảm thấy mình như được tái sinh cho một ngày khởi đầu mới mẻ. Tuy nhiên, khuyến cáo với hàm lượng caffeine cao trong cà phê đậm đặc có thể làm cho khách hàng say cà phê. Vì vậy, buổi sáng sau khi đã ăn sáng là thời điểm thích hợp nhất để nhâm nhi tách cà phê để khởi động sự năng động và tích cực của chính mình. Có lẽ cảm giác được thưởng thức một tách cà phê đậm là một trải nghiệm tuyệt vời. Cà phê culi robusta không chỉ là một thức uống thơm ngon, mà còn là một trải nghiệm tinh tế cho giác quan. Từ hương thơm đặc trưng đến hương vị đắng đậm, tất cả đều góp phần tạo nên một trải nghiệm cảm xúc tuyệt vời. 3. Cách pha phin Bước 1: Chuẩn bị dụng cụ bao gồm: Cà phê Tâm Cà Coffee: Được rang và xay thành bột hoặc có thể chọn mua cà phê hạt nếu có máy xay cà phê. Phin pha cà phê: Có nhiều loại phin khác nhau được làm từ gốm, nhựa, nhôm, inox,… ' },
        { id: 4, tenSP: 'Cà phê Cherry', giaSP: 1300000, loaiSP: 'cfvn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121540125970.jpg', mota: 'Có xuất xứ từ đất nước Liberia, thuộc phía tây của Châu Phi (có lẽ đây là lý do bạn ấy có tên quốc tế là Liberica), cây cà phê cherry cho ra những trái cà phê lớn hơn, không đồng đều như các dòng cà phê Arabica. Khi rang lên, cà phê cherry sẽ có hương hoa và mùi hoa quả, hậu vị rất tốt và có mùi mộc. Theo cảm nhận của chúng tôi và của nhiều người thưởng thức, loại cà phê này có mùi mít chín, cho nên tại Việt Nam nó còn được gọi là cà phê mít. Nếu có điều kiện bạn có thể thực hiện thử nghiệm sau, bạn uống một ít cà phê Arabica rang vừa hoặc rang nâu sau khi ăn một múi mít chín, hãy ghi nhớ cảm nhận về mùi vị này. Sau đó pha một ly cà phê cherry cũng rang vừa hoặc rang nâu và so sánh 2 trải nghiệm trên, bạn sẽ thấy vì sao mọi người nói loại cà phê này là cà phê mít.Nếu ai may mắn uống được loại cà phê này, đều sẽ nói rằng nó không hề giống với bất kỳ loại cà phê nào họ đã uống trước đó. Nó có hương vị rất phong phú với nhiều loại mùi hương khác nhau. Chính vì sự phức tạp và phong phú trong hương vị của mình mà cà phê cherry thường được dùng để phối trộn cùng với các loại cà phê khác như Robusta và Arabica để tạo ra các sản phẩm độc đáo, khác lạ.Vào những thập niên của năm 1890, cà phê Liberica này được vận chuyển đi và trồng ở nhiều vùng trên thế giới, trong đó có những vùng như Indonesia, Philipines. Lúc bấy giờ, cây cà phê mít này được trồng rộng rãi do cơn bệnh gỉ sắt ở cây cà phê bùng phát và làm chết rất nhiều cây cà phê Arabica.Bệnh gỉ sắt bắt nguồn từ một loại nấm có tên là Hemileia vastatrix. Những cây bị nhiễm loại nấm này sẽ bắt đầu xuất hiện những đốm màu nâu nhạt giống như gỉ sắt trên lá. Lúc này, cây cà phê sẽ bị mất lá dần và cũng mất đi khả năng kết trái.So với cây cà phê Arabica, cây cà phê cherry dễ trồng hơn, thích nghi tốt hơn với khí hậu, khả năng kháng chịu sâu bệnh tốt hơn và có thể được trồng ở nơi có độ cao thấp.' },
        { id: 5, tenSP: 'Cà phê Moka', giaSP: 590000, loaiSP: 'cfvn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121541144416.jpg', mota: 'Cà phê Moka là một dạng thảo mộc thuộc chi Arabica Coffee. Ở Việt Nam, cây cà phê Moka gắn liền với địa danh Huyện Cầu Đất, Tỉnh Lâm Đồng. Nơi này hội tụ đủ mọi điều kiện thiên thời, địa lợi cho cây Cà phê Moka và Arabica phát triển.Cầu Đất ở độ cao hơn 1500m so với mực nước biển, có điều kiện khí hậu, nhiệt độ, độ ẩm quanh năm ôn hòa, thổ nhưỡng, độ phì nhiêu của đất cực kỳ thích hợp để trồng Mo cha coffee. Không đơn thuần mà Starbuck chọn Cầu Đất là nơi trồng và lưu trữ hạt Cà phê Moka sau 6 địa danh khác trên thế giới trong đó có Xumatra của Indonesia. Tất cả mọi yếu tố trên làm nên siêu phẩm mang tên: “Moka Cầu Đất”.Về giá trị kinh tế, Mo-ka là loại cà phê có gí trị cao nhất trên thế giới không riêng gì Việt Nam. Nó có chất lượng, hương vị sánh ngang Arabica Bourbon và hơn hẳn Cà phê Catimor hay Robusta.Không đơn  thuần cũng chẳng phải tự nhiên mà cà phê Moka được xem như vua trong thế giới cà phê. Chính hương  vị, mùi thơm tự nhiên, sang chảnh, đài các của nó mang đến cho người dùng khi trải nghiệm khiến thực khách không khỏi say đắm.Cà phê hạt Moka Cầu Đất khoác lên mình một vị chua nhẹ thanh thoát, nhẹ nhàng, đưa thực khách đi từ cảm giác đắng nhẹ đến hậu vị ngọt nơi cổ họng. là điều không phải lúc nào và ở đâu cũng có thể thưởng thức những điều độc đáo như vậy. Chính vì thế mà Cà phê Mocha Cầu Đất có tiếng tăm và vị thế thượng đẳng trên thị trường về giá trị kinh tế.Khi được trồng ở độ cao từ 1500m so với mực nước biển,, lượng mưa hàng năm phổ biến <= 260mm trên các vùng đất đổ Bazan có độ dốc thoai thoải cùng nhiệt độ ôn hòa nằm ở mức <= 220 C. Cộng với quy trình gieo trồng, chăm sóc khắt khe, chi phí thu hoạch, sơ chế cao và sản lượng cũng hạn  chế dẫn đến tình trạng cung không đủ cầu, khiến Moka trở nên đắt đỏ.Không giống các hệ thống máy rang củi, rang ga truyền thống hạt cafe sau khi rang có thể bị ảm khói, bị khét, hạt không đều màu thì Công nghệ rang nhập khẩu chúng tôi đang sử dụng giúp loại bỏ những yếu tố đó.' },
        { id: 6, tenSP: 'Cà phê Espresso', giaSP: 1340000, loaiSP: 'cfnn', linkAnh: 'https://cdn.tgdd.vn/Files/2020/04/08/1247674/ca-phe-espresso-cappuccino-hay-macchiato-khac-nhau-nhu-the-nao-202004081936305660.jpg', mota: 'Cà phê Motherland hiên đang cung ứng rất nhiều dòng cafe pha phin và pha máy, trong đó dòng cà phê espresso Motherland BMT B1 là một trong những dòng cafe espresso đang được yêu thích nhất hiện nay bởi hương vị đậm đà, thơm sâu lắng, vị không chua, pha được cà phê đá, cà phê sữa đá, cold brew, capuchino, latte,...Thành phần cà phê espresso Motherland: Arabica Đà Lạt rang mộc, cafe arabica Sơn La, cafe Culi và Robusta rang mộc trái chín Độ rang Medium, Độ ấm: <=5%. Hàm lượng caffein: >1.2%. Đóng gói: túi 500g hoặc 1kg hoặc tùy theo yêu cầu khách hàng. Xuất xứ: Cầu Đất Đà Lạt - Lâm Đồng & Buôn Ma Thuột - Dak Lak.Hướng dẫn bảo quản: sản phẩm nên được bảo quản nơi khô ráo, thoáng mát. Cà phê Espresso BMT B1 sẽ thơm ngon hơn nếu được bảo quản trong ngăn mát của tủ lạnh. Cà phê espresso gói Motherland là sự kết hợp hài hòa hương vị giữa cà phê robusta Buôn Ma Thuột Dak Lak và cà phê arabica Cầu Đất Đà Lạt, đóng gói hạt rang mộc, không xay sẵn trước. Quý khách hàng khi mua cafe espresso Motherland về pha đến đâu xay đến đó, không xay quá dư dễ làm mất mùi cà phê và còn làm giảm crema khi chiết xuất.Cà phê espresso Motherland có hương vị sâu lắng, sau khi đá tan hậu vị cà phê vẫn còn đọng mãi trong cổ họng. Để làm được đều đó, Motherland coffee đã rất chú trọng trong nhiều công đoạn từ nguồn nguyên liệu, sơ chế, rang xay và bảo quản. Kinh nghiệm rang rất quan trọng, góp phần trực tiếp đến chất lượng của sản phẩm. Cà phê Motherland là hàng trái chín lựa tay, hạt đẹp, độ đồng đều cao, có hương thơm và hậu ngọt vượt trội sau khi rang.1kg cà phê espresso pha được trung bình 70- 80 ly tương đương 12.5g - 4g cho một người uống. Để cho ra được một ly cà phê espresso ngon phụ thuộc rất nhiều yếu tố như: chất lượng cà phê, chất lượng máy pha và kỷ năng pha chế. Đặc biệt là máy pha, cho dù là cà phê có ngon và hoàn hảo đến đâu nhưng máy pha không đạt chất lượng sẽ cho ra 1 một tách cà phê vừa nhạt, vừa chua, lại không thơm. ' },
        { id: 7, tenSP: 'Cà phê Cappuccino', giaSP: 990000, loaiSP: 'cfnn', linkAnh: 'https://media.saigontourist.edu.vn/Media/1_STHCHOME/FolderFunc/202303/Images/capuchino-la-gi-20230320105423-e.jpg', mota: 'Capuchino là một loại cà phê gồm có cà phê và lớp bọt sữa (được đánh bông nằm ở phía trên), cùng với một ít bột ca cao hoặc bột quế được rắc lên bề mặt thức uống trước khi phục vụ.Capuchino thường được sử dụng vào buổi sáng hoặc trước - sau bữa ăn.Tên gọi và màu sắc của cà phê capuchino có nét tương đồng với tên gọi của chiếc mũ và màu áo thụng của các nhà tu sĩ Minor Capuchin. Ngoài ra, nguồn gốc của cà phê capuchino còn liên quan đến sự phổ biến của một loại cà phê khác ở châu Âu, nhất là trong thời đế chế Áo - Hung vào thế kỷ 17 - 18.Cụ thể, theo một truyền thuyết kể lại rằng: Lúc ở trong quán cà phê (tại Vienna), vị chủ nhiệm người Friulian tên là cha Marco d Aviano, đã lần đầu tiên sửa lại vị đắng của cà phê bằng cách cho thêm sữa.Lúc này, đồ uống được biết đến với cái tên kapuziner trong tiếng Đức và được gọi là capuchino sau này.Ngoài ra, một nguồn thông tin khác còn cho biết thêm: Franciszek Jerzy Kulczycki cũng ở Vienna đã sử dụng một lượng cà phê lớn do người Hồi giáo bỏ lại, ông đã làm cho nó trở nên ngọt hơn bằng cách sử dụng cả sữa và mật ong.Rồi đến thế kỷ 13, nhiều biến thể của thức uống kapuziner xuất hiện và được dùng kèm với món tráng miệng như bánh croissant. Trong suốt thế kỷ 18, kapuziner tiếp tục được đổi mới hương vị và xuất hiện lớp bọt sữa phía trên.Vào cuối thế kỷ 18, phần bọt sữa ngày càng được chú trọng hơn trong công thức pha chế để làm ra món capuchino hoàn thiện như hiện nay.Chưa hết, vào đầu thế kỷ 20, sự xuất hiện của những chiếc máy pha cà phê espresso đã góp phần làm cho capuchino được biết đến nhiều trên thế giới khi được trang bị vòi phun hơi nước giúp cho việc tạo ra bọt sữa dễ dàng hơn.Cà phê capuchino gồm có 3 phần, đó là: cà phê espresso, sữa nóng được tạo bọt và một ít bột cacao (hoặc bột sô cô la, bột quế). Về cách tạo hình nó được đánh giá khá giống với latte, nhưng lượng bọt sữa phía trên của capuchino dày hơn so với latte và nhìn xốp.Độ dày của phần bọt sữa capuchino dao động từ 2 - 3cm, tạo cảm giác bắt mắt và hấp dẫn. Khi uống, bạn sẽ cảm nhận được vị đắng của cà phê capuchino quyện lẫn với vị béo nhẹ của bọt sữa, nên trở thành một trong những loại đồ uống rất được ưa chuộng hiện nay.' },
        { id: 8, tenSP: 'Cà phê Macchiato', giaSP: 1190000, loaiSP: 'cfnn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121544374224.jpg', mota: 'Cà phê Macchiato (hay còn được gọi là Cafe Macchiato hay Espresso Macchiato). Cùng với Cappuccino và Latte, Macchiato cũng là loại thức uống được tạo thành từ các thành phần nguyên liệu chính là cà phê espresso, sữa và bọt sữa. Tuy nhiên ở Macchiato thi nó là loại cà phê Espresso có một lớp bọt sữa beo béo ở trên với hương vị mạnh mẽ hơn nhiều loại thức uống khác.Macchiato là một tên gọi được bắt nguồn từ các chuyên gia pha chế Ý (dùng để phân biệt với Cappuccino hay Latte). Và nếu hiểu theo tiếng Ý thì Macchiato được hiểu là “vệt lốm đốm” hay “đánh dấu”. Ý chỉ hình ảnh của  một tấm vải trắng với những chấm nhỏ li ti tương tự như ly macchiato với lớp bọt sữa trắng được trên bề mặt và điểm xuyến thêm bằng cách rắc thêm các đốm nâu bột cà phê lên để trang trí.  Ngày này Macchiato là từ được sử dụng phổ biến để chỉ các loại thức uống có lớp bọt sữa phía trên. Ở mỗi quốc gia, loại thức uống này sẽ có những tên gọi khác nhau, chẳng hạn như  ở Bồ Đào Nha gọi là “café pingado”, có ý nghĩa là cà phê với một giọt; còn ở ở Mexico, “cortado” là từ để gọi cà phê Macchiato,… Và dù được gọi với tên gì thì Macchiato  vẫn làm xao xuyến lòng người nhờ hương vị nồng nàn và đầy tính sáng tạo đầy lôi cuốn của mình.Mặc dù là một thức uống đã có mặt trên thế giới từ khá lâu nhưng có rất ít tài liệu nói về nguồn gốc hay xuất xứ của Macchiato. Thực chất, các chuyên gia người Ý sử gọi Macchiato là để phân biệt với 2 thức uống khác cũng khá giống Macchiato đó chính là Latte và Cappuccino.Cà phê Macchiato được biết đến với các thành phần chính là cafe và sữa. Ngày này 2 phiên bản thành công nhất của Macchiato là Espresso Macchiato và Latte Macchiato. Espresso Macchiato và Latte Macchiato cũng được xem là  là 2 biến thể chính của Macchiato. Mỗi loại có hương vị đặc trưng và và các điểm thu hút khác nhau.Vì ở Espresso Macchiato và Latte Macchiato có sự đối nghịch hoàn toàn về cách thức cũng như lượng nguyên liệu pha chế, do đó chúng mang trong mình những hương vị đặc trưng khác nhau và đối tượng thưởng thức chúng cũng có sự khác nhau. Cụ thể là:Espresso Macchiato thích hợp cho những ai yêu thích hương vị mạnh, đậm đắng nguyên chất của cà phê bởi nó có thành phần chủ yếu là cà phê. Còn Latte Macchiato thích hợp cho những ai ưa vị ngọt.' },
        { id: 9, tenSP: 'Cà phê Latte', giaSP: 390000, loaiSP: 'cfnn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121545409483.jpg', mota: 'Cà phê latte, gọi tắt là latte, là một loại thức uống có nguồn gốc từ nước Ý. Tại Scandinavie và Bắc Âu, tên gọi latte chỉ một loại đồ uống kết hợp giữa espresso và sữa, trong khi latte của người Pháp là sự kết hợp giữa espresso và sữa đánh (khuấy).Bên cạnh đó, nhiều phong cách của latte được biến thể như việc sử dụng cà phê mocha có hương vị sô cô la, hay một số loại đồ uống khác như matcha, trà gia vị Ấn Độ (masala chai), sữa hạnh nhân,… hoặc sữa đậu nành. Nhìn chung, latte là một loại đồ uống có thành phần chính là cà phê và sữa (được đánh).Ngoài ra, một điểm nổi bật khi nhắc đến latte chính là nghệ thuật vẽ trên ly latte. Hình vẽ được tạo ra bằng cách rót sữa (sau khi được gia nhiệt làm nóng sữa với phương pháp kỹ thuật steamed milk hoặc frothed milk).Người pha chế có thể khéo tay để tạo ra nhiều hình vẽ như hoa, trái tim, cây cỏ, khuôn mặt, con vật hoặc đồ vật.Matcha Latte là một trong những biến thể thường gặp khi nhắc đến latte. Nguyên liệu chính được sử dụng là bột trà xanh (hoặc bột matcha) và sữa béo, mang đến hương vị tươi mát cùng béo ngọt hấp dẫn. Bạn có thể thưởng thức dạng nóng hoặc lạnh tùy theo sở thích.Caramel latte cũng là một trong những loại latte rất được ưa chuộng. Thành phần chính là bột caramel, hương vị vani và sữa béo. Không những thế, trong một số công thức pha chế còn xuất hiện thêm siro caramel hoặc kẹo caramel để làm tăng thêm vị ngọt đậm đà.Một gợi ý cho bạn là hãy thử dùng kèm bánh mì nướng khi thưởng thức caramel latte, sẽ mang đến hương vị thơm ngon hơn đấy!Ngoài hai loại latte vừa mới nêu trên, bạn có thể nhâm nhi thử vanilla latte cũng rất tinh tế. Nguyên liệu chính là cà phê espresso, sữa nóng và hương vani.Ngoài hai loại latte vừa mới nêu trên, bạn có thể nhâm nhi thử vanilla latte cũng rất tinh tế. Nguyên liệu chính là cà phê espresso, sữa nóng và hương vani.Khi thưởng thức latte, bạn có thể uống dạng nóng hoặc dạng đá. Có lẽ vì thế, latte đá cũng là một trong những loại latte phổ biến. Nguyên liệu chính vẫn là cà phê espresso và sữa ướp lạnh rót trên phía trên cùng của ly latte.Ngoài ra, người pha chế cũng có thể cho thêm hương vị phù hợp và tăng độ ngọt bằng cách dùng si rô hoặc nước đường.' },
        { id: 10, tenSP: 'Cà phê Americano', giaSP: 690000, loaiSP: 'cfnn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121547335870.jpg', mota: 'Americano là một loại cà phê espresso và có tên gọi khác là cà phê American, đây là loại cà phê truyền thống của người Mỹ với vị đắng nhẹ hơn bằng cách pha loãng cà phê espresso với nước sôi theo một tỷ lệ nhất định.Tuy được biến tấu từ gốc cà phê espresso (bắt nguồn từ nước Ý) nhưng Americano lại có nguồn gốc từ thói quen dùng cà phê của người Mỹ. Nói một cách khác, tên gọi Americano xuất phát từ thói quen uống cà phê của người lính Mỹ ở châu Âu vào Thế chiến thứ 2.Những người lính thường sử dụng cà phê sau các giờ tập luyện mệt mỏi. Tuy nhiên, vị đắng của cà phê espresso lại không hợp khẩu vị của họ, thậm chí loại cà phê này trở thành nguyên nhân khiến cho nhiều người bị say, mất tập trung hoặc bị chóng mặt.Chính vì thế, họ đã pha loãng espresso với nước sôi để giảm bớt vị đắng cũng như một số tác dụng phụ của cà phê sau khi họ uống, cách làm này phù hợp với nhiều người lính Mỹ lúc bấy giờ. Dần dần, cà phê Americano trở thành thức uống truyền thống của người Mỹ.Để pha được một ly Americano, bạn cần kết hợp 1 shot (khoảng 25 - 30ml) cà phê espresso với 30 - 470ml nước sôi.Vì thế, thành phần của một ly Americano gồm có espresso và nước sôi nên vị đắng của cà phê Americano giảm đi khá nhiều. Loại cà phê này cũng thường hay bị nhầm lẫn với cà phê Long Black - đây là loại cà phê được pha giữa cà phê espresso và nước sôi theo tỷ lệ 1:1.Các bước pha cà phê Americano:Bước 1: Dùng máy xay cà phê để tiến hành xay nhuyễn hạt cà phê có độ mịn vừa phải. Nếu dùng bột cà phê thì cần khoảng 7gr là được.Bước 2: Cho bột cà phê vào bộ lọc porter, rồi dùng temper để nén bột cà phê với lực vừa phải. Bước 3: Lắp bộ lọc porter (có chứa bột cà phê được nén) vào máy pha cà phê. Sau đó, bạn nhấn nút pha cà phê.Bước 4: Đặt tách dưới vòi của bộ lọc porter để hứng lấy cà phê espresso.Bước 5: Bạn cho vào cốc cà phê espresso thêm khoảng 30 - 70ml nước sôi tùy theo khẩu vị. Cuối cùng dùng muỗng hòa tan cà phê, vậy là bạn đã hoàn thành được tách cà phê American rồi đấy.' },
    ];
    const formatPrice = (price) => {
        // Sử dụng hàm toLocaleString để định dạng số và thêm dấu chấm ngăn cách hàng nghìn
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };
    return (
        <ImageBackground
            source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }}
        >
            <View style={styles.container}>
                <ImageBackground
                    style={{ width: 360, height: 40, borderTopRightRadius: 20, opacity: 0.5, alignItems: 'center', justifyContent: 'center' }}
                    source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }} >
                    <Text style={styles.title}>Sản phẩm yêu thích</Text>
                </ImageBackground>
                <FlatList
                    style={{ height: 535 }}
                    data={danhSach}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.productItem}>
                            <Image
                                style={styles.img}
                                source={{ uri: item.linkAnh }} />
                            <View style={styles.ngang}>
                                <View style={{ width: 295, marginLeft: 5 }} >
                                    <View style={styles.ngang}>
                                        <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 20, width: 215 }}>{item.tenSP}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ color: 'white', fontSize: 15, fontFamily: 'cursive', marginTop: 7 }}>
                                                {formatPrice(item.giaSP)}
                                            </Text>
                                        </View>
                                    </View>

                                    <ScrollView style={{ height: 120, width: 290 }} nestedScrollEnabled={true}>
                                        <Text style={{ color: 'gray', fontSize: 13 }}>{item.mota}</Text>
                                    </ScrollView>
                                </View>
                                <View>

                                    <TouchableOpacity
                                        style={{ marginTop: 5 }}
                                        onPress={() => console.log('Thêm vào giỏ hàng thành công')}>
                                        <Image
                                            style={styles.imgadd}
                                            source={{ uri: 'https://png.pngtree.com/png-vector/20220428/ourmid/pngtree-smooth-glossy-heart-vector-file-ai-and-png-png-image_4557871.png' }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.buttonadd}

                                        onPress={() => console.log('Thêm vào giỏ hàng thành công')}>
                                        <Image
                                            style={styles.imgadd}
                                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png' }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />

            </View>
            <ImageBackground
                style={{ width: 360, height: 40, borderTopRightRadius: 20, alignItems: 'center', justifyContent: 'center', }}
                source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }} >
                <View style={{flexDirection:'row',padding:10}}>

                    <TouchableOpacity
                        style={{width:80,alignItems:'center',opacity:0.7}}
                        onPress={() => console.log('')}>
                        <Image
                            style={styles.imgadd}
                            source={{ uri: 'https://i.pinimg.com/originals/0c/02/ce/0c02ce4850d6b88d44f87271ff5f4a71.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{width:80,alignItems:'center',opacity:0.7}}
                        onPress={() => console.log('')}>
                        <Image
                            style={styles.imgadd}
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/60/60992.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{width:80,alignItems:'center',opacity:1}}
                        onPress={() => console.log('')}>
                        <Image
                            style={styles.imgadd}
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/105/105220.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{width:80,alignItems:'center',opacity:0.7}}
                        onPress={() => console.log('hihi')}>
                        <Image
                            style={styles.imgadd}
                            source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png' }} />
                    </TouchableOpacity>
        
                </View>
            </ImageBackground>
        </ImageBackground>
    )
}

export default ManYeuThich

const styles = StyleSheet.create({
    container: {
    },
    title: {

        fontSize: 20,
        fontFamily: 'serif',
        color: 'black'
    },
    productItem: {
        borderWidth: 1,
        marginBottom: 10,
        marginLeft: 10,
        width: 340,
        height: 300,
        borderBottomWidth: 1,
        borderRadius: 10,
        backgroundColor: '#222222',
        borderBottomColor: 'black',
    },
    img: {
        width: 338,
        borderRadius: 10,
        height: 140,
        marginBottom: 10,
    },
    buttonadd: {
        backgroundColor: 'orange',
        borderRadius: 20,
        width: 30,
        marginTop: 30,
        height: 30,

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    ngang: {
        flexDirection: 'row',
    },
    imgadd: {
        width: 30,
        height: 30,
    },
})