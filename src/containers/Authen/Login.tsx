import { StatusBar, Dimensions, ScrollView, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import { Colors } from '../../resources/values/colors'
import { IMAGE_FOOTER_AUTHEN, IMAGE_TEXT_WELLCOME } from '../../assets'
import Button from '../../components/button/Button'
import { TextField } from '../../components/textfield/TextField'
import { AuthenStackScreenProps } from '../../navigaton/stack/AuthenNavigation'

const Login: React.FC<AuthenStackScreenProps<'LogIn'>> = ({ navigation, route }) => {

    const [phone, setPhone] = useState('');

    const goHome = () => {

    };

    const logIn = () => {
        navigation.navigate('SendOTP', {
            phone: phone,
        });
    };

    const register = () => {
        navigation.navigate('Register');
    };

    return (
        <ScrollView>
            <StatusBar barStyle={'light-content'} translucent/>
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
                <Text style={styles.txtLogin}>ĐĂNG NHẬP</Text>
                <TextField
                    title='Số điện thoại'
                    placeholder='Nhập số điện thoại của bạn'
                    input={{
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
        </ScrollView>
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