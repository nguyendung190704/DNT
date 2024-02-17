import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';




const ManLienHe = () => {
    const [lienHe, setlienHe] = useState([]);
    const [feedbackText, setFeedbackText] = useState('');

    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
        setShowModal(false);
    };
    const fetchData = async () => {
        try {
            const response = await axios.get('https://65bb276752189914b5bb52a6.mockapi.io/lienHe');
            setlienHe(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error.message);
            console.error('Error details:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handleSendFeedback = async () => {
        try {
            const response = await axios.post('https://65bb276752189914b5bb52a6.mockapi.io/lienHe', {
                noiDung: feedbackText,
            });
            setlienHe(response.data);
            setFeedbackText('');
            console.log('Nội dung phản hồi :', response.data);
        } catch (error) {
            console.error('Error sending feedback:', error.message);
            console.error('Error details:', error);
        }
    };

    return (
        <View>
            <ScrollView style={{ height: 580 }}>
                <ImageBackground
                    source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }}
                >
                    <View style={styles.container}>
                        <Image
                            style={{ width: 360, height: 140 }}
                            source={{ uri: 'https://capherangxay.vn/wp-content/uploads/2019/01/nhung-luu-y-de-mo-quan-cafe-nguyen-chat-2.jpg' }} />
                        <ImageBackground
                            style={{ width: 360, height: 40, borderTopRightRadius: 20, opacity: 0.7, alignItems: 'center', justifyContent: 'center' }}
                            source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }} >
                            <Text style={styles.title}>Liên hệ</Text>
                        </ImageBackground>
                        <View>
                            <Text style={{ marginTop: 20, fontSize: 17, marginLeft: 5 }}>Bạn có thể liên hệ với chúng tôi qua :</Text>
                            <Text style={{ marginLeft: 35, fontSize: 13, marginTop: 5 }}>+ Email : dungntph35067@fpt.edu.vn</Text>
                            <Text style={{ marginLeft: 35, fontSize: 13, marginTop: 5 }}>+ Phone : 036 666 1241</Text>
                            <Text style={{ marginLeft: 35, fontSize: 13, marginTop: 5 }}>+ Hotline : 1900 1004</Text>
                            <Text style={{ marginTop: 20, fontSize: 15, marginLeft: 5 }}>Hoặc bạn có thể phản hồi ở đây:</Text>
                            <TextInput
                                style={{ borderWidth: 1, borderRadius: 10, margin: 10, height: 200, width: 340, textAlignVertical: 'top' }}
                                multiline={true}
                                numberOfLines={16}
                                placeholder='Nhập nội dung phản hồi'
                                value={feedbackText}
                                onChangeText={(text) => setFeedbackText(text)}
                            />
                            <TouchableOpacity
                                style={styles.buttondk}
                                onPress={handleSendFeedback}>
                                <Text style={styles.buttonText}>Gửi</Text>
                            </TouchableOpacity>
                        </View>
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
                        style={{ width: 70, alignItems: 'center', opacity: 1 }}
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

        </View>
    )
}

export default ManLienHe

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        fontSize: 20,
        fontFamily: 'serif',
        color: 'black'
    },
    buttondk: {
        width: 70,
        height: 30,
        backgroundColor: '#FF4500',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: 10,
    },
    imgadd: {
        width: 30,
        height: 30,
    },
})