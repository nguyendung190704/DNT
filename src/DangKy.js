import { Button, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React from 'react';

const DangKy = () => {
  return (
    
    <ScrollView contentContainerStyle={styles.background}>
      <ImageBackground
                source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }}
            >
      <View style={styles.logo}>
        <Image
          style={styles.img}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png' }}
        />
        <Text style={styles.cm}>Chào mừng bạn đã đến </Text>
      </View>
      <Text style={styles.pw}>Fullname</Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.pw}>Email</Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.pw}>Username</Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.pw}>Password</Text>
      <TextInput style={styles.textInput} secureTextEntry={true} />
      <Text style={styles.pw}>Phone</Text>
      <TextInput style={styles.textInput} />
      <Text style={styles.pw}>Address</Text>
      <TextInput style={styles.textInput} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttondn}
          onPress={() => console.log('Đăng ký thành công')}>
          <Text style={styles.buttonText}>Đăng Ký</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttondk}
          onPress={() => console.log('Trở về thành công')}>
          <Text style={styles.buttonText}>Trở về</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flexGrow: 1,
    paddingTop:20,
  },
  logo: {
    alignItems: 'center',
    marginBottom: 20,
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
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom:20
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
});

export default DangKy;
