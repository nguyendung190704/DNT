import { Button, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ThemSanPham = () => {
  const [tenSP, setTenSP] = useState('');
  const [giaSP, setGiaSP] = useState('');
  const [loaiSP, setLoaiSP] = useState('');
  const [danhGia, setDanhGia] = useState('');
  const [linkAnh, setLinkAnh] = useState('');
  const [moTa, setMoTa] = useState('');

  const addProduct = async () => {
    try {
      const response = await axios.post('https://65bb0eedb4d53c066553ecc1.mockapi.io/danhSach', {
        tenSP,
        giaSP,
        loaiSP,
        yeuthich: 0,
        danhGia,
        linkAnh,
        moTa,
      });

      console.log('Product added successfully:', response.data);
    } catch (error) {
      console.error('Error adding product:', error.message);
      console.error('Error details:', error);
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.background}>
      <ImageBackground
        source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }}
      >
        <Text style={styles.pw}>Tên sản phẩm</Text>
        <TextInput
          style={styles.textInput}
          value={tenSP}
          onChangeText={(text) => setTenSP(text)}
        />
        <Text style={styles.pw}>Giá sản phẩm</Text>
        <TextInput
          style={styles.textInput}
          value={giaSP}
          onChangeText={(text) => setGiaSP(text)}
        />
        <Text style={styles.pw}>Loại Sản phẩm</Text>
        <TextInput
          style={styles.textInput}
          value={loaiSP}
          onChangeText={(text) => setLoaiSP(text)}
        />
        <Text style={styles.pw}>Đánh giá</Text>
        <TextInput
          style={styles.textInput}
          value={danhGia}
          onChangeText={(text) => setDanhGia(text)}
        />
        <Text style={styles.pw}>Link ảnh URL</Text>
        <TextInput
          style={styles.textInput}
          value={linkAnh}
          onChangeText={(text) => setLinkAnh(text)}
        />
        <Text style={styles.pw}>Mô tả sản phẩm </Text>
        <TextInput style={{
          height: 200, textAlignVertical: 'top', borderColor: '#eee',
          borderRadius: 10,
          borderWidth: 1,
          width: 320,
          marginLeft: 20,
        }} multiline={true} numberOfLines={16} placeholder='mô tả'
          value={moTa}
          onChangeText={(text) => setMoTa(text)}></TextInput>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttondk}
            onPress={addProduct}
          >
            <Text style={styles.buttonText}>Thêm sản phẩm</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

export default ThemSanPham

const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
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
    paddingBottom: 20
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
})