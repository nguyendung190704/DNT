import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView ,Modal} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';



const GioHang = () => {
  const navigation = useNavigation();
  const [gioHang, setgioHang] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
      setShowModal(false);
  };
  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };

  const fetchData = async () => {
    try {
        const response = await axios.get('https://65bb0eedb4d53c066553ecc1.mockapi.io/gioHang');
        setgioHang(response.data);
    } catch (error) {
        console.error('Error fetching user data:', error.message);
        console.error('Error details:', error);
    }
};


useEffect(() => {
    fetchData();
}, []);
  return (
    <View>

      <ImageBackground style={{ height: 580 }}
        source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }}
      >
        <View style={styles.container}>

          <ImageBackground
            style={{ width: 360, height: 40, borderTopRightRadius: 20, opacity: 0.7, alignItems: 'center', justifyContent: 'center' }}
            source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }} >
            <Text style={styles.title}>Giỏ hàng</Text>
          </ImageBackground>
          <FlatList
            data={gioHang}
            keyExtractor={(item) => item.idgh}
            renderItem={({ item }) => (
              <View style={styles.productItem}>
                <Image
                  style={styles.img}
                  source={{ uri: item.linkAnh }} />
                <View style={styles.ngang}>
                  <View style={{ width: 295, marginLeft: 5 }} >
                    <View style={styles.ngang}>
                      <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 20, width: 170 }}>{item.tenSP}</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontSize: 15, fontFamily: 'cursive', marginTop: 5 }}>
                          {formatPrice(item.giaSP * item.soluong)}
                        </Text>
                      </View>
                    </View>
                    <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 15 }}>Quantity : {item.soluong}</Text>
                    <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 15, marginTop: 2 }}>Quality : {item.danhGia} ⭐ </Text>
                  </View>

                </View>
              </View>
            )}
          />



        </View>
      </ImageBackground>
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
                        style={{ width: 70, alignItems: 'center', opacity: 1 }}
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
                        <View style={{ width: 360, alignItems: 'center', justifyContent: 'center',backgroundColor: 'rgba(0, 0, 0, 0.8)', height: 660 }}>
                            <View style={{ backgroundColor: '#FFCC99', padding: 20 , width:330,height:150,opacity:0.95,borderRadius:20, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{ color: 'black', opacity: 1,fontSize:20, }}>Bạn muốn đăng xuất không ?</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                                    <TouchableOpacity onPress={closeModal}>
                                        <Text style={{marginRight:20,color:'black',fontSize:15,}}>KHÔNG</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('DangNhap')}>
                                        <Text style={{marginLeft:20,color:'black',fontSize:15,}}>CÓ</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>


                </View>
            </ImageBackground>

    </View>
  )
}

export default GioHang

const styles = StyleSheet.create({
  container: {
    height: 580,
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
    height: 67,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderRadius: 10,
    backgroundColor: '#222222',
    borderBottomColor: 'black',
  },
  img: {
    width: 65,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: 65,
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