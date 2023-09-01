import { StyleSheet, Image, TouchableOpacity, Text, View, StyleProp, TextStyle, ViewStyle, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '../../resource/values/colors';
import { IMAGE_GB_BUTTON } from '../../../assets';

interface ButtonProps {
    containerStyle: StyleProp<ViewStyle>,
    titleStyle?: StyleProp<TextStyle>,
    title?: string,
    onPress?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {

    const { containerStyle, titleStyle, title, onPress } = props;

    return (
        <TouchableOpacity style={[styles.button, containerStyle]} onPress={onPress}>
            <Image source={IMAGE_GB_BUTTON} style={[styles.image]} />
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: Dimensions.get('screen').height * 0.06,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        borderWidth: 0.1,
        elevation: 10
    },
    image: {
        position: "absolute",
        width: "100%",
        height: '100%',
        borderRadius: 8,
        opacity: 0.2
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
    },
})