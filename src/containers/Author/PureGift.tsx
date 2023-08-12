import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../resources/values/colors'
import { FlatList } from 'react-native-gesture-handler'

const PureGift = () => {

    const menu = () => {

    }

    const logOut = () => {

    };

    return (
        <ScrollView>
            <StatusBar barStyle={'light-content'} translucent />
            <View style={styles.container}>
                <Header
                    leftIcon={
                        <IonIcon name="menu" size={20} color={Colors.BLUE_KV} />
                    }
                    leftFocus={menu}
                    rightIcon={
                        <IonIcon name="log-out-outline" size={20} color={Colors.BLUE_KV} />
                    }
                    rightFocus={logOut}
                />
                <Text style = {styles.txtTitle}>Quà tặng xanh</Text>
                {/* <FlatList
                horizontal
                data={} */}
            </View>
        </ScrollView>
    )
}

export default PureGift

const styles = StyleSheet.create({
    container: {

    },
    txtTitle: {

    },
})