import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const ManHinhChinh = () => {
    const danhSach = [
        { id: 1, tenSP: 'Cà phê Arabica', giaSP: 500000, loaiSP: 'cfvn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202112281009085973.jpg' },
        { id: 2, tenSP: 'Cà phê Robusta', giaSP: 450000, loaiSP: 'cfvn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121539225779.jpg' },
        { id: 3, tenSP: 'Cà phê Culi', giaSP: 600000, loaiSP: 'cfvn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121539504360.jpg' },
        { id: 4, tenSP: 'Cà phê Cherry', giaSP: 1300000, loaiSP: 'cfvn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121540125970.jpg' },
        { id: 5, tenSP: 'Cà phê Moka', giaSP: 590000, loaiSP: 'cfvn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121541144416.jpg' },
        { id: 6, tenSP: 'Cà phê Espresso', giaSP: 1340000, loaiSP: 'cfnn', linkAnh: 'https://cdn.tgdd.vn/Files/2020/04/08/1247674/ca-phe-espresso-cappuccino-hay-macchiato-khac-nhau-nhu-the-nao-202004081936305660.jpg' },
        { id: 7, tenSP: 'Cà phê Cappuccino', giaSP: 990000, loaiSP: 'cfnn', linkAnh: 'https://media.saigontourist.edu.vn/Media/1_STHCHOME/FolderFunc/202303/Images/capuchino-la-gi-20230320105423-e.jpg' },
        { id: 8, tenSP: 'Cà phê Macchiato', giaSP: 1190000, loaiSP: 'cfnn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121544374224.jpg' },
        { id: 9, tenSP: 'Cà phê Latte', giaSP: 390000, loaiSP: 'cfnn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121545409483.jpg' },
        { id: 10, tenSP: 'Cà phê Americano', giaSP: 690000, loaiSP: 'cfnn', linkAnh: 'https://cdn.tgdd.vn/Files/2019/08/17/1188646/tim-hieu-11-loai-ca-phe-pho-bien-nhat-o-viet-nam-hien-nay-202008121547335870.jpg' },
    ];
    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };

    return (
        <View>
            <ScrollView style={{height:580}}>
                <ImageBackground
                    source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }}
                >
                    <View style={styles.container}>
                        <Image
                            style={{ width: 360, height: 140 }}
                            source={{ uri: 'https://capherangxay.vn/wp-content/uploads/2019/01/nhung-luu-y-de-mo-quan-cafe-nguyen-chat-2.jpg' }} />
                        <ImageBackground
                            style={{ width: 360, height: 60, borderTopRightRadius: 20, opacity: 2, alignItems: 'center', justifyContent: 'center' }}
                            source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }} >
                            <Text style={styles.title}>Danh sách các sản phẩm</Text>
                        </ImageBackground>
                        <FlatList
                            data={danhSach}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <View style={styles.productItem}>
                                    <Image
                                        style={styles.img}
                                        source={{ uri: item.linkAnh }} />
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
                                            onPress={() => console.log('Thêm vào giỏ hàng thành công')}>
                                            <Image
                                                style={styles.imgadd}
                                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png' }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                        <ImageBackground
                            style={{ width: 360, height: 60, borderTopRightRadius: 20, opacity: 2, alignItems: 'center', justifyContent: 'center' }}
                            source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }} >
                            <Text style={styles.title}>Sản phẩm trong nước</Text>
                        </ImageBackground>


                        <FlatList
                            data={danhSach.filter(item => item.loaiSP === 'cfvn')}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <View style={styles.productItem}>
                                    <Image
                                        style={styles.img}
                                        source={{ uri: item.linkAnh }} />
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
                                            onPress={() => console.log('Thêm vào giỏ hàng thành công')}>
                                            <Image
                                                style={styles.imgadd}
                                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png' }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />

                        <ImageBackground
                            style={{ width: 360, height: 40, borderTopRightRadius: 20, opacity: 2, alignItems: 'center', justifyContent: 'center' }}
                            source={{ uri: 'https://image.slidesdocs.com/responsive-images/background/coffee-culture-illustration-powerpoint-background_e224109f77__960_540.jpg' }} >
                            <Text style={styles.title}>Sản phẩm nhập khẩu</Text>
                        </ImageBackground>

                        <FlatList
                            data={danhSach.filter(item => item.loaiSP === 'cfnn')}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <View style={styles.productItem}>
                                    <Image
                                        style={styles.img}
                                        source={{ uri: item.linkAnh }} />
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
                                            onPress={() => console.log('Thêm vào giỏ hàng thành công')}>
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
                <View style={{flexDirection:'row',padding:10}}>

                    <TouchableOpacity
                        style={{width:80,alignItems:'center',opacity:1}}
                        onPress={() => console.log('')}>
                        <Image
                            style={styles.imgadd}
                            source={{ uri: 'https://i.pinimg.com/originals/0c/02/ce/0c02ce4850d6b88d44f87271ff5f4a71.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{width:80,alignItems:'center',opacity:0.7}}
                        onPress={() => console.log('')}>
                        <Image
                            style={styles.imgadd}
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/60/60992.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{width:80,alignItems:'center',opacity:0.7}}
                        onPress={() => console.log('')}>
                        <Image
                            style={styles.imgadd}
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/105/105220.png' }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{width:80,alignItems:'center',opacity:0.7}}
                        onPress={() => console.log('hihi')}>
                        <Image
                            style={styles.imgadd}
                            source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png' }} />
                    </TouchableOpacity>
        
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
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    ngang: {
        flexDirection: 'row',
    },
    imgadd: {
        width: 30,
        height: 30,
    },
})
