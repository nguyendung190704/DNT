import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const ManHinhChinh = () => {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [showModala, setShowModala] = useState(false);
    const [danhSach, setDanhSach] = useState([]);

    const closeModal = () => {
        setShowModal(false);
    };

    const formatPrice = (price) => {
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
        <View>
            <ScrollView style={{ height: 580 }}>
                <ImageBackground
                    source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }}
                >
                    <View style={styles.container}>
                        <ImageBackground
                            style={{ width: 360, height: 140,flexDirection:'row' }}
                            source={{ uri: 'https://capherangxay.vn/wp-content/uploads/2019/01/nhung-luu-y-de-mo-quan-cafe-nguyen-chat-2.jpg' }}>
                            <TouchableOpacity
                                style={{ margin: 7,marginLeft:335 }}
                                onPress={() => navigation.navigate('ThemSanPham')}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={{ uri: 'https://icon-library.com/images/white-plus-icon/white-plus-icon-3.jpg' }} />
                            </TouchableOpacity>

                        </ImageBackground>
                        <ImageBackground
                            style={{ width: 360, height: 60, borderTopRightRadius: 20, opacity: 0.7, alignItems: 'center', justifyContent: 'center' }}
                            source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }} >
                            <Text style={styles.title}>Danh sách các sản phẩm</Text>
                        </ImageBackground>
                        <FlatList
                            data={danhSach}
                            keyExtractor={(item) => item.idsp}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <View style={styles.productItem}>
                                    <ImageBackground
                                        style={{ width: 147, borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 140, overflow: 'hidden', marginBottom: 10, alignItems: 'flex-end' }}
                                        source={{ uri: item.linkAnh }} >
                                        <TouchableOpacity
                                            style={{ width: 30, alignContent: 'center', justifyContent: 'center', backgroundColor: 'white', padding: 5, borderRadius: 10, opacity: 0.5, marginTop: 3, marginRight: 3 }}
                                            onPress={() => console.log('')}>
                                            <Image
                                                style={{ width: 20, height: 17, }}
                                                source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/18/03/black-152877_960_720.png' }} />
                                        </TouchableOpacity>
                                    </ImageBackground>
                                    <View style={styles.ngang}>
                                        <View style={{ width: 105, marginLeft: 5 }} >
                                            <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 15 }}>{item.tenSP}</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ color: 'white', fontSize: 10, fontFamily: 'cursive', marginTop: 5 }}>
                                                    {formatPrice(item.giaSP)}
                                                </Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity
                                            style={styles.buttonadd}
                                            onPress={() => navigation.navigate('SanPham')}>
                                            <Image
                                                style={styles.imgadd}
                                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png' }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                        <ImageBackground
                            style={{ width: 360, height: 60, borderTopRightRadius: 10, opacity: 0.7, alignItems: 'center', justifyContent: 'center' }}
                            source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }} >
                            <Text style={styles.title}>Sản phẩm trong nước</Text>
                        </ImageBackground>


                        <FlatList
                            data={danhSach.filter(item => item.loaiSP === 'cfvn')}
                            keyExtractor={(item) => item.idsp}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <View style={styles.productItem}>
                                    <ImageBackground
                                        style={{ width: 147, borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 140, overflow: 'hidden', marginBottom: 10, alignItems: 'flex-end' }}
                                        source={{ uri: item.linkAnh }} >
                                        <TouchableOpacity
                                            style={{ width: 30, alignContent: 'center', justifyContent: 'center', opacity: 1, backgroundColor: 'white', padding: 5, borderRadius: 10, opacity: 0.5, marginTop: 3, marginRight: 3 }}
                                            onPress={() => console.log('')}>
                                            <Image
                                                style={{ width: 20, height: 17 }}
                                                source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/18/03/black-152877_960_720.png' }} />
                                        </TouchableOpacity>
                                    </ImageBackground>
                                    <View style={styles.ngang}>
                                        <View style={{ width: 105, marginLeft: 5 }} >
                                            <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 15 }}>{item.tenSP}</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ color: 'white', fontSize: 10, fontFamily: 'cursive', marginTop: 5 }}>
                                                    {formatPrice(item.giaSP)}
                                                </Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity
                                            style={styles.buttonadd}
                                            onPress={() => navigation.navigate('SanPham')}>
                                            <Image
                                                style={styles.imgadd}
                                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png' }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />

                        <ImageBackground
                            style={{ width: 360, height: 40, borderTopRightRadius: 20, opacity: 0.7, alignItems: 'center', justifyContent: 'center' }}
                            source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }} >
                            <Text style={styles.title}>Sản phẩm nhập khẩu</Text>
                        </ImageBackground>

                        <FlatList
                            data={danhSach.filter(item => item.loaiSP === 'cfnn')}
                            keyExtractor={(item) => item.idsp}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <View style={styles.productItem}>
                                    <ImageBackground
                                        style={{ width: 147, borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 140, overflow: 'hidden', marginBottom: 10, alignItems: 'flex-end' }}
                                        source={{ uri: item.linkAnh }} >
                                        <TouchableOpacity
                                            style={{ width: 30, alignContent: 'center', justifyContent: 'center', opacity: 1, backgroundColor: 'white', padding: 5, borderRadius: 10, opacity: 0.5, marginTop: 3, marginRight: 3 }}
                                            onPress={() => console.log('')}>
                                            <Image
                                                style={{ width: 20, height: 17 }}
                                                source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/18/03/black-152877_960_720.png' }} />
                                        </TouchableOpacity>
                                    </ImageBackground>
                                    <View style={styles.ngang}>
                                        <View style={{ width: 105, marginLeft: 5 }} >
                                            <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 15 }}>{item.tenSP}</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ color: 'white', fontSize: 10, fontFamily: 'cursive', marginTop: 5 }}>
                                                    {formatPrice(item.giaSP)}
                                                </Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity
                                            style={styles.buttonadd}
                                            onPress={() => navigation.navigate('SanPham')}>
                                            <Image
                                                style={styles.imgadd}
                                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png' }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                    <ImageBackground
                        style={{ width: 360, height: 30, borderTopRightRadius: 20, opacity: 0.3, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}
                        source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }} >
                        <Text style={{ fontFamily: 'serif', fontSize: 10, color: 'black' }}>Bản quyền thuộc dungntph35067</Text>
                    </ImageBackground>
                </ImageBackground>

            </ScrollView>
            <ImageBackground
                style={{ width: 360, height: 40, borderTopRightRadius: 20, alignItems: 'center', justifyContent: 'center', }}
                source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }} >
                <View style={{ flexDirection: 'row', padding: 10 }}>

                    <TouchableOpacity
                        style={{ width: 70, alignItems: 'center', opacity: 1 }}
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
                            <View style={{ backgroundColor: '#FFCC99', padding: 20, width: 330, height: 150, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
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
        </View>

    );
};

export default ManHinhChinh


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
        marginLeft: 10,
        width: 150,
        height: 200,
        borderBottomWidth: 1,
        borderRadius: 10,
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
})
