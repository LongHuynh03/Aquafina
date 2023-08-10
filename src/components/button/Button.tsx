import { StyleSheet, ImageBackground, TouchableOpacity, Text, View, StyleProp, TextStyle, ViewStyle, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '../../resources/values/colors';

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
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
    },
})