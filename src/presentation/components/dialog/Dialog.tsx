import { StyleSheet, Text, View, Modal, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { IMAGE_FOOTER } from '../../../assets'
import Button from '../button/Button'
import { Colors } from '../../resource'
import FeatherIcon from 'react-native-vector-icons/Feather'

interface DialogLogOutProps {
    onPressCancel: () => void;
    onPressLogout: () => void;
    isVisible: boolean;
}

interface DialogLogInProps {
    onPressCancel: () => void;
    onPressLogIn: () => void;
    isVisible: boolean;
}

export const DialogLogOut: React.FC<DialogLogOutProps> = (props) => {

    const { isVisible, onPressCancel, onPressLogout } = props

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}>
            <View style={styles.boxNotifi}>
                <View style={styles.boxLogout}>
                    <Image source={{ uri: IMAGE_FOOTER }} style={styles.imageLogout} />
                    <Text style={styles.textTitle}>Bạn có muốn đăng xuất hay không?</Text>
                    <View style={styles.boxButton}>
                        <Button
                            containerStyle={styles.buttonCancel}
                            title='Hủy'
                            titleStyle={styles.textCancel}
                            onPress={onPressCancel} />
                        <Button containerStyle={styles.buttonLogout}
                            title='Đăng xuất'
                            titleStyle={styles.textLogout}
                            onPress={onPressLogout} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export const DialogLogIn: React.FC<DialogLogInProps> = (props) => {
    const { isVisible, onPressCancel, onPressLogIn } = props
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}>
            <View style={styles.boxNotifi}>
                <View style={styles.boxLogin}>
                    <View style={styles.header}>
                        <Pressable onPress={onPressCancel}>
                            <FeatherIcon name='x' color={Colors.GRAY_5} size={24} />
                        </Pressable>
                    </View>
                    <Image source={{ uri: IMAGE_FOOTER }} style={styles.imageLogout} />
                    <Text style={styles.textTitleLogin}>Bạn hãy <Text style={{ fontWeight: '900' }}>đăng nhập </Text>để tiếp tục nhé!</Text>
                    <Button containerStyle={styles.buttonLogIn}
                        title='Đăng nhập'
                        titleStyle={styles.textLogIn}
                        onPress={onPressLogIn} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    boxNotifi: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    boxLogout: {
        width: Dimensions.get('screen').width * 0.8,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: Dimensions.get('screen').height * 0.03
    },
    boxLogin: {
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').width * 0.5,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'space-between',
        padding: Dimensions.get('screen').height * 0.01,

    },
    imageLogout: {
        resizeMode: 'contain',
        position: 'absolute',
        width: Dimensions.get('screen').width * 0.5,
        height: Dimensions.get('screen').width * 0.5
    },
    textTitle: {
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 21.6,
        color: Colors.BLUE_KV,
        textAlign: 'center'
    },
    textTitleLogin: {
        width: Dimensions.get('screen').width * 0.5,
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 21.6,
        color: Colors.BLUE_KV,
        textAlign: 'center',
        marginVertical: Dimensions.get('screen').height * 0.02
    },
    boxButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height * 0.03,
    },
    buttonCancel: {
        width: '40%',
        height: Dimensions.get('screen').width * 0.1,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.WHITE,
    },
    textCancel: {
        color: Colors.BLUE_KV
    },
    buttonLogout: {
        width: '40%',
        height: Dimensions.get('screen').width * 0.1,
        backgroundColor: Colors.BLUE_500,
        marginStart: Dimensions.get('screen').width * 0.1,
        borderColor: Colors.BLUE_500
    },
    textLogout: {
        color: Colors.WHITE,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
    },
    buttonLogIn: {
        width: '80%',
        height: Dimensions.get('screen').width * 0.1,
        backgroundColor: Colors.BLUE_500,
        borderColor: Colors.BLUE_500,
        marginBottom: Dimensions.get('screen').height * 0.03
    },
    textLogIn: {
        color: Colors.WHITE,
    },
})