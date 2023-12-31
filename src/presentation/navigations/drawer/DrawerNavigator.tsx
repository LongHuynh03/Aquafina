import { View, Text, StatusBar, Dimensions, Pressable, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import Home from '../../containers/Author/Home';
import PureGift from '../../containers/Author/PureGift';
import PureMap from '../../containers/Author/PureMap';
import PureCoin from '../../containers/Author/PureCoin';
import PureChart from '../../containers/Author/PureChart';
import PureWorld from '../../containers/Author/PureWorld';
import { Colors } from '../../resource';
import FeatherIcon from 'react-native-vector-icons/Feather'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { ICON_CHART, ICON_CHART_FOCUS, ICON_COIN, ICON_COIN_FOCUS, ICON_GIFT, ICON_GIFT_FOCUS, ICON_MAP, ICON_MAP_FOCUS, ICON_WORLD, ICON_WORLD_FOCUS, IMAGE_USER_DEFAUT, LOGO_QUAFINA } from '../../../assets';
import Login from '../../containers/Authen/Login';
import Register from '../../containers/Authen/Register';
import SendOTP from '../../containers/Authen/SendOTP';
import { HomeDrawerParamList } from './DrawerNavigation';
import Rules from '../../containers/Author/Rules';
import { RootState, signOut, useAppDispatch } from '../../shared-state';
import { useSelector } from 'react-redux';
import { Users } from '../../../domain';
import ReportError from '../../containers/Author/ReportError';
import { DialogLogIn, DialogLogOut } from '../../components/dialog/Dialog';

const filterDrawer = [
    "Thế Giới Xanh",
    "Quà Tặng Xanh",
    "Bản Đồ Xanh",
    "Điểm Thưởng Xanh",
    "Bảng Xếp Hạng"
]

const Drawer = createDrawerNavigator<HomeDrawerParamList>();

const DrawerNavigator = () => {
    const dispatch = useAppDispatch();

    const user: Users = useSelector<RootState, Users>(
        (state) => state.user.userData
    )

    const isLogin: boolean = useSelector<RootState, boolean>(
        (state) => state.user.isLogin
    )

    const [showPopupLogOut, setShowPopupLogOut] = useState(false);
    const [showPopupLogIn, setShowPopupLogIn] = useState(false);

    return (
        <Drawer.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
            })}
            initialRouteName="Home"
            drawerContent={(props) => (
                <View style={{
                    flex: 1,
                }}>
                    <DrawerContentScrollView style={{
                        height: "100%",
                        borderWidth: 1,
                        backgroundColor: Colors.GRAY_1,
                        marginTop: Dimensions.get('screen').height * 0.06 / 2,
                        paddingHorizontal: Dimensions.get('screen').height * 0.01,
                    }}>

                        {/* header */}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <Pressable style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} onPress={() => props.navigation.closeDrawer()}>
                                <FeatherIcon name='x' color={Colors.GRAY_5} size={30} />
                            </Pressable>
                            <Image source={{ uri: LOGO_QUAFINA }} style={{
                                resizeMode: 'contain',
                                width: Dimensions.get('screen').width * 0.25,
                                height: Dimensions.get('screen').height * 0.04,
                            }} />
                            <View></View>
                        </View>

                        {/* avatar */}
                        <View style={{
                            marginTop: Dimensions.get('screen').height * 0.03,
                        }}>
                            <Image source={{ uri: isLogin ? user.avatar : IMAGE_USER_DEFAUT }}
                                style={{
                                    resizeMode: 'contain',
                                    width: Dimensions.get('screen').width * 0.25,
                                    height: Dimensions.get('screen').height * 0.1,
                                }} />
                            {
                                !isLogin ?
                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: '400',
                                        lineHeight: 16.8,
                                        color: Colors.GRAY_4
                                    }}>User is not sign in</Text>
                                    : <Text style={{
                                        fontSize: 14,
                                        fontWeight: '500',
                                        lineHeight: 16.8,
                                        color: Colors.BLACK,
                                        marginStart: 10
                                    }}>
                                        {user.name}
                                    </Text>
                            }

                        </View>

                        {
                            filterDrawer.map((route: any, index) => (
                                <DrawerItem
                                    key={index}
                                    label={route}
                                    labelStyle={{
                                        fontSize: 16,
                                        marginStart: -20,
                                    }}
                                    onPress={() => {
                                        if (isLogin) {
                                            props.navigation.navigate(props.state.routeNames[index]);
                                        }
                                        else {
                                            setShowPopupLogIn(true);
                                        }
                                    }}
                                    // onPress={() => console.log(props.state.routeNames[index+1])}
                                    icon={({ focused }) => {
                                        let icon;
                                        if (route === 'Thế Giới Xanh') {
                                            icon = focused ? ICON_WORLD_FOCUS : ICON_WORLD
                                        }
                                        else if (route === 'Quà Tặng Xanh') {
                                            icon = focused ? ICON_GIFT_FOCUS : ICON_GIFT
                                        }
                                        else if (route === 'Bản Đồ Xanh') {
                                            icon = focused ? ICON_MAP_FOCUS : ICON_MAP
                                        }
                                        else if (route === 'Điểm Thưởng Xanh') {
                                            icon = focused ? ICON_COIN_FOCUS : ICON_COIN
                                        }
                                        else if (route === 'Bảng Xếp Hạng') {
                                            icon = focused ? ICON_CHART_FOCUS : ICON_CHART
                                        };

                                        return <Image source={{ uri: icon }} style={{
                                            resizeMode: 'contain',
                                            width: 24,
                                            height: 24
                                        }} />
                                    }}
                                    focused={props.state.index === index}
                                    activeBackgroundColor={Colors.GRAY_1}
                                />
                            ))
                        }


                    </DrawerContentScrollView>
                    <Pressable
                        onPress={isLogin ? () => setShowPopupLogOut(true) :
                            () => {
                                props.navigation.navigate('LogIn');
                                props.navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'LogIn' }],
                                });
                            }
                        }
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: '8%',
                            width: '100%',
                            alignItems: 'center',
                            borderTopWidth: 0.5,
                            flexDirection: 'row',
                            paddingHorizontal: Dimensions.get('screen').width * 0.05,
                        }}>
                        {
                            isLogin ?
                                <IonIcon name='log-out-outline' size={24} color={Colors.BLUE_KV} />
                                :
                                <IonIcon name='log-in-outline' size={24} color={Colors.BLUE_KV} />
                        }
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            lineHeight: 19.2,
                            color: Colors.BLUE_KV,
                            marginStart: 10
                        }}>{
                                isLogin ? 'Sign out' : 'Sign in'
                            }</Text>
                    </Pressable>
                    <DialogLogOut
                        isVisible={showPopupLogOut}
                        onPressCancel={() => setShowPopupLogOut(false)}
                        onPressLogout={() => {
                            props.navigation.navigate('Home');
                            props.navigation.reset({
                                index: 0,
                                routes: [{ name: 'Home' }],
                            });
                            dispatch(signOut());
                            setShowPopupLogOut(false);
                        }}
                    />
                    <DialogLogIn
                        isVisible={showPopupLogIn}
                        onPressCancel={() => setShowPopupLogIn(false)}
                        onPressLogIn={() => {
                            setShowPopupLogIn(false);
                            props.navigation.navigate('LogIn');
                            props.navigation.reset({
                                index: 0,
                                routes: [{ name: 'LogIn' }],
                            });
                        }}
                    />
                </View>
            )}>

            <Drawer.Screen name="PureWorld" component={PureWorld} />
            <Drawer.Screen name="PureGift" component={PureGift} />
            <Drawer.Screen name="PureMap" component={PureMap} />
            <Drawer.Screen name="PureCoin" component={PureCoin} />
            <Drawer.Screen name="PureChart" component={PureChart} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="LogIn" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="SendOTP" component={SendOTP} />
            <Drawer.Screen name="Rules" component={Rules} />
            <Drawer.Screen name="ReportError" component={ReportError} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator