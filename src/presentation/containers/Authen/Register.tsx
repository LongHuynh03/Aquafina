import { Alert, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import { Colors } from '../../resource/values/colors'
import { IMAGE_FOOTER_AUTHEN, IMAGE_TEXT_WELLCOME } from '../../../assets/images'
import { TextField } from '../../components/textfield/TextField'
import Button from '../../components/button/Button'
import { HomeDrawerScreenProps } from '../../navigations/drawer/DrawerNavigation'
import { Users } from '../../../domain'
import { firebaseConfig } from '../../../core'
import Background from '../../components/background/Background'

const Register: React.FC<HomeDrawerScreenProps<'Register'>> = ({ route, navigation }) => {

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

    const goHome = () => {
        navigation.navigate('Home')
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    };

    const register = async () => {
        if (phone.length != 10) {
            Alert.alert('Số điện thoại không hợp lệ')
        }
        else {
            let list: Users[] = [];
            try {
                const user = await firebaseConfig.ref('Users')
                    .orderByChild('phone')
                    .equalTo(phone)
                    .limitToFirst(1)
                    .once('value', (value: any) => {
                        value.forEach((item: any) => {
                            if (item != undefined || item != null) {
                                let get: Users = {
                                    keyUser: '',
                                    rank: 0,
                                }
                                list.push(get);
                                Alert.alert("Tài khoản đã tồn tại");
                            }
                        })
                    });
                if (list.length == 0) {
                    navigation.navigate('SendOTP', {
                        phone: phone,
                        name: name,
                        type: 'register'
                    })
                    setPhone('');
                    setName('');
                }
            } catch (error) {
                console.log(error);
            }
        }

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
                <Text style={styles.txtLogin}>ĐĂNG KÝ</Text>
                <TextField
                    title='Họ và tên'
                    placeholder='Nhập họ và tên của bạn'
                    input={{
                        value: name,
                        onChangeText: (text) => { setName(text) }
                    }} />
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
                            title='Đăng ký'
                            onPress={register}
                        />
                    </View>
                </View>
            </View>
        </Background>

    )
}

export default Register

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
        borderColor: Colors.BLUE_500
    },
    titleLogin: {
        color: Colors.WHITE,
    },
})