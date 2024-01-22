import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView, Modal } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';

const SanPham = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }}
    >
      <View style={{ height: 520 }}>
        <View>
          <View style={styles.productItem}>
            <ImageBackground
              style={{ width: 360, borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 300, overflow: 'hidden', marginBottom: 10, }}
              source={{ uri: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202112281009085973.jpg' }} >
              <TouchableOpacity
                style={{ width: 30, alignContent: 'center', justifyContent: 'center', backgroundColor: 'white', padding: 5, borderRadius: 10, opacity: 0.5, marginTop: 10, marginLeft: 320, }}
                onPress={() => console.log('thich')}>
                <Image
                  style={{ width: 20, height: 17, }}
                  source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/18/03/black-152877_960_720.png' }} />
              </TouchableOpacity>
              <View style={{ flexDirection: 'column', backgroundColor: 'rgba(0, 0, 0, 0.5)', marginTop: 196,borderTopRightRadius:1 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 30, width: 240, marginLeft: 5 }}>Cà phê Arabica</Text>
                  <Text style={{ color: 'white', fontSize: 20, fontFamily: 'cursive', marginTop: 5 }}>
                    {formatPrice(500000)}
                  </Text>
                </View>
                <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 20, marginTop: 2, marginBottom: 5, marginLeft: 10 }}>4.5 ⭐ </Text>

              </View>
            </ImageBackground>
            <View style={{}}>
              <View style={{ width: 360, marginLeft: 5 }} >
                <Text style={{ color: 'white', fontSize: 15, marginTop: 2 }}>Mô tả sản phẩm : </Text>
                <ScrollView style={{ height: 120, width: 355 }} nestedScrollEnabled={true}>
                  <Text style={{ color: 'gray', fontSize: 13 }}>Cà phê Arabica có tên khoa học theo danh pháp hai phần là: Coffea arabica, do loài cà phê này có lá nhỏ, cây có một số đặc điểm hình thái giống như cây chè - một loài cây công nghiệp phổ biến ở Việt Nam. Cà phê chè có hai loại: cà phê moka và cà phê catimor.Đây là loài có giá trị kinh tế nhất trong số các loài cây cà phê.
                    Cà phê chè chiếm 61% các sản phẩm cà phê toàn thế giới. Cà phê arabica còn được gọi là Brazilian Milds nếu nó đến từ Brasil, gọi là Colombian Milds nếu đến từ Colombia, và gọi là Other Milds nếu đến từ các nước khác. Qua đó có thể thấy Brasil và Colombia là hai nước xuất khẩu chính loại cà phê này, chất lượng cà phê của họ cũng được đánh giá cao nhất. Các nước xuất
                    khẩu khác gồm có Ethiopia, México, Guatemala, Honduras, Peru, Ấn Độ.Cây cà phê arabica ưa sống ở vùng núi cao. Người ta thường trồng
                    nó ở độ cao từ 1000-1500 m. Cây có tán nhỏ, màu xanh đậm, lá hình oval. Cây cà phê trưởng thành có thể cao từ 4–6 m, nếu để mọc hoang dã có thể cao đến 10 m. Quả hình bầu dục, mỗi quả chứa hai hạt cà phê.Cà phê chè sau khi trồng khoảng 3 đến 4 năm thì có thể bắt đầu cho thu hoạch. Thường thì cà phê 25 tuổi đã được coi là già, không thu hoạch được nữa. Thực tế nó vẫn có thể tiếp tục sống thêm khoảng 70 năm.
                    Cây cà phê arabica ưa thích nhiệt độ từ 16-25°C, lượng mưa khoảng trên 1000 mm.Trên thị trường cà phê chè được đánh giá cao hơn cà phê vối (coffea canephora hay coffea robusta) vì có hương vị thơm ngon và chứa ít hàm lượng caffein hơn. Một bao cà phê chè (60 kg) thường có giá cao gấp 2 lần một bao cà phê vối.Việt Nam là nước xuất khẩu cà phê lớn thứ hai thế giới nhưng chủ yếu là cà phê vối. Năm 2005 dự kiến diện tích trồng cà phê chè mới đạt khoảng 10% tổng
                    diện tích trồng cà phê cả nước (khoảng 40.000 ha/410.000 ha). Hiện cà phê chè được trồng ở các tỉnh Lâm Đồng ở Tây Nguyên, vùng thành phố Sơn La, huyện Mai Sơn, huyện Thuận Châu (Sơn La) và Mường Ảng (Điện Biên) ở Tây Bắc.</Text>
                </ScrollView>
                <View style={{flexDirection:'row'}}>
                <Text style={{ color: 'white', fontSize: 15, marginTop: 8 ,width:170}}>Số lượng : </Text>
                <Text style={{ color: 'white', fontSize: 17, marginTop: 7 }}>Tổng tiền : {formatPrice(5000000*quantity)} </Text>
                </View>
                <View style={{ flexDirection: 'row', }}>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      style={{ width: 20, height: 20, backgroundColor: '#FF6600', justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10 }}
                      onPress={handleDecrement}>
                      <Image
                        style={{ width: 15, height: 20 }}
                        source={{ uri: 'https://cdn-icons-png.freepik.com/512/56/56889.png' }} />
                    </TouchableOpacity>
                    <TextInput
                      style={{ height: 30, width: 100, color: 'white', borderWidth: 1, borderColor: 'white', borderRadius: 15, alignItems: 'center', padding: 0 }}
                      value={quantity.toString()}
                      keyboardType="numeric"
                      textAlign="center"
                      onChangeText={(text) => setQuantity(parseInt(text) || 0)}
                    />
                    <TouchableOpacity
                      style={{ width: 20, height: 20, backgroundColor: '#FF6600', justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginLeft: 10 }}
                      onPress={handleIncrement}>
                      <Image
                        style={{ width: 17, height: 17 }}
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/32/32339.png' }} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={{ width: 100, height: 30, backgroundColor: '#FFCC33', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginLeft: 90, marginTop: 5 }}
                    onPress={() => navigation.navigate('GioHang')}>
                    <Text style={{ fontFamily: 'bold', color: 'black' }}>Thêm vào giỏ </Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>
        </View>

      </View>
      <ImageBackground
        style={{ width: 360, height: 40, borderTopRightRadius: 20, alignItems: 'center', justifyContent: 'center', }}
        source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }} >
        <View style={{ flexDirection: 'row', padding: 10 }}>

          <TouchableOpacity
            style={{ width: 70, alignItems: 'center', opacity: 0.7 }}
            onPress={() => navigation.navigate('ManHinhChinh')}>
            <Image
              style={styles.imgadd}
              source={{ uri: 'https://i.pinimg.com/originals/0c/02/ce/0c02ce4850d6b88d44f87271ff5f4a71.png' }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 70, alignItems: 'center', opacity: 0.7 }}
            onPress={() => navigation.navigate('GioHang')}>
            <Image
              style={styles.imgadd}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/60/60992.png' }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 70, alignItems: 'center', opacity: 0.7 }}
            onPress={() => navigation.navigate('ManYeuThich')}>
            <Image
              style={styles.imgadd}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/105/105220.png' }} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ width: 70, alignItems: 'center', opacity: 0.7 }}
            onPress={() => navigation.navigate('ManLienHe')}>
            <Image
              style={styles.imgadd}
              source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/01/03/05/contact-1787332_960_720.png' }} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 70, alignItems: 'center', opacity: 0.7 }}
            onPress={() => setShowModal(true)}>
            <Image
              style={styles.imgadd}
              source={{ uri: 'https://static-00.iconduck.com/assets.00/logout-icon-2048x2048-libuexip.png' }} />
          </TouchableOpacity>
          <Modal visible={showModal} transparent={true} onRequestClose={closeModal}>
            <View style={{ width: 360, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', height: 660 }}>
              <View style={{ backgroundColor: '#FFCC99', padding: 20, width: 330, height: 150, opacity: 0.95, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black', opacity: 1, fontSize: 20, }}>Bạn muốn đăng xuất không ?</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                  <TouchableOpacity onPress={closeModal}>
                    <Text style={{ marginRight: 20, color: 'black', fontSize: 15, }}>KHÔNG</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('DangNhap')}>
                    <Text style={{ marginLeft: 20, color: 'black', fontSize: 15, }}>CÓ</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>


        </View>
      </ImageBackground>
    </ImageBackground>
  )
}

export default SanPham

const styles = StyleSheet.create({
  container: {
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'serif',
    color: 'black'
  },
  productItem: {
    borderWidth: 1,
    width: 360,
    height: 520,
    borderBottomWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius:10,
    backgroundColor: '#222222',
    borderBottomColor: 'black',
  },
  img: {
    width: 147,
    borderRadius: 10,
    height: 140,
    marginBottom: 10,
  },
  buttonadd: {
    backgroundColor: 'orange',
    borderRadius: 20,
    marginTop: 5,
    width: 30,
    height: 30,

  },
  ngang: {
    flexDirection: 'row',
  },
  imgadd: {
    width: 30,
    height: 30,
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 40,
    textAlign: 'center',
  },

  quantityButton: {
    backgroundColor: '#FFCC33',
    borderRadius: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

})