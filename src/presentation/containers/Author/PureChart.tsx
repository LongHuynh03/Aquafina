import { StyleSheet, Text, View, Dimensions, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../resource/values/colors'
import Footer from '../../components/footer/Footer'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { Users } from '../../../domain'
import Background from '../../components/background/Background'
import { HomeDrawerScreenProps } from '../../navigations/drawer/DrawerNavigation'
import { useSelector } from 'react-redux'
import { RootState, getUsers, signOut, useAppDispatch } from '../../shared-state'
import { DialogLogIn, DialogLogOut } from '../../components/dialog/Dialog'
import { Chart } from '../../components'


const PureChart: React.FC<HomeDrawerScreenProps<'PureChart'>> = ({ route, navigation }) => {

    const [showPopupLogOut, setShowPopupLogOut] = useState(false);
    const [showPopupLogIn, setShowPopupLogIn] = useState(false);
    const dispatch = useAppDispatch();


    const isLogin: boolean = useSelector<RootState, boolean>(
        (state) => state.user.isLogin
    )

    const user: Users = useSelector<RootState, Users>(
        (state) => state.user.userData
    )

    const listUsers: Users[] = useSelector<RootState, Users[]>(
        (state) => state.user.usersData
    );

    useEffect(() => {
        dispatch(getUsers(10));
        return () => {

        }
    }, [])



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
        else {
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

    const [activeDay, setActiveDay] = useState(1);
    const DATADATE = [
        {
            "id": 1,
            "name": "06/2022 Tuần 1"
        },
        {
            "id": 2,
            "name": "06/2022 Tuần 2"
        },
        {
            "id": 3,
            "name": "06/2022 Tuần 3"
        },
        {
            "id": 4,
            "name": "06/2022 Tuần 4"
        },
        {
            "id": 5,
            "name": "06/2022 Tuần 5"
        },
        {
            "id": 6,
            "name": "06/2022 Tuần 6"
        },
        {
            "id": 7,
            "name": "06/2022 Tuần 7"
        },
        {
            "id": 8,
            "name": "06/2022 Tuần 8"
        },
        {
            "id": 9,
            "name": "06/2022 Tuần 9"
        },
        {
            "id": 10,
            "name": "06/2022 Tuần 10"
        },
    ]

    return (
        <Background
            type='home'
            centerFocus={goHome}
            leftFocus={menu}
            rightFocus={isLogin ? () => setShowPopupLogOut(true) : () => navigation.navigate('LogIn')}
        >
            <View style={styles.container}>
                <Chart
                    isLogin={isLogin}
                    listData={listUsers}
                    dataUser={user}
                    where='pure'
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

export default PureChart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
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