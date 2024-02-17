import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView ,Modal} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';



const ManYeuThich = () => {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [danhSach, setDanhSach] = useState([]);

    const closeModal = () => {
        setShowModal(false);
    };
   
    const formatPrice = (price) => {
        // Sử dụng hàm toLocaleString để định dạng số và thêm dấu chấm ngăn cách hàng nghìn
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };

    const fetchData = async () => {
        try {
          const response = await axios.get('https://65bb0eedb4d53c066553ecc1.mockapi.io/danhSach');
          setDanhSach(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error.message);
          console.error('Error details:', error);
        }
      };
    
    
      useEffect(() => {
        fetchData();
      }, []);
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
                    data={danhSach.filter(item => item.yeuthich === 1)}
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

                                        onPress={() => navigation.navigate('SanPham')}>
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
                        style={{ width: 70, alignItems: 'center', opacity: 1 }}
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