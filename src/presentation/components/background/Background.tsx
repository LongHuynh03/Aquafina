import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import Header from '../header/Header';
import IonIcon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../resource';

interface BackgroundProps {
    children: React.ReactNode;
    type: string;
    leftFocus?: () => void;
    rightFocus?: () => void;
    centerFocus?: () => void;
}

const Background: React.FC<BackgroundProps> = (props) => {

    const { children, type, leftFocus, centerFocus, rightFocus } = props;

    return (
        <View style = {{flex: 1}}>
            {
                type == 'home' ?
                    <><Header
                        leftIcon={
                            <IonIcon name="menu" size={20} color={Colors.BLUE_KV} />
                        }
                        leftFocus={leftFocus} rightFocus={rightFocus} centerFocus={centerFocus}
                        rightIcon={
                            <IonIcon name="log-out-outline" size={20} color={Colors.BLUE_KV} />
                        } />
                        <ScrollView>
                            <StatusBar barStyle={'light-content'} translucent />
                            {children}
                        </ScrollView>
                    </>
                    :
                    <>
                        <ScrollView>
                            <StatusBar barStyle={'light-content'} translucent />
                            {children}
                        </ScrollView>

                    </>
            }

        </View>
    )
}

export default Background

const styles = StyleSheet.create({
})