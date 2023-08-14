import { ScrollView, StatusBar, StyleSheet, Text, View, useWindowDimensions, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { Colors } from '../../../resources/values/colors'
import { FlatList } from 'react-native-gesture-handler'
import { rtdb } from '../../../core/api/RealTimeDatabase'
import { Gifts } from '../../../core/models/Gifts'
import ItemPureGift from './ItemPureGift'
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedScrollHandler, interpolate } from 'react-native-reanimated'
import { IMAGE_BG_GIFT } from '../../../assets'

const PureGift = () => {

    const [listData, setListData] = useState<Gifts[]>([]);
    const [indexS, setindexS] = useState(0);

    const { width } = useWindowDimensions();
    const SIZE = width * 0.5;
    const SPACER = (width - SIZE) / 2;

    const x = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        },
    });

    


    useEffect(() => {

        const getGifts = async () => {
            const getGift = rtdb.ref('/Gifts')
                .once('value', (snapshot: any) => {
                    const list: Gifts[] = [];
                    list.push({ keyGift: '' });
                    snapshot.forEach((item: any) => {
                        if (item != null) {
                            const gift: Gifts = {
                                keyGift: "1"
                            }
                            gift.keyGift = item.key;
                            gift.Image = item.val().image;
                            gift.Name = item.val().name;
                            gift.Type = item.val().type;
                            gift.Use = item.val().use;
                            list.push(gift);
                            console.log(item.val().image);
                        }
                    })
                    list.push({ keyGift: '' });
                    setListData(list);
                });
        };

        getGifts();

        return () => { }
    }, [])

    const menu = () => {

    }

    const logOut = () => {

    };

    
    console.log(x.value)

    const listGifts = () => {
        return (
            <Animated.ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                scrollEventThrottle={16}
                snapToInterval={SIZE}
                decelerationRate={'fast'}
                onScroll={onScroll}
            >
                {
                    listData.map((item, index) => {

                        console.log(index)
                        // const style = useAnimatedStyle(() => {

                        //     const scale = interpolate(
                        //         x.value,
                        //         [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
                        //         [0.8, 1, 0.8],
                        //     )

                        //     return {
                        //         transform: [{scale}]
                        //     };
                        // });

                        if (!item.keyGift) {
                            return <View style={{ width: SPACER }} key={index} />;
                        }
                        return (
                            <View style={[{ width: SIZE }, styles.itemGift]} key={index}>
                                <TouchableOpacity style={[styles.item,
                                {
                                    // transform: [{ scale: scale},],
                                },
                                ]}>
                                    <ImageBackground source={{ uri: IMAGE_BG_GIFT }}>
                                        <View style={styles.imageContainer}>
                                            <Image style={styles.image} source={{ uri: item.Image }} />
                                        </View>
                                        <View style={styles.itemContent}>

                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </Animated.ScrollView>
        )
    }

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
                <Text style={styles.txtTitle}>Quà tặng xanh</Text>
                {listGifts()}
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
    itemGift: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scaleItem: {
    },
    imageContainer: {
        borderWidth: 1,
    },
    item: {
        width: Dimensions.get('screen').width * 0.6,
        height: Dimensions.get('screen').height * 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
    },
    itemContent: {},
})