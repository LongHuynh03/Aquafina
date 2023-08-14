import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ICON_FACEBOOK, ICON_YOUTUBE, IMAGE_FOOTER } from '../../assets'
import { Colors } from '../../resources/values/colors'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

interface FooterProps {
    onPress_PureWorld?: () => void,
    onPress_PureGift?: () => void,
    onPress_PureMap?: () => void,
    onPress_PureCoin?: () => void,
    onPress_PureChart?: () => void
}

const Footer:React.FC<FooterProps> = (props) => {

    const { onPress_PureWorld, onPress_PureGift, onPress_PureMap, onPress_PureCoin, onPress_PureChart } = props

    return (
        <View style={styles.footerContainer} >
            <Image source={{ uri: IMAGE_FOOTER }} style={styles.imageFooter} />
            <View style={styles.viewOnPress}>
                <TouchableOpacity style={styles.btnOnPress} onPress={onPress_PureWorld}>
                    <Text style={styles.txtBtn}>Thế Giới Xanh</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewOnPress}>
                <TouchableOpacity style={styles.btnOnPress} onPress={onPress_PureGift   }>
                    <Text style={styles.txtBtn}>Quà Tặng Xanh</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewOnPress}>
                <TouchableOpacity style={styles.btnOnPress} onPress={onPress_PureMap}>
                    <Text style={styles.txtBtn}>Bản Đồ Xanh</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewOnPress}>
                <TouchableOpacity style={styles.btnOnPress} onPress={onPress_PureCoin}>
                    <Text style={styles.txtBtn}>Điểm Thưởng Xanh</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewOnPress}>
                <TouchableOpacity style={styles.btnOnPress} onPress={onPress_PureChart}>
                    <Text style={styles.txtBtn}>Bảng Xếp Hạng</Text>
                </TouchableOpacity>
            </View>
            <Text style={[styles.txtContent, { marginTop: Dimensions.get('screen').height * 0.01 }]}>
                AQUAFINA là thương hiệu nước đóng chai
            </Text>
            <Text style={styles.txtContent}>
                của Pepsico-Suntory.
            </Text>
            <Text style={[styles.txtContent, { marginTop: Dimensions.get('screen').height * 0.02 }]}>
                Follow us
            </Text>
            <View style={styles.social}>
                <Image style={styles.imageSocial} source={ICON_FACEBOOK} />
                <Image style={styles.imageSocial} source={ICON_YOUTUBE} />
            </View>
            <View style={styles.boxError}>
                <MaterialIcon name='report-gmailerrorred' size={30} color={Colors.RED} />
                <Text style={styles.txtError}>Báo Lỗi</Text>
            </View>
            <Text style={styles.txtAuthor}>Copyright © 2022 Aquafina Vietnam</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footerContainer: {
        width: Dimensions.get('screen').width,
        backgroundColor: Colors.WHITE,
        borderTopWidth: 0.5,
        borderColor: Colors.BLUE_200
    },
    imageFooter: {
        position: 'absolute',
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.4,
    },
    viewOnPress: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.05,
        borderBottomWidth: 0.5,
        borderColor: Colors.BLUE_200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnOnPress: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtBtn: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.BLUE_400
    },
    txtContent: {
        width: Dimensions.get('screen').width,
        fontSize: 10,
        fontWeight: '500',
        lineHeight: 13.45,
        color: Colors.BLUE_400,
        textAlign: 'center',
    },
    social: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.04,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageSocial: {
        resizeMode: 'contain',
        width: 24,
        height: 24,
        margin: 8,
    },
    boxError: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height * 0.03,
    },
    txtError: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16.8,
        color: Colors.RED,
        marginStart: Dimensions.get('screen').width * 0.01
    },
    txtAuthor: {
        width: Dimensions.get('screen').width,
        textAlign: 'center',
        fontSize: 8,
        fontWeight: '400',
        lineHeight: 9.6,
        color: Colors.BLUE_400,
        marginTop: Dimensions.get('screen').height * 0.03,
        marginBottom: Dimensions.get('screen').height * 0.02,
    }
})