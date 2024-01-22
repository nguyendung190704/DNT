import { Button, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import DangKy from './DangKy';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';






const DangNhap = () => {
    const [isChecked, setChecked] = useState(false);
    const [password, setPassword] = useState('');
    const [isPasswordHidden, setPasswordHidden] = useState(true);

    const togglePasswordVisibility = () => {
        setPasswordHidden(!isPasswordHidden);
    };
    const navigation = useNavigation();


    return (
        <ImageBackground
            source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }}
        >
            <View style={styles.backgroud}>
                <View style={styles.logo}>
                    <Image
                        style={styles.img}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png' }} />
                    <Text style={styles.cm}>Chào mừng bạn trở lại</Text>
                </View>
                <Text style={styles.pw}>Username</Text>
                <TextInput style={styles.textInput} />
                <Text style={styles.pw} >Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        secureTextEntry={isPasswordHidden}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={togglePasswordVisibility}
                    >
                        <Text>{isPasswordHidden ? 'Hiện ' : 'Ẩn'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.checkboxContainer}>
                <CheckBox
                    checked={isChecked}
                    onPress={() => setChecked(!isChecked)}
                    checkedIcon={<View style={{ width: 18,height: 18,borderWidth: 3, borderColor: 'black',borderRadius:10,Color:'balck'}} />} 
                    uncheckedIcon={<View style={styles.checkboxIcon} />} 
                    containerStyle={styles.checkbox}
                />
                <Text style={styles.checkboxLabel}>Remember Me</Text>
            </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.buttondn}
                        onPress={() => navigation.navigate('ManHinhChinh')}>
                        <Text style={styles.buttonText}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttondk}
                        onPress={() => navigation.navigate('DangKy')}>
                        <Text style={styles.buttonText}>Đăng Ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default DangNhap

const styles = StyleSheet.create({
    backgroud: {
        width: 360,
        height: 620,
        justifyContent: 'center',
    },
    logo: {
        alignItems: 'center',
        marginBottom: 20
    },
    checkboxIcon: {
        width: 18,
        height: 18,
        borderWidth: 3,
        borderRadius:10,
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
        fontFamily: 'Popins'
    },
    pw: {
        marginLeft: 20,
        marginTop: 10
    },
    textInput: {
        borderColor: '#eee',
        borderRadius: 10,
        borderWidth: 1,
        height: 48,
        width: 320,
        padding: 10,
        marginLeft: 20
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10,
    },
    checkbox: {
        backgroundColor: 'transparent', // Ensure checkbox is not covered by background
        borderWidth: 0, // Hide checkbox border
        padding: 0, // Remove any padding
        marginLeft: 0, // Adjust as needed
    },
    checkboxLabel: {
        marginLeft: 0,
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