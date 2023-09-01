import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../resource/values/colors'
import Footer from '../../components/footer/Footer'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { IMAGE_AVATAR, IMAGE_BG_BG_COIN, IMAGE_BG_COIN, IMAGE_STROKE_AQUFINA_BOTTOM } from '../../../assets/images'
import Background from '../../components/background/Background'
import { HomeDrawerScreenProps } from '../../navigations/drawer/DrawerNavigation'
import { RootState, signOut, useAppDispatch } from '../../shared-state'
import { useSelector } from 'react-redux'
import { DialogLogIn, DialogLogOut } from '../../components/dialog/Dialog'
import { Users } from '../../../domain'

const PureCoin: React.FC<HomeDrawerScreenProps<'PureCoin'>> = ({ route, navigation }) => {

    const dispatch = useAppDispatch();
    const [showPopupLogOut, setShowPopupLogOut] = useState(false);
    const [showPopupLogIn, setShowPopupLogIn] = useState(false);

    const isLogin: boolean = useSelector<RootState, boolean>(
        (state) => state.user.isLogin
    )

    const user: Users = useSelector<RootState, Users>(
        (state) => state.user.userData
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
                <Text style={styles.textTitle} >Thông tin người chơi</Text>
                <View style={styles.boxImage}>
                    <ImageBackground source={{ uri: user.avatar }} style={styles.imageAvatar} >
                        <View style={{ width: '65%', height: '100%' }}></View>
                        <View style={styles.boxCamera}>
                            <FeatherIcon name='camera' color={Colors.WHITE} size={12} />
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.boxContent}>
                    <Image source={{ uri: IMAGE_BG_BG_COIN }} style={styles.imageBGBGCoin} />
                    <View style={styles.boxInfor}>
                        <Text style={styles.textElement}>
                            Họ và tên
                        </Text>
                        <Text style={styles.textInfor}>
                            {user.name}
                        </Text>
                    </View>
                    <View style={styles.boxInfor}>
                        <Text style={styles.textElement}>
                            Số điện thoại
                        </Text>
                        <Text style={styles.textInfor}>
                            {user.phone}
                        </Text>
                    </View>
                    <View style={styles.boxCoin}>
                        <ImageBackground source={{ uri: IMAGE_BG_COIN }} style={styles.imageBGCoin}>
                            <Text style={styles.textCoin}>
                                Số Điểm tích lũy:
                            </Text>
                            <Text style={styles.textCoinUser}>
                                {user.point}
                            </Text>
                        </ImageBackground>
                    </View>
                </View>

                <Text style={[styles.textThanks, { marginTop: Dimensions.get('screen').height * 0.05 }]}>
                    Cảm ơn bạn đã tham gia
                </Text>
                <Text style={styles.textThanks}>
                    Chiến dịch <Text style={{ fontWeight: '700' }}> “Sải bước phong cách Xanh”</Text>
                </Text>
                <Text style={styles.textThanks}>
                    cùng <Text style={{ fontWeight: '700' }}> Aquafina</Text>
                </Text>
                <Image source={{ uri: IMAGE_STROKE_AQUFINA_BOTTOM }} style={styles.strokeAquafina} />
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

export default PureCoin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    textTitle: {
        width: Dimensions.get('screen').width,
        fontSize: 18,
        fontWeight: '900',
        lineHeight: 21.6,
        color: Colors.BLUE_KV,
        textAlign: 'center',
        marginVertical: Dimensions.get('screen').height * 0.03,
    },
    boxImage: {
        width: Dimensions.get('screen').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageAvatar: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.25,
        height: Dimensions.get('screen').width * 0.25,
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    boxCamera: {
        backgroundColor: Colors.BLUE,
        width: Dimensions.get('screen').width * 0.05,
        height: Dimensions.get('screen').width * 0.05,
        borderColor: Colors.WHITE,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxContent: {},
    imageBGBGCoin: {
        position: 'absolute',
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 1.5,
        height: Dimensions.get('screen').height,
        end: Dimensions.get('screen').width * 0.25,
        top: '-30%',
    },
    boxInfor: {
        width: Dimensions.get('screen').width,
        paddingHorizontal: Dimensions.get('screen').width * 0.04,
        marginVertical: Dimensions.get('screen').height * 0.005,
    },
    textElement: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.BLACK
    },
    textInfor: {
        width: "100%",
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.GRAY_TEXT,
        backgroundColor: Colors.GRAY,
        borderRadius: 4,
        padding: 10,
        marginVertical: Dimensions.get('screen').height * 0.01,
    },
    boxCoin: {
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        marginVertical: Dimensions.get('screen').height * 0.03,
    },
    imageBGCoin: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCoin: {
        fontSize: 18,
        fontWeight: '900',
        lineHeight: 21.6,
        color: Colors.BLUE_KV,
    },
    textCoinUser: {
        fontSize: 80,
        fontWeight: '700',
        lineHeight: 96,
        color: Colors.TEXT_COIN,
    },
    textThanks: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.BLUE_KV,
        textTransform: 'uppercase',
        paddingHorizontal: Dimensions.get('screen').width * 0.04,
    },
    strokeAquafina: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.05,
        marginTop: Dimensions.get('screen').height * 0.05,
    }
})