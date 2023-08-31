import { Alert, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import { Colors } from '../../resource/values/colors'
import { IMAGE_FOOTER_AUTHEN, IMAGE_TEXT_WELLCOME } from '../../../assets/images'
import Button from '../../components/button/Button'
import { TextField } from '../../components/textfield/TextField'
import { HomeDrawerScreenProps } from '../../navigations/drawer/DrawerNavigation'
import { Users } from '../../../domain'
import { firebaseConfig } from '../../../core'
import Background from '../../components/background/Background'
import { useSelector } from 'react-redux'
import { RootState } from '../../shared-state'

const Login: React.FC<HomeDrawerScreenProps<'LogIn'>> = ({ route, navigation }) => {

    const [phone, setPhone] = useState('');
    const isLogin: boolean = useSelector<RootState, boolean>(
            (state) => state.user.isLogin
        )

    const goHome = () => {
        navigation.navigate('Home')
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    };

    useEffect(() => {
        console.log(isLogin)
      return () => {}
    }, [])
    

    const logIn = async () => {
        let list: Users[] = [];
        try {
            const user = await firebaseConfig.ref('Users')
                .orderByChild('phone')
                .equalTo(phone)
                .limitToFirst(1)
                .once('value', (value: any) => {
                    value.forEach((item: any) => {
                        if (item != undefined || item != null) {
                            list.push(item);
                            navigation.navigate('SendOTP', {
                                phone: phone,
                                type: 'login'
                            });
                            setPhone('');
                        }
                    })
                }).then(() => {
                    if (list.length == 0) {
                        Alert.alert("Tài khoản không tồn tại");
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    const register = () => {
        navigation.navigate('Register');
        navigation.reset({
            index: 0,
            routes: [{ name: 'Register' }],
        });
    };

    return (
        <Background
            type='authen'
        >
            <View style={styles.container}>
                <Header
                    leftIcon={
                        <FoundationIcon name="home" size={30} color={Colors.GRAY_5} />
                    }
                    leftFocus={goHome}
                    centerFocus={goHome}
                />
                <View style={styles.viewImge}>
                    <Image source={{ uri: IMAGE_TEXT_WELLCOME }} style={styles.imgWellcome} />
                </View>
                <Text style={styles.txtLogin}>ĐĂNG NHẬP</Text>
                <TextField
                    title='Số điện thoại'
                    placeholder='Nhập số điện thoại của bạn'
                    input={{
                        keyboardType: 'phone-pad',
                        value: phone,
                        onChangeText: (text) => { setPhone(text) }
                    }} />
                <View style={styles.footer}>
                    <Image source={{ uri: IMAGE_FOOTER_AUTHEN }} style={styles.imgFooter} />
                    <View style={styles.boxButton}>
                        <Button
                            containerStyle={styles.btnLogin}
                            titleStyle={styles.titleLogin}
                            title='Đăng nhập'
                            onPress={logIn}
                        />
                        <Text style={styles.txtOr} >Hoặc</Text>
                        <Button
                            containerStyle={styles.btnRegister}
                            titleStyle={styles.titleRegister}
                            title='Đăng kí'
                            onPress={register}
                        />
                    </View>
                </View>
            </View>
        </Background>

    )
}

export default Login

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
    }
})