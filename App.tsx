import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import 'react-native-gesture-handler';
import React from 'react'
import DangNhap from './src/DangNhap';
import DangKy from './src/DangKy';
import ManHinhChinh from './src/ManHinhChinh';
import ManYeuThich from './src/ManYeuThich';
import GioHang from './src/GioHang';
import ManLienHe from './src/ManLienHe';
import SanPham from './src/SanPham';
import ManChao from './src/ManChao';
import ThemSanPham from './src/ThemSanPham';
import GioiThieu from './src/GioiThieu';
import Home from './baitap/Home';
import Them from './baitap/Them';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{
    //       gestureEnabled: false
    //     }}
    //   >
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       options={{ headerShown: false }}
    //     />
    //      <Stack.Screen
    //       name="Them"
    //       component={Them}
    //       options={{ title:'Thêm sản phẩm'}}

    //     />
        
    //   </Stack.Navigator>
    // </NavigationContainer>
    /////////////////////////////////////////////////////

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ManChao"
        screenOptions={{
          gestureEnabled: false
        }}
      >
        <Stack.Screen
          name="ManChao"
          component={ManChao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DangNhap"
          component={DangNhap}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManHinhChinh"
          component={ManHinhChinh}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DangKy"
          component={DangKy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManYeuThich"
          component={ManYeuThich}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GioHang"
          component={GioHang}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManLienHe"
          component={ManLienHe}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SanPham"
          component={SanPham}
          options={{
            title: 'Sản phẩm', headerTitleStyle: { fontSize: 18, fontWeight: 'bold' }, headerBackground: () => (
              <ImageBackground
                style={{ flex: 1 }}
                source={{
                  uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg'
                }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ThemSanPham"
          component={ThemSanPham}
          options={{ title:'Thêm sản phẩm'}}
        />
        <Stack.Screen
          name="GioiThieu"
          component={GioiThieu}
          options={{title:'Giới thiệu' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
