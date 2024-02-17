import React, { useState, useEffect } from 'react';
import { Button,Image,StyleSheet,Text,TextInput,View,TouchableOpacity,ImageBackground,Modal} from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';

const DangNhap = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [nguoiDung, setnguoiDung] = useState([]);


    const [isPasswordHidden, setPasswordHidden] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    const togglePasswordVisibility = () => {
        setPasswordHidden(!isPasswordHidden);
    };
    const fetchData = async () => {
        try {
            const response = await axios.get('https://65bb276752189914b5bb52a6.mockapi.io/nguoiDung');
            setnguoiDung(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error.message);
            console.error('Error details:', error);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    const navigation = useNavigation();

    const handleLogin = () => {
        const user = nguoiDung.find(
            (u) => u.username === username && u.password === password
        );
    
        if (user) {
            navigation.navigate('ManHinhChinh');
        } else {
            setShowModal(true);
        }
    };
    

    return (
        <ImageBackground
            source={{
                uri:
                    'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg',
            }}>
            <View style={styles.backgroud}>
                <View style={styles.logo}>
                    <Image
                        style={styles.img}
                        source={{
                            uri:
                                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png',
                        }}
                    />
                    <Text style={styles.cm}>Chào mừng bạn trở lại</Text>
                </View>
                <Text style={styles.pw}>Username</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => setUsername(text)}
                />
                <Text style={styles.pw}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        secureTextEntry={isPasswordHidden}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity
                        style={{}}
                        onPress={togglePasswordVisibility}>
                        <Text>{isPasswordHidden ? 'Hiện ' : 'Ẩn'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.checkboxContainer}>
                    
                    <Text style={styles.checkboxLabel}>Remember Me</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttondn} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttondk}
                        onPress={() => navigation.navigate('DangKy')}>
                        <Text style={styles.buttonText}>Đăng Ký</Text>
                    </TouchableOpacity>
                </View>
                <Modal visible={showModal} transparent={true}>
                    <View
                        style={{
                            width: 360,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            height: 660,
                        }}>
                        <View
                            style={{
                                backgroundColor: '#FFCC99',
                                padding: 20,
                                width: 330,
                                height: 150,
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text style={{ color: 'black', opacity: 1, fontSize: 25,fontWeight:'800',color:'red' }}>
                                Thông báo 
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    justifyContent: 'space-around',
                                    marginTop: 10,
                                }}>
                                    <Text style={{color:'black',fontSize:15}}>
                                        Bạn đã nhập sai Username Hoặc Pasword
                                    </Text>
                                <TouchableOpacity onPress={closeModal}>
                                    <Text style={{ marginTop: 25, color: 'black', fontSize: 15,fontWeight:'900',marginLeft:230 }}>
                                        Đóng
                                    </Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </ImageBackground>
    );
};

export default DangNhap;

const styles = StyleSheet.create({
    backgroud: {
        width: 360,
        height: 620,
        justifyContent: 'center',
    },
    logo: {
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxIcon: {
        width: 18,
        height: 18,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: 'white',
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
        padding: 10,
        marginLeft: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10,
    },
    checkbox: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
        marginLeft: 0,
    },
    checkboxLabel: {
        marginLeft: 0,
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalText: {
        fontSize: 18,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    passwordContainer: {
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
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },



})