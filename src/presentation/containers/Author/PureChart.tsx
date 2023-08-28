import { StatusBar, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import { Colors } from '../../resource/values/colors'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Footer from '../../components/footer/Footer'
import { IMAGE_AVATAR, IMAGE_BG_BG_COIN } from '../../../assets/images'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { AuthorStackScreenProps } from '../../navigations/stack/AuthorNavigation'
import { Users } from '../../../domain'
import { firebaseConfig } from '../../../core'
import { Chart } from '../../components'
import Background from '../../components/background/Background'
import { HomeDrawerScreenProps } from '../../navigations/drawer/DrawerNavigation'


const PureChart: React.FC<HomeDrawerScreenProps<'PureChart'>> = ({route, navigation}) => {

    const [activeDay, setActiveDay] = useState(1);
    const [listUsers, setListUsers] = useState<Users[]>([]);

    useEffect(() => {

        const getUsers = async () => {
            const users = await firebaseConfig.ref('/Users')
                .once('value', (value: any) => {
                    let list: Users[] = [];
                    value.forEach((item: any) => {
                        if (item.val().rank <= 10) {
                            let user: Users = {
                                keyUser: "1",
                                rank: 0,
                            }
                            user.keyUser = item.key;
                            user.avatar = item.val().avatar;
                            user.name = item.val().name;
                            user.phone = item.val().phone;
                            user.point = item.val().point;
                            user.rank = item.val().rank;
                            list.push(user);
                        }
                    });
                    list.sort((a, b) => a.rank - b.rank);
                    setListUsers(list);
                })
        };

        getUsers();

        return () => { }
    }, [])


    const menu = () => {
        navigation.openDrawer();
    }

    const logOut = () => {
        navigation.navigate('LogIn')
    };

    const goHome = () => {
        console.log(123)
    };

    return (
        <Background
            type='home'
            centerFocus={goHome}
            leftFocus={menu}
            rightFocus={logOut}
        >
            <View style={styles.container}>
                <Chart
                    isLogin={false}
                    listData={listUsers}
                    where='home'
                />
                <View style={styles.boxQuantity}>
                    <MaterialIcon name='arrow-back-ios-new' color={Colors.BLUE_KV} size={20} />
                    <Text style={styles.textQuantity_1}>1</Text>
                    <Text style={styles.textQuantity}>2</Text>
                    <Text style={styles.textQuantity}>...</Text>
                    <Text style={styles.textQuantity}>10</Text>
                    <MaterialIcon name='arrow-forward-ios' color={Colors.BLUE_KV} size={20} />
                </View>
                <Footer
                onPress_PureChart={() => navigation.navigate('PureChart')}
                onPress_PureCoin={() => navigation.navigate('PureCoin')}
                onPress_PureGift={() => navigation.navigate('PureGift')}
                onPress_PureMap={() => navigation.navigate('PureMap')}
                onPress_PureWorld={() => navigation.navigate('PureWorld')}
                />
            </View>
        </Background>

    )
}

export default PureChart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxChart: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.BLUE_KV,
        marginTop: Dimensions.get('screen').height * 0.03
    },
    boxTitle: {
        width: Dimensions.get('screen').width * 0.5,
        height: Dimensions.get('screen').height * 0.04,
        backgroundColor: Colors.BLUE_300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginTop: - Dimensions.get('screen').height * 0.02
    },
    textTitle: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 21.6,
        color: Colors.WHITE
    },
    imageBGBGCoin: {
        position: 'absolute',
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.7,
        height: Dimensions.get('screen').height * 0.6,
        end: Dimensions.get('screen').width * 0.7,
        top: '-5%',
        opacity: 0.5,
        zIndex: 1
    },
    listDay: {
        marginVertical: Dimensions.get('screen').height * 0.03,
    },
    itemDay: {
        borderWidth: 1,
        borderColor: Colors.WHITE,
        padding: Dimensions.get('screen').width * 0.02,
        borderRadius: 3,
        marginEnd: Dimensions.get('screen').width * 0.05
    },
    itemDayChoose: {
        borderWidth: 1,
        borderColor: Colors.WHITE,
        padding: Dimensions.get('screen').width * 0.02,
        borderRadius: 3,
        marginEnd: Dimensions.get('screen').width * 0.05,
        backgroundColor: Colors.WHITE,
    },
    textDay: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.WHITE,
    },
    textDayChoose: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.BLUE_KV,
    },
    textHangCuaToi: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.WHITE,
        margin: Dimensions.get('screen').height * 0.005
    },
    boxMyrank: {
        width: Dimensions.get('screen').width * 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: Colors.WHITE,
        backgroundColor: Colors.WHITE_20,
        borderRadius: 6,
        padding: Dimensions.get('screen').width * 0.02,
        margin: Dimensions.get('screen').height * 0.01
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textRank: {
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 13.2,
        color: Colors.WHITE,
    },
    imageUser: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.07,
        height: Dimensions.get('screen').width * 0.07,
        marginStart: Dimensions.get('screen').width * 0.03,
    },
    textName: {
        marginStart: Dimensions.get('screen').width * 0.03,
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 13.2,
        color: Colors.WHITE,
    },
    textPoint: {
        textAlignVertical: 'center',
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 13.2,
        color: Colors.WHITE,
    },
    boxQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: Dimensions.get('screen').width * 0.03,
    },
    textQuantity_1: {
        width: Dimensions.get('screen').width * 0.05,
        height: Dimensions.get('screen').width * 0.05,
        textAlign: 'center',
        borderRadius: 50,
        backgroundColor: Colors.BLUE_KV,
        color: Colors.WHITE
    },
    textQuantity: {
        width: Dimensions.get('screen').width * 0.05,
        height: Dimensions.get('screen').width * 0.05,
        textAlign: 'center',
    },
})