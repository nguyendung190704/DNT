import { Button, Image, StyleSheet, Text, TextInput, View, TouchableOpacity , ImageBackground} from 'react-native'
import React, {useState} from 'react'
import CheckBox from '@react-native-community/checkbox';


const DangNhap = () => {
    const [isChecked, setChecked] = useState(false);
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
            <TextInput style={styles.textInput } secureTextEntry={true}/>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isChecked}
                    onValueChange={(newValue) => setChecked(newValue)}
                    style={styles.checkbox}
                />
                <Text style={styles.checkboxLabel}>Remember me</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttondn}
                    onPress={() => console.log('Đăng nhập thành công')}>
                    <Text style={styles.buttonText}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttondk}
                    onPress={() => console.log('Đăng Ký thành công')}>
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
        marginLeft: 20
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10,
    },
    checkbox: {
        alignSelf: 'center',
    },
    checkboxLabel: {
        marginLeft: 8,
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 20,
        marginRight:20,
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