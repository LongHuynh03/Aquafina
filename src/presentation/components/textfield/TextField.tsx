import { Dimensions, StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React from 'react'
import { Colors } from '../../resource/values/colors';

interface TextFieldProps {
    title?: string,
    input?: TextInputProps,
    placeholder?: string,
}

interface OTPFieldProps {
    inputProps_1?: TextInputProps;
    inputProps_2?: TextInputProps;
    inputProps_3?: TextInputProps;
    inputProps_4?: TextInputProps;
    phone?: string;
    status?: boolean;
}

export const TextField: React.FC<TextFieldProps> = (props) => {

    const { title, input, placeholder } = props;

    return (
        <View style={styles.textField}>
            <Text style={styles.txt}>{title}</Text>
            <TextInput
                {...input}
                style={styles.edt}
                placeholder={placeholder}
            />
        </View>
    )
}

export const OTPField: React.FC<OTPFieldProps> = (props) => {
    const { inputProps_1, inputProps_2, inputProps_3, inputProps_4, status, phone } = props;
    return (
        <View style={styles.textField}>
            <Text style={styles.des}>Một mã OTP vừa được gửi vào số 
                <Text style={styles.txtOtp}> {phone}</Text></Text>
            <View style={styles.boxOTP}>
                <TextInput {...inputProps_1}
                    style={!status ? styles.textInputOTP : [styles.textInputOTP, styles.textInputOTPFalse]}
                    maxLength={1}
                    inputMode='decimal'
                    autoFocus />
                <TextInput {...inputProps_2}
                    style={!status ? styles.textInputOTP : [styles.textInputOTP, styles.textInputOTPFalse]}
                    maxLength={1}
                    inputMode='decimal' />
                <TextInput {...inputProps_3}
                    style={!status ? styles.textInputOTP : [styles.textInputOTP, styles.textInputOTPFalse]}
                    maxLength={1}
                    inputMode='decimal' />
                <TextInput {...inputProps_4}
                    style={!status ? styles.textInputOTP : [styles.textInputOTP, styles.textInputOTPFalse]}
                    maxLength={1}
                    inputMode='decimal' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textField: {
        width: '100%',
        justifyContent: 'flex-start',
        paddingHorizontal: Dimensions.get('screen').width * 0.04,
        paddingVertical: Dimensions.get('screen').height * 0.01,
    },
    txt: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 19.2,
        color: Colors.BLUE_500,
    },
    edt: {
        borderWidth: 1,
        marginTop: Dimensions.get('screen').height * 0.01,
        borderColor: Colors.BLUE_100,
        borderRadius: 8,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.GRAY_5,
        paddingHorizontal: Dimensions.get('screen').width * 0.02,
    },
    des: {
        textAlign: 'center',
        width: '100%',
        color: Colors.GRAY_5,
        fontSize: 14,
        lineHeight: 36,
        marginBottom: '5%',
        fontWeight: '400'
    },
    txtOtp: {
        color: Colors.GRAY_5,
        fontSize: 14,
        lineHeight: 36,
        fontWeight: '500'
    },
    boxOTP: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: '5%',
    },
    textInputOTP: {
        width: 50,
        height: 50,
        borderRadius: 6,
        backgroundColor: Colors.WHITE,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: Colors.GRAY_4,
        color: Colors.BLUE_KV
    },
    textInputOTPFalse: {
        fontSize: 18,
        fontWeight: '500',
        borderWidth: 2,
        borderColor: Colors.RED,
        color: Colors.RED
    },
})