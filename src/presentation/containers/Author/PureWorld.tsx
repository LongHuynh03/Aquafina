import { Dimensions, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { IMAGE_BG_ITEM_CYCLE, IMAGE_BOTTLE_AQUAFINA, IMAGE_LIFE_CYCLE, IMAGE_RIPPLE_RING, IMAGE_TEXT_JOINTHERIPPLE, IMAGE_TEXT_LANTOAPHONGCACH, IMAGE_THUNG_CHUA } from '../../../assets/images'
import { Colors } from '../../resource/values/colors'
import Footer from '../../components/footer/Footer'
import LinearGradient from 'react-native-linear-gradient'
import Background from '../../components/background/Background'
import { HomeDrawerScreenProps } from '../../navigations/drawer/DrawerNavigation'
import { RootState, signOut, useAppDispatch } from '../../shared-state'
import { useSelector } from 'react-redux'
import { DialogLogIn, DialogLogOut } from '../../components/dialog/Dialog'

const PureWorld: React.FC<HomeDrawerScreenProps<'PureWorld'>> = ({ route, navigation }) => {

    const dispatch = useAppDispatch();
    const [showPopupLogOut, setShowPopupLogOut] = useState(false);
    const [showPopupLogIn, setShowPopupLogIn] = useState(false);

    const isLogin: boolean = useSelector<RootState, boolean>(
        (state) => state.user.isLogin
    )

    const menu = () => {
        navigation.openDrawer();
    }

    const logOut = () => {
        dispatch(signOut());
        navigation.navigate('Home');
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    };

    const goHome = () => {
        navigation.navigate('Home')
    };

    const goChart = () => {
        if (isLogin) {
            navigation.navigate('PureChart')
            navigation.reset({
                index: 0,
                routes: [{ name: 'PureChart' }],
            });
        }
        else {
            setShowPopupLogIn(true);
        }
    }

    const goCoin = () => {
        if (isLogin) {
            navigation.navigate('PureCoin')
            navigation.reset({
                index: 0,
                routes: [{ name: 'PureCoin' }],
            });
        }
        else{
            setShowPopupLogIn(true);
        }
    }
    
    const goGift = () => {
        navigation.navigate('PureGift')
        navigation.reset({
            index: 0,
            routes: [{ name: 'PureGift' }],
        });
    }
    const goMap = () => {
        navigation.navigate('PureMap')
        navigation.reset({
            index: 0,
            routes: [{ name: 'PureMap' }],
        });
    }
    const goWorld = () => {
        navigation.navigate('PureWorld')
        navigation.reset({
            index: 0,
            routes: [{ name: 'PureWorld' }],
        });
    }

    return (
        <Background
            type='home'
            centerFocus={goHome}
            leftFocus={menu}
            rightFocus={isLogin ? () => setShowPopupLogOut(true) : () => navigation.navigate('LogIn')}
        >
            <View style={styles.container}>
                <View style={styles.boxBanner}>
                    <Text style={styles.txtBanner}>Khám phá <Text style={{ fontWeight: '700' }}>vòng tròn biểu tượng</Text></Text>
                    <Image source={{ uri: IMAGE_TEXT_JOINTHERIPPLE }} style={styles.imageTextJoinTheRipple} />
                    <Image source={{ uri: IMAGE_BOTTLE_AQUAFINA }} style={styles.imageBottleAquafina} />

                </View>
                <View style={styles.boxContent}>
                    <Text style={styles.textTitle}>AQUAFINA</Text>
                    <Text style={styles.textContent}>
                        Tiếp tục hành trình lan tỏa vị ngon của sự tinh khiết
                        và không ngừng truyền cảm hứng về phong cách
                        sống thời thượng. Năm 2022, Aquafina đánh dấu cột
                        mốc mới tiên phong lan tỏa cảm cảm hứng sống
                        xanh bền vững (Sustainability), thời trang hơn và ý
                        nghĩa hơn đến với giới mộ điệu yêu thích thời trang.
                    </Text>
                    <Text style={styles.textContent}>
                        Hình ảnh vòng tròn lan tỏa cùng mũi tên mang tính
                        biểu tượng với ý nghĩa cùng Aquafina lan tỏa những
                        hành động tích cực đến môi trường và truyền cảm
                        hứng về phong cách Xanh bền vững.
                    </Text>
                </View>
                <View style={styles.boxBanner}>
                    <Image source={{ uri: IMAGE_THUNG_CHUA }} style={styles.imageThungChua} />
                    <Text style={[styles.textContent, { padding: 16 }]}>
                        Không chỉ lan tỏa cảm hứng sống Xanh, Aquafina
                        sẽ cùng bạn hành động để mang đến những tác
                        động tích cực đến môi trường.  Lần đầu tiên tự
                        hào giới thiệu, Trạm Tái Sinh của Aquafina – Nơi
                        tái sinh vòng đời mới cho chai nhựa.
                    </Text>
                    <Image source={{ uri: IMAGE_LIFE_CYCLE }} style={styles.imageThungChua} />
                </View>
                <LinearGradient colors={[Colors.BG_SCREEN, Colors.BG_CONTENT_1]} locations={[0.5, 1]}>
                    <Image source={{ uri: IMAGE_RIPPLE_RING }} style={[styles.imageThungChua, { position: 'absolute' }]} />
                    <View style={styles.boxCycle}>
                        <Text style={styles.txtTitle}>
                            5 bước trong chu trình tái chế
                        </Text>
                        <View style={[styles.item, { marginTop: Dimensions.get('screen').height * 0.03 }]}>
                            <ImageBackground source={{ uri: IMAGE_BG_ITEM_CYCLE }} style={styles.imageItemCycle}>
                                <Text style={styles.textNumber}>1</Text>
                            </ImageBackground>
                            <View style={styles.content}>
                                <Text style={styles.textCycle}>
                                    Chai nhựa rỗng được thu hồi tại máy
                                </Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <ImageBackground source={{ uri: IMAGE_BG_ITEM_CYCLE }} style={styles.imageItemCycle}>
                                <Text style={styles.textNumber}>2</Text>
                            </ImageBackground>
                            <View style={styles.content}>
                                <Text style={styles.textCycle}>
                                    Chai rỗng được nghiền thành mảnh nhựa
                                </Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <ImageBackground source={{ uri: IMAGE_BG_ITEM_CYCLE }} style={styles.imageItemCycle}>
                                <Text style={styles.textNumber}>3</Text>
                            </ImageBackground>
                            <View style={styles.content}>
                                <Text style={styles.textCycle}>
                                    Mảnh nhựa được sản xuất thành sợi
                                </Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <ImageBackground source={{ uri: IMAGE_BG_ITEM_CYCLE }} style={styles.imageItemCycle}>
                                <Text style={styles.textNumber}>4</Text>
                            </ImageBackground>
                            <View style={styles.content}>
                                <Text style={styles.textCycle}>
                                    Sợi được dệt thành vải và nhuộm
                                </Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <ImageBackground source={{ uri: IMAGE_BG_ITEM_CYCLE }} style={styles.imageItemCycle}>
                                <Text style={styles.textNumber}>5</Text>
                            </ImageBackground>
                            <View style={styles.content}>
                                <Text style={styles.textCycle}>
                                    Cuối cùng, vải được sử dụng tạo ra thành phẩm tái chế
                                </Text>
                            </View>
                        </View>
                        <Image source={{ uri: IMAGE_TEXT_LANTOAPHONGCACH }} style={styles.imageLanToaPhongCach} />
                    </View>
                </LinearGradient>
                <Footer
                    onPress_PureChart={goChart}
                    onPress_PureCoin={goCoin}
                    onPress_PureGift={goGift}
                    onPress_PureMap={goMap}
                    onPress_PureWorld={goWorld}
                    onPressReport={() => navigation.navigate('ReportError')}
                />
            </View>
            <DialogLogOut
                isVisible={showPopupLogOut}
                onPressCancel={() => setShowPopupLogOut(false)}
                onPressLogout={logOut}
            />
            <DialogLogIn
                isVisible={showPopupLogIn}
                onPressCancel={() => setShowPopupLogIn(false)}
                onPressLogIn={() => {
                    setShowPopupLogIn(false);
                    navigation.navigate('LogIn');
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    });
                }}
            />
        </Background>
    )
}

export default PureWorld

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxBanner: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Dimensions.get('screen').height * 0.05,
        backgroundColor: Colors.BG_SCREEN,
    },
    txtBanner: {
        fontSize: 20,
        fontWeight: '300',
        lineHeight: 24,
        color: Colors.BLUE
    },
    imageTextJoinTheRipple: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.5,
        height: Dimensions.get('screen').height * 0.2,
    },
    imageBottleAquafina: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.5
    },
    boxContent: {
        width: Dimensions.get('screen').width,
        paddingHorizontal: 16,
        paddingVertical: 9,
        backgroundColor: Colors.BG_CONTENT_1
    },
    textTitle: {
        width: '100%',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24,
        color: Colors.BLUE,
        textAlign: 'center',
    },
    textContent: {
        width: '100%',
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 15.6,
        color: Colors.BLACK,
        textAlign: 'justify',
        marginTop: Dimensions.get('screen').height * 0.015
    },
    imageThungChua: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.6
    },
    boxCycle: {
        width: Dimensions.get('screen').width,
        alignItems: 'center',
    },
    txtTitle: {
        width: Dimensions.get('screen').width * 0.7,
        height: Dimensions.get('screen').height * 0.04,
        backgroundColor: Colors.BLUE_KV,
        borderRadius: 8,
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 19.2,
        color: Colors.WHITE,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: Dimensions.get('screen').height * 0.05
    },
    item: {
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.06,
        flexDirection: 'row',
        marginTop: Dimensions.get('screen').height * 0.02
    },
    imageItemCycle: {
        position: 'absolute',
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.131,
        height: Dimensions.get('screen').height * 0.06,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textNumber: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 28.8,
        color: Colors.BLUE_KV,
    },
    content: {
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.059,
        marginStart: Dimensions.get('screen').width * 0.06,
        backgroundColor: Colors.WHITE,
        borderEndWidth: 10,
        borderColor: Colors.BLUE_KV,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 8
    },
    textCycle: {
        width: Dimensions.get('screen').width * 0.65,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.8,
        color: Colors.BLUE_KV,
        marginStart: Dimensions.get('screen').width * 0.1,
    },
    imageLanToaPhongCach: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.5,
        height: Dimensions.get('screen').height * 0.23,
        marginStart: Dimensions.get('screen').width * 0.2
    },
})