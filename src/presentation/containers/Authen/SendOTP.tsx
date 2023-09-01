import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import { Colors } from '../../resource/values/colors'
import { IMAGE_FOOTER_AUTHEN, IMAGE_TEXT_WELLCOME } from '../../../assets/images'
import { OTPField } from '../../components/textfield/TextField'
import Button from '../../components/button/Button'
import LinearGradient from 'react-native-linear-gradient'
import { HomeDrawerScreenProps } from '../../navigations/drawer/DrawerNavigation'
import { RootState, getData, signIn, signUp, useAppDispatch } from '../../shared-state'
import { useSelector } from 'react-redux'
import Background from '../../components/background/Background'

const SendOTP: React.FC<HomeDrawerScreenProps<'SendOTP'>> = ({ route, navigation }) => {

    const [isReSend, setIsReSend] = useState(true);
    const [time, setTime] = useState(30);
    const [code_1, setCode_1] = useState('');
    const [code_2, setCode_2] = useState('');
    const [code_3, setCode_3] = useState('');
    const [code_4, setCode_4] = useState('');
    const [falseOTP, setFalseOTP] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

    const phone: string | undefined = route.params?.phone;
    const name = route.params?.name;
    const type = route?.params?.type;

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isReSend && time >= 1) {
            setTimeout(() => setTime((time) => time -= 1), 1000);
        }
        if (time == 1) {
            setIsReSend(false);
        }

        return () => { }
    }, [time, setIsReSend])

    const decTime = () => {
        if (time <= 0) {
            setIsReSend(true);
            setTime(30);
        }
    }

    const goHome = () => {
        navigation.navigate('Home')
    };

    const logIn = () => {
        setIsRegister(false);
        navigation.navigate('LogIn');
        navigation.reset({
            index: 0,
            routes: [{ name: 'LogIn' }],
        });
    };

    const submit = () => {
        const code = code_1.toString() + code_2.toString() + code_3.toString() + code_4.toString();
        const data: getData = {
            phone: phone ? phone : '',
            name: name,
        }
        if (code == '1111') {
            console.log('Đúng code');
            if (type == 'login') {
                dispatch(signIn(data))
                navigation.navigate('Home');
                resetForm();
            }
            else {
                dispatch(signUp(data))
                setIsRegister(true);
                resetForm();
            }
        }
        else {
            Alert.alert("Mã OTP không đúng");
            setFalseOTP(true);
            resetForm();
        }
    };

    const resetForm = () => {
        setCode_1('');
        setCode_2('');
        setCode_3('');
        setCode_4('');
    }

    return (
        <Background
            type='authen'
            centerFocus={goHome}
            leftFocus={goHome}
        >
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
                {
                    !isRegister ?
                        <View style={styles.boxOtp}>
                            <Text style={styles.txtLogin}>NHẬP OTP</Text>
                            <OTPField
                                phone={phone}
                                status={falseOTP}
                                inputProps_1={{
                                    onFocus: () => {setFalseOTP(false)},
                                    keyboardType: 'phone-pad',
                                    value: code_1,
                                    onChangeText: (text) => { setCode_1(text) }
                                }}
                                inputProps_2={{
                                    onFocus: () => {setFalseOTP(false)},
                                    keyboardType: 'phone-pad',
                                    value: code_2,
                                    onChangeText: (text) => { setCode_2(text) }
                                }}
                                inputProps_3={{
                                    onFocus: () => {setFalseOTP(false)},
                                    keyboardType: 'phone-pad',
                                    value: code_3,
                                    onChangeText: (text) => { setCode_3(text) }
                                }}
                                inputProps_4={{
                                    onFocus: () => {setFalseOTP(false)},
                                    keyboardType: 'phone-pad',
                                    value: code_4,
                                    onChangeText: (text) => { setCode_4(text) }
                                }}
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
                        :
                        <View style={styles.boxNotification}>
                            <Text style={styles.textTitle}>Đăng ký thành công</Text>
                            <Text style={styles.text}>Vui lòng đăng nhập để bắt đầu chương trình</Text>
                            <View style={styles.footer}>
                                <Image source={{ uri: IMAGE_FOOTER_AUTHEN }} style={styles.imgFooter} />
                                <LinearGradient colors={[Colors.WHITE_0, Colors.WHITE_93, Colors.WHITE]} style={styles.boxButton}>
                                    <Button
                                        containerStyle={styles.btnLogin}
                                        titleStyle={styles.titleLogin}
                                        title='Đăng nhập'
                                        onPress={logIn}
                                    />
                                </LinearGradient>
                            </View>
                        </View>
                }

            </View>
        </Background>

    )
}

export default SendOTP

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        height: Dimensions.get('screen').height,
        flexDirection: 'column',
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
    boxOtp: {
        height: Dimensions.get('screen').height * 0.8
    },
    boxNotification: {
        height: Dimensions.get('screen').height * 0.8,
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.GRAY_5,
        lineHeight: 16.8,
        marginTop: Dimensions.get('screen').height * 0.03
    },
    textTitle: {
        fontSize: 22,
        fontWeight: '500',
        color: Colors.BLUE_500,
        lineHeight: 26.4,
        marginTop: Dimensions.get('screen').height * 0.1
    }
})