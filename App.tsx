import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DangNhap from './src/DangNhap';
import DangKy from './src/DangKy';
import ManHinhChinh from './src/ManHinhChinh';
import ManYeuThich from './src/ManYeuThich';
import GioHang from './src/GioHang';
import ManLienHe from './src/ManLienHe';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DangNhap"
        screenOptions={{
          gestureEnabled: false
        }}
      >
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
