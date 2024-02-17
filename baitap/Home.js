import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView, Modal, Alert, TextInput } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

const Home = () => {
    const navigation = useNavigation();
    const [danhSach, setDanhSach] = useState([]);
    const [modalVisibility, setModalVisibility] = useState([]);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [tenSP, setTenSP] = useState('');
    const [giaSP, setGiaSP] = useState('');
    const [loaiSP, setLoaiSP] = useState('');
    const [danhGia, setDanhGia] = useState('');
    const [linkAnh, setLinkAnh] = useState('');
    const [moTa, setMoTa] = useState('');
    const [editedProduct, setEditedProduct] = useState({
        tenSP: '',
        giaSP: '',
        loaiSP: '',
        danhGia: '',
        linkAnh: '',
        mota: ''
    });



    const closeModal = (index) => {
        setModalVisibility(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
    };
    const openEditModal = (product) => {
        setEditedProduct(product);
        setEditModalVisible(true);
    };
    const closeEditModal = () => {
        setEditModalVisible(false);
    };
    const handleUpdateProduct = async () => {
        if (!editedProduct.tenSP || !editedProduct.giaSP || !editedProduct.danhGia) {
            Alert.alert('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        if (isNaN(parseInt(editedProduct.giaSP)) || isNaN(parseInt(editedProduct.danhGia))) {
            Alert.alert('Giá sản phẩm và đánh giá phải là số nguyên');
            return;
        }

        try {
            await axios.put(`https://65bb0eedb4d53c066553ecc1.mockapi.io/danhSach/${editedProduct.id}`, editedProduct);
            Alert.alert('Sửa sản phẩm thành công');
            closeEditModal();
            fetchData();
        } catch (error) {
            console.error('Error updating product:', error.message);
            console.error('Error details:', error);
            Alert.alert('Đã xảy ra lỗi khi sửa sản phẩm');
        }
    };

    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('https://65bb0eedb4d53c066553ecc1.mockapi.io/danhSach');
            setDanhSach(response.data);
            const initialVisibility = response.data.map(() => false);
            setModalVisibility(initialVisibility);
        } catch (error) {
            console.error('Error fetching user data:', error.message);
            console.error('Error details:', error);
        }
    };

    const refreshData = useCallback(() => {
        fetchData();
    }, []);

    useFocusEffect(refreshData);

    useEffect(() => {
        fetchData();
    }, []);

    const toggleModal = (index) => {
        setModalVisibility(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`https://65bb0eedb4d53c066553ecc1.mockapi.io/danhSach/${id}`);
            Alert.alert('Xóa thành công');
            fetchData();
        } catch (error) {
            console.error('Error deleting product:', error.message);
            console.error('Error details:', error);
            if (error.response && error.response.status === 404) {
                Alert.alert('Không tìm thấy sản phẩm');
            } else {
                Alert.alert('Đã xảy ra lỗi khi xóa sản phẩm');
            }
        }
    };


    return (
        <View>
            <View style={{ height: 630 }}>
                <ImageBackground
                    style={{ height: 620 }}
                    source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }}
                >
                    <View style={styles.container}>
                        <ImageBackground
                            style={{ width: 360, height: 140, flexDirection: 'row' }}
                            source={{ uri: 'https://capherangxay.vn/wp-content/uploads/2019/01/nhung-luu-y-de-mo-quan-cafe-nguyen-chat-2.jpg' }}>
                            <TouchableOpacity
                                style={{ margin: 7, marginLeft: 335 }}
                                onPress={() => navigation.navigate('Them')}>
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
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => (
                                <View style={styles.productItem}>
                                    <ImageBackground
                                        style={{ width: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, height: 97, overflow: 'hidden', marginBottom: 10, alignItems: 'flex-end' }}
                                        source={{ uri: item.linkAnh }} >
                                    </ImageBackground>
                                    <View style={styles.ngang}>
                                        <View style={{ width: 300, marginLeft: 5 }} >
                                            <TouchableOpacity onPress={() => toggleModal(index)}>
                                                <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 25 }}>{item.tenSP}</Text>
                                            </TouchableOpacity>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 20, marginTop: 2 }}>Quality : {item.danhGia} ⭐ </Text>
                                            </View>
                                            <Text style={{ color: 'white', fontSize: 20, fontFamily: 'cursive', marginTop: 5 }}>
                                                {formatPrice(item.giaSP)}
                                            </Text>
                                        </View>
                                    </View>
                                    <Modal visible={modalVisibility[index] || false} onRequestClose={() => closeModal(index)}>
                                        <View style={{ height: 1000, backgroundColor: 'black' }}>
                                            <ImageBackground
                                                style={{ width: 360, borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 309, overflow: 'hidden', marginBottom: 10, }}
                                                source={{ uri: item.linkAnh }} >
                                                <View style={{ flexDirection: 'row' }}>
                                                    <TouchableOpacity
                                                        style={{ width: 30, alignContent: 'center', justifyContent: 'center', padding: 5, borderRadius: 10, marginTop: 10, marginLeft: 10, }}
                                                        onPress={() => closeModal(index)}>
                                                        <Image
                                                            style={{ width: 25, height: 25 }}
                                                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ic_arrow_back_36px.svg/1024px-Ic_arrow_back_36px.svg.png' }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        style={{ width: 30, alignContent: 'center', justifyContent: 'center', backgroundColor: 'white', padding: 5, borderRadius: 10, opacity: 0.5, marginTop: 10, marginLeft: 280, }}
                                                        onPress={() => console.log('thich')}>
                                                        <Image
                                                            style={{ width: 20, height: 17 }}
                                                            source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/18/03/black-152877_960_720.png' }} />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ flexDirection: 'column', backgroundColor: 'rgba(0, 0, 0, 0.5)', marginTop: 195, borderTopRightRadius: 1, height: 70, justifyContent: 'center', width: 360 }}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 25, width: 220, marginLeft: 5 }}>{item.tenSP}</Text>
                                                        <Text style={{ color: 'white', fontSize: 25, fontFamily: 'cursive', marginRight: 5 }}>{formatPrice(item.giaSP)}</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                                                        <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 15, marginTop: 2 }}>Quality : {item.danhGia} ⭐ </Text>
                                                    </View>
                                                </View>
                                            </ImageBackground>
                                            <View style={{}}>
                                                <View style={{ width: 360, marginLeft: 5 }} >
                                                    <Text style={{ color: 'white', fontSize: 15, marginTop: 2, fontWeight: '900' }}>Mô tả sản phẩm : </Text>
                                                    <ScrollView style={{ height: 235, width: 355 }} nestedScrollEnabled={true}>
                                                        <Text style={{ color: 'gray', fontSize: 13 }}>{item.mota}</Text>
                                                    </ScrollView>
                                                    <View style={{ flexDirection: 'row', width: 360, height: 33, marginTop: 5 }}>
                                                        <TouchableOpacity
                                                            style={{ width: 150, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue', borderRadius: 10 }}
                                                            onPress={() => openEditModal(item)}
                                                        >
                                                            <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 20 }}>Sửa</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            style={{ width: 150, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue', borderRadius: 10, marginLeft: 50 }}
                                                            onPress={() => deleteProduct(item.id)}>
                                                            <Text style={{ color: 'white', fontFamily: 'cursive', fontSize: 20 }}>Xóa</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>

                                            </View>
                                        </View>
                                    </Modal>
                                    <Modal visible={editModalVisible} onRequestClose={closeEditModal}>
                                        <ScrollView contentContainerStyle={styles.background}>
                                            <ImageBackground
                                                source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }}
                                            >
                                                <Text style={styles.pw}>Tên sản phẩm</Text>
                                                <TextInput
                                                    style={styles.textInput}
                                                    value={editedProduct.tenSP}
                                                    onChangeText={(text) => setEditedProduct({ ...editedProduct, tenSP: text })}
                                                />
                                                <Text style={styles.pw}>Giá sản phẩm</Text>
                                                <TextInput
                                                    style={styles.textInput}
                                                    value={editedProduct.giaSP}
                                                    onChangeText={(text) => setEditedProduct({ ...editedProduct, giaSP: text })}
                                                />
                                                <Text style={styles.pw}>Loại Sản phẩm</Text>
                                                <TextInput
                                                    style={styles.textInput}
                                                    value={editedProduct.loaiSP}
                                                    onChangeText={(text) => setEditedProduct({ ...editedProduct, loaiSP: text })}
                                                />
                                                <Text style={styles.pw}>Đánh giá</Text>
                                                <TextInput
                                                    style={styles.textInput}
                                                    value={editedProduct.danhGia}
                                                    onChangeText={(text) => setEditedProduct({ ...editedProduct, danhGia: text })}
                                                />
                                                <Text style={styles.pw}>Link ảnh URL</Text>
                                                <TextInput
                                                    style={styles.textInput}
                                                    value={editedProduct.linkAnh}
                                                    onChangeText={(text) => setEditedProduct({ ...editedProduct, linkAnh: text })}
                                                />
                                                <Text style={styles.pw}>Mô tả sản phẩm </Text>
                                                <TextInput style={{
                                                    height: 200, textAlignVertical: 'top', borderColor: '#eee',
                                                    borderRadius: 10,
                                                    borderWidth: 1,
                                                    width: 320,
                                                    marginLeft: 20,
                                                }} multiline={true} numberOfLines={16} placeholder='mô tả'
                                                    value={editedProduct?.mota}
                                                    onChangeText={(text) => setEditedProduct({ ...editedProduct, mota: text })} />
                                                <View style={styles.buttonContainer}>
                                                    <TouchableOpacity style={{ width: 150, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue', borderRadius: 10, height: 30 }} onPress={handleUpdateProduct}>
                                                        <Text style={styles.buttonText}>Lưu thay đổi</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{ width: 150, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue', borderRadius: 10, height: 30 }} onPress={closeEditModal}>
                                                        <Text style={styles.buttonText}>Hủy</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </ImageBackground>
                                        </ScrollView>
                                    </Modal>

                                </View>
                            )}
                        />
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    productItem: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        margin: 5,
        width: 340,
        height: 97,
    },
    ngang: {
        flex: 1,
        flexDirection: 'row',
    },
    modalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    asswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 320,
        marginLeft: 20,
        borderColor: '#eee',
        borderRadius: 10,
        borderWidth: 1,
        height: 48,
    },
    passwordInput: {
        flex: 1,
        padding: 10,
    },
    eyeIcon: {
        padding: 10,
    },
    img: {
        width: 255,
        height: 87,
        marginBottom: 10,
    },
    cm: {
        fontSize: 20,
        color: '#1E90FF',
        fontFamily: 'Popins',
    },
    pw: {
        marginLeft: 20,
        marginTop: 10,
    },
    textInput: {
        borderColor: '#eee',
        borderRadius: 10,
        borderWidth: 1,
        height: 48,
        width: 320,
        marginLeft: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    buttondn: {
        width: 130,
        height: 40,
        backgroundColor: '#1E90FF',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttondk: {
        width: 130,
        height: 40,
        backgroundColor: '#FF4500',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 90
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Home;
