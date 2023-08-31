import {  StyleSheet, Text,  View,  Dimensions, } from 'react-native'
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
import { useSelector } from 'react-redux'
import { RootState, getUsers, signOut, useAppDispatch } from '../../shared-state'
import Dialog from '../../components/dialog/Dialog'


const PureChart: React.FC<HomeDrawerScreenProps<'PureChart'>> = ({route, navigation}) => {

    const [activeDay, setActiveDay] = useState(1);
    const [showPopupLogOut, setShowPopupLogOut] = useState(false)
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
                />
            </View>
            <Dialog
                isVisible={showPopupLogOut}
                onPressCancel={() => setShowPopupLogOut(false)}
                onPressLogout={logOut}
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
        marginTop: Dimensions.get('screen').height * 0.2
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