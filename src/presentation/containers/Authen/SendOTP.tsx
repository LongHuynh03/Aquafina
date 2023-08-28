import { StatusBar, Dimensions, ScrollView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Header from '../../components/header/Header'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import { Colors } from '../../resource/values/colors'
import { IMAGE_FOOTER_AUTHEN, IMAGE_TEXT_WELLCOME } from '../../../assets/images'
import { OTPField } from '../../components/textfield/TextField'
import Button from '../../components/button/Button'
import LinearGradient from 'react-native-linear-gradient'
import { AuthenStackScreenProps } from '../../navigations/stack/AuthenNavigation'
import { HomeDrawerScreenProps } from '../../navigations/drawer/DrawerNavigation'

const SendOTP : React.FC<HomeDrawerScreenProps<'SendOTP'>> = ({route, navigation}) => {

    const [isReSend, setIsReSend] = useState(true);
    const [time, setTime] = useState(30);

    // const phone = route.params?.phone;

    useEffect(() => {
        if (isReSend && time >= 1) {
            setTimeout(() => setTime((time) => time -= 1), 100);
        }
        if (time == 1) {
            setIsReSend(false);
        }
        return () => { }
    }, [time, setIsReSend])

    const decTime = () => {
        setIsReSend(true);
        setTime(30);
        setTimeout(() => setTime((time) => time -= 1), 100);
    }

    const goHome = () => {
        navigation.navigate('Home')
    };

    const submit = () => {
        
    };

    return (
        <ScrollView>
            <StatusBar barStyle={'light-content'} translucent />
            <View style={styles.container}>
                <Header
                    leftIcon={
                        <FoundationIcon name="home" size={30} color={Colors.GRAY_5} />
                    }
                    leftFocus={goHome}
                />
                <View style={styles.viewImge}>
                    <Image source={{ uri: IMAGE_TEXT_WELLCOME }} style={styles.imgWellcome} />
                </View>
                <Text style={styles.txtLogin}>NHẬP OTP</Text>
                <OTPField
                    // phone={phone}
                />
                <View style={styles.footer}>
                    <Image source={{ uri: IMAGE_FOOTER_AUTHEN }} style={styles.imgFooter} />
                    <LinearGradient colors={[Colors.WHITE_0, Colors.WHITE_93, Colors.WHITE]} style={styles.boxButton}>
                        <Button
                            containerStyle={styles.btnLogin}
                            titleStyle={styles.titleLogin}
                            title='Xác nhận'
                            onPress={submit}
                        />
                        {
                            isReSend ?
                                <Text style={styles.txtNotif}>
                                    Mã sẽ được gửi trong vòng
                                    <Text style={styles.txtTime}> {time} GIÂY</Text>
                                </Text>
                                :
                                <></>
                        }
                        <TouchableOpacity onPress={decTime}>
                            <Text style={styles.txtReSend}>Gửi lại mã</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </ScrollView>
    )
}

export default SendOTP

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        height: Dimensions.get('screen').height
    },
    viewImge: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgWellcome: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.15
    },
    txtLogin: {
        width: Dimensions.get('screen').width,
        fontSize: 22,
        fontWeight: '900',
        lineHeight: 26.4,
        textAlign: 'center',
        color: Colors.BLUE_500,
        marginTop: Dimensions.get('screen').height * 0.03
    },
    footer: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        bottom: 0,
    },
    imgFooter: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.45,
    },
    boxButton: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.2,
        padding: Dimensions.get('screen').width * 0.04,
        bottom: Dimensions.get('screen').height * 0.05,
        alignItems: 'center',
    },
    btnLogin: {
        backgroundColor: Colors.BLUE_500,
    },
    titleLogin: {
        color: Colors.WHITE,
    },
    txtOr: {
        textAlign: 'center',
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 13.2,
        color: Colors.GRAY_5,
        marginVertical: Dimensions.get('screen').height * 0.01,
    },
    btnRegister: {
        backgroundColor: Colors.GRAY_1,
    },
    titleRegister: {
        color: Colors.BLUE_KV,
    },
    txtNotif: {
        width: '100%',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14.4,
        color: Colors.GRAY_5,
        marginTop: Dimensions.get('screen').height * 0.01
    },
    txtTime: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 14.4,
        color: Colors.RED
    },
    txtReSend: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14.4,
        color: Colors.BLUE_KV,
        marginTop: Dimensions.get('screen').height * 0.01
    },
})