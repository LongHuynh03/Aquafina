import { StyleSheet, Text, View, Modal, Image, Dimensions } from 'react-native'
import React from 'react'
import { IMAGE_FOOTER } from '../../../assets'
import Button from '../button/Button'
import { Colors } from '../../resource'

interface DialogProps {
    onPressCancel: () => void;
    onPressLogout: () => void;
    isVisible: boolean;
}

const Dialog:React.FC<DialogProps> = (props) => {

    const {isVisible, onPressCancel, onPressLogout} = props

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}>
            <View style={styles.boxNotifi}>
                <View style={styles.boxLogout}>
                    <Image source={{ uri: IMAGE_FOOTER }} style={styles.imageLogout} />
                    <Text style={styles.textTitle}>Bạn có muốn đăng xuất hay không?</Text>
                    <View style = {styles.boxButton}>
                        <Button 
                        containerStyle = {styles.buttonCancel}
                        title='Hủy'
                        titleStyle = {styles.textCancel}
                        onPress={onPressCancel}/>
                        <Button containerStyle = {styles.buttonLogout}
                        title='Đăng xuất'
                        titleStyle = {styles.textLogout}
                        onPress={onPressLogout}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Dialog

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
    textLogout:{
        color: Colors.WHITE,
    },
})