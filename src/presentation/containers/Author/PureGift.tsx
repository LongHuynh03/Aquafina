import {  Pressable, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { Colors } from '../../resource/values/colors'
import { IMAGE_BANNER_4, IMAGE_BG_GIFT, IMAGE_DOI_TAC, IMAGE_THE_LE } from '../../../assets/images'
import SnapCarousel from '../../components/carousel/SnapCarusel'
import Background from '../../components/background/Background'
import Footer from '../../components/footer/Footer'
import { HomeDrawerScreenProps } from '../../navigations/drawer/DrawerNavigation'
import { RootState, signOut, useAppDispatch } from '../../shared-state'
import Dialog from '../../components/dialog/Dialog'
import { useSelector } from 'react-redux'
export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.52);

const PureGift: React.FC<HomeDrawerScreenProps<'PureGift'>> = ({route, navigation})=> {

    const dispatch = useAppDispatch();
    const [showPopupLogOut, setShowPopupLogOut] = useState(false)

    const isLogin: boolean = useSelector<RootState, boolean>(
        (state) => state.user.isLogin
    )

    const menu = () => {
        navigation.openDrawer();
    }

    const logOut = () => {
        dispatch(signOut());
        navigation.navigate('LogIn')
    };

    const goHome = () => {
        navigation.navigate('Home')
    };

    const goChart = () => {
        navigation.navigate('PureChart')
        navigation.reset({
            index: 0,
            routes: [{ name: 'PureChart' }],
        });
    }

    const goCoin= () => {
        navigation.navigate('PureCoin')
        navigation.reset({
            index: 0,
            routes: [{ name: 'PureCoin' }],
        });
    }
    const goGift= () => {
        navigation.navigate('PureGift')
        navigation.reset({
            index: 0,
            routes: [{ name: 'PureGift' }],
        });
    }
    const goMap= () => {
        navigation.navigate('PureMap')
        navigation.reset({
            index: 0,
            routes: [{ name: 'PureMap' }],
        });
    }
    const goWorld= () => {
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
            rightFocus={isLogin ? () => setShowPopupLogOut(true) : logOut}
            >
            <View style={styles.container}>
                <Text style={styles.txtTitle}>Quà Tặng Xanh</Text>
                <View style={styles.boxCarousel}>
                    <Image source={{ uri: IMAGE_BG_GIFT }} style={styles.imageBackgroundGift} />
                    <View >
                        <SnapCarousel
                            isShowPagination='none'
                        />
                    </View>
                </View>
                <View style={styles.banner}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Rules')}>
                        <Text style={styles.textButton}>Khám phá ngay</Text>
                    </Pressable>
                    <Image source={{ uri: IMAGE_THE_LE }} style={styles.imageBanner} />
                </View>
                <Image source={{ uri: IMAGE_DOI_TAC }} style={styles.imageDoiTac} />
            </View>
            <Footer 
            onPress_PureChart={goChart}
            onPress_PureCoin={goCoin}
            onPress_PureGift={goGift}
            onPress_PureMap={goMap}
            onPress_PureWorld={goWorld}
            />
            <Dialog
                isVisible={showPopupLogOut}
                onPressCancel={() => setShowPopupLogOut(false)}
                onPressLogout={logOut}
            />
        </Background>
    )
}

export default PureGift

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    txtTitle: {
        width: Dimensions.get('screen').width,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '900',
        lineHeight: 21.6,
        color: Colors.BLUE_KV,
        marginVertical: Dimensions.get('screen').height * 0.02,
    },
    boxCarousel: {
        justifyContent: 'center',
        alignContent: 'center',
        height: Dimensions.get('screen').height * 0.4
    },
    imageBackgroundGift: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.5,
    },
    banner: {
        backgroundColor: Colors.BACKGROUND_PRIMARY,
        alignItems: 'center',
    },
    imageBanner: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.7,
    },
    button: {
        position: 'absolute',
        zIndex: 1,
        width: Dimensions.get('screen').width * 0.5,
        height: Dimensions.get('screen').height * 0.05,
        backgroundColor: Colors.BLUE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        bottom: Dimensions.get('screen').height * 0.01,
    },
    textButton: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.WHITE,
    },
    imageDoiTac: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.3,
    },
})