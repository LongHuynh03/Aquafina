import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../resource'
import { IMAGE_BG_DOITAC, IMAGE_MAP, IMAGE_PURE_MAP, IMAGE_THUNG_CHUA, LOGO_COOPMART, LOGO_LOTTEMART } from '../../../assets'
import Footer from '../../components/footer/Footer'
import Background from '../../components/background/Background'
import { HomeDrawerScreenProps } from '../../navigations/drawer/DrawerNavigation'
import { RootState, signOut, useAppDispatch } from '../../shared-state'
import { useSelector } from 'react-redux'
import { DialogLogIn, DialogLogOut } from '../../components/dialog/Dialog'

const PureMap: React.FC<HomeDrawerScreenProps<'PureMap'>> = ({ route, navigation }) => {

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
                    <Image source={{ uri: IMAGE_THUNG_CHUA }} style={styles.imageThungChua} />

                    <Text style={styles.txtBanner_1}>BẢN ĐỒ XANH</Text>
                    <Text style={styles.txtBanner_2}><Text style={{ fontWeight: '700' }}>Địa điểm</Text> đặt</Text>
                    <Image source={{ uri: IMAGE_PURE_MAP }} style={styles.imagePureMap} />
                </View>

                <LinearGradient colors={[Colors.WHITE, Colors.BG_CONTENT_1, Colors.BG_CONTENT_0]}>
                    <Image source={{ uri: IMAGE_BG_DOITAC }} style={styles.imageBgDoiTac} />
                    <Text style={styles.txtDoiTac}>ĐỐI TÁC</Text>
                    <View style={styles.boxThanks}>
                        <Text style={styles.txtThanks}>
                            Aquafina hân hạnh đồng hành cùng các đối tác để lan
                            tỏa phong cách Xanh.</Text>
                    </View>
                    <View style={styles.boxImageDoiTac}>
                        <Image source={{ uri: LOGO_COOPMART }} style={styles.imageDoiTac} />
                        <Image source={{ uri: LOGO_LOTTEMART }} style={styles.imageDoiTac} />
                    </View>

                    <Text style={styles.txtBanner_3}>Địa điểm đặt “Trạm tái sinh” trên bản đồ</Text>
                    <Image source={{ uri: IMAGE_MAP }} style={styles.imageMap} />
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

export default PureMap

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
    imageThungChua: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.7
    },
    txtBanner_1: {
        width: Dimensions.get('screen').width,
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24,
        color: Colors.BLUE_KV,
        textAlign: 'center'
    },
    txtBanner_2: {
        width: Dimensions.get('screen').width,
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 21.6,
        color: Colors.BLUE_KV,
        textAlign: 'center'
    },
    imagePureMap: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.62
    },
    imageBgDoiTac: {
        position: 'absolute',
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.55
    },
    txtDoiTac: {
        width: Dimensions.get('screen').width,
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 24,
        color: Colors.BLUE_KV,
        textAlign: 'center',
        marginTop: Dimensions.get('screen').height * 0.03
    },
    boxThanks: {
        width: Dimensions.get('screen').width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height * 0.03
    },
    txtThanks: {
        width: Dimensions.get('screen').width * 0.8,
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 14.4,
        color: Colors.BLUE_KV,
        textAlign: 'center'
    },
    boxImageDoiTac: {
        flexDirection: 'row',
    },
    imageDoiTac: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.3,
        height: Dimensions.get('screen').height * 0.1,
        margin: Dimensions.get('screen').width * 0.1,
    },
    txtBanner_3: {
        width: Dimensions.get('screen').width,
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 19.2,
        color: Colors.BLUE_KV,
        textAlign: 'center'
    },
    imageMap: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.3
    },
})