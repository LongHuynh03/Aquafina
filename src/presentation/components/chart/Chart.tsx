import { StatusBar, StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, Dimensions, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { ICON_CROWN, IMAGE_AVATAR, IMAGE_BG_BG_COIN } from '../../../assets';
import { Users } from '../../../domain';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../resource';
import Button from '../button/Button';

const DATADATE = [
    {
        "id": 1,
        "name": "06/2022 Tuần 1"
    },
    {
        "id": 2,
        "name": "06/2022 Tuần 2"
    },
    {
        "id": 3,
        "name": "06/2022 Tuần 3"
    },
    {
        "id": 4,
        "name": "06/2022 Tuần 4"
    },
    {
        "id": 5,
        "name": "06/2022 Tuần 5"
    },
    {
        "id": 6,
        "name": "06/2022 Tuần 6"
    },
    {
        "id": 7,
        "name": "06/2022 Tuần 7"
    },
    {
        "id": 8,
        "name": "06/2022 Tuần 8"
    },
    {
        "id": 9,
        "name": "06/2022 Tuần 9"
    },
    {
        "id": 10,
        "name": "06/2022 Tuần 10"
    },
]

interface ChartProps {
    where: string;
    listData: Users[];
    // dataUser: Users;
    isLogin: boolean;
}

export const Chart: React.FC<ChartProps> = (props) => {

    const { where, listData, isLogin } = props;

    const [activeDay, setActiveDay] = useState(1);

    return (
        <View style={styles.boxChart}>

            <Image source={{ uri: IMAGE_BG_BG_COIN }} style={styles.imageBGBGCoin} />
            <View style={styles.boxTitle}>
                <Text style={styles.textTitle}>Bảng xếp hạng</Text>
            </View>
            {
                //kiểm tra vị trí sử dụng
                where != 'home' ?
                    <FlatList
                        horizontal
                        data={DATADATE}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    style={
                                        item.id == activeDay ?
                                            styles.itemDayChoose
                                            : styles.itemDay
                                    }
                                    onPress={() => setActiveDay(item.id)} key={item.id}>
                                    <Text
                                        style={
                                            item.id == activeDay ?
                                                styles.textDayChoose
                                                : styles.textDay
                                        }
                                    >{item.name}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        showsHorizontalScrollIndicator={false}
                        style={styles.listDay} />
                    :
                    <View style={styles.boxTime}>
                        <Text style={styles.textTime}>13/06/2022 - 19/06/2022</Text>
                    </View>
                // <View></View>
            }

            {
                //đổ data vào list
                listData.map((item, index) => {
                    return (
                        <View
                            style={
                                //kiểm tra vị trí
                                index == 0 ? styles.boxMyrank_1
                                    : index == 1 ? styles.boxMyrank_2
                                        : index == 2 ? styles.boxMyrank_3
                                            : styles.boxMyrank
                            }
                            key={item.keyUser}>
                            <View style={styles.left}>
                                {
                                    //kiểm tra vị trí
                                    index < 3 ?
                                        <View style={styles.boxCrown}>
                                            <Image source={{ uri: ICON_CROWN }} style={styles.imageCrown} />
                                            <Text style={styles.textRankTop}>{item.rank}</Text>
                                        </View>
                                        :
                                        <Text style={styles.textRank}>#{item.rank}</Text>
                                }
                                <Image source={{ uri: item.avatar }} style={styles.imageUser} />
                                {
                                    //kiểm tra vị trí
                                    index < 3 ?
                                        <Text style={styles.textNameTop}>{item.name}</Text>
                                        :
                                        <Text style={styles.textName}>{item.name}</Text>
                                }

                                {
                                    //kiểm tra vị trí
                                    index == 0 ?
                                        <View style={styles.crown_1}>
                                            <FontAwesome5Icon name='crown' size={15} color={Colors.WHITE} />
                                        </View>
                                        : index == 1 ?
                                            <View style={styles.crown_2}>
                                                <FontAwesome5Icon name='crown' size={15} color={Colors.WHITE} />
                                            </View>
                                            : index == 2 ?
                                                <View style={styles.crown_3}>
                                                    <FontAwesome5Icon name='crown' size={15} color={Colors.WHITE} />
                                                </View>
                                                :
                                                <View ></View>
                                }
                            </View>
                            {
                                //kiểm tra vị trí
                                index < 3 ?
                                    <Text style={styles.textPointTop}>{item.point}</Text>
                                    :
                                    <Text style={styles.textPoint}>{item.point}</Text>
                            }

                        </View>
                    )
                })
            }
            {
                //kiểm tra đã đăng nhập hay chưa
                isLogin ?
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.textHangCuaToi}>
                            Hạng của tôi
                        </Text>
                        <View style={styles.boxMyrank}>
                            <View style={styles.left}>
                                <Text style={styles.textRank}>#100</Text>
                                <Image source={{ uri: IMAGE_AVATAR }} style={styles.imageUser} />
                                <Text style={styles.textName}>John Wich</Text>
                            </View>
                            <Text style={styles.textPoint}>100</Text>
                        </View>
                        {
                            where == 'home' ?
                                <Button
                                    containerStyle={styles.btnChart}
                                    title='Xem chi tiết'
                                    titleStyle={styles.textChart}
                                />
                                :
                                <View></View>
                        }
                    </View>
                    :
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.textHangCuaToi}>
                            Vui lòng đăng nhập để xem hạng của bạn
                        </Text>
                        <Button
                            containerStyle={styles.btnChart}
                            title='Đăng nhập'
                            titleStyle={styles.textChart}
                        />
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    boxChart: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.BLUE_KV,
        marginTop: Dimensions.get('screen').height * 0.03
    },
    boxTitle: {
        width: Dimensions.get('screen').width * 0.5,
        height: Dimensions.get('screen').height * 0.04,
        backgroundColor: Colors.BLUE_300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        marginTop: - Dimensions.get('screen').height * 0.02
    },
    textTitle: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 21.6,
        color: Colors.WHITE
    },
    imageBGBGCoin: {
        position: 'absolute',
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.7,
        height: Dimensions.get('screen').height * 0.6,
        end: Dimensions.get('screen').width * 0.7,
        top: '-5%',
        opacity: 0.5,
        zIndex: 1
    },
    listDay: {
        marginVertical: Dimensions.get('screen').height * 0.03,
    },
    itemDay: {
        borderWidth: 1,
        borderColor: Colors.WHITE,
        padding: Dimensions.get('screen').width * 0.02,
        borderRadius: 3,
        marginEnd: Dimensions.get('screen').width * 0.05
    },
    itemDayChoose: {
        borderWidth: 1,
        borderColor: Colors.WHITE,
        padding: Dimensions.get('screen').width * 0.02,
        borderRadius: 3,
        marginEnd: Dimensions.get('screen').width * 0.05,
        backgroundColor: Colors.WHITE,
    },
    textDay: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.WHITE,
    },
    textDayChoose: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.BLUE_KV,
    },
    boxTime: {
        height: Dimensions.get('screen').height * 0.04,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTime: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.WHITE,
    },
    textHangCuaToi: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.8,
        color: Colors.WHITE,
        margin: Dimensions.get('screen').height * 0.01
    },
    boxMyrank: {
        width: Dimensions.get('screen').width * 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.WHITE,
        borderRadius: 6,
        padding: Dimensions.get('screen').width * 0.02,
        margin: Dimensions.get('screen').height * 0.005
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxMyrank_1: {
        width: Dimensions.get('screen').width * 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.BG_RANK_1,
        borderRadius: 6,
        paddingEnd: Dimensions.get('screen').width * 0.02,
        margin: Dimensions.get('screen').height * 0.005
    },
    boxMyrank_2: {
        width: Dimensions.get('screen').width * 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.BG_RANK_2,
        borderRadius: 6,
        paddingEnd: Dimensions.get('screen').width * 0.02,
        margin: Dimensions.get('screen').height * 0.005
    },
    boxMyrank_3: {
        width: Dimensions.get('screen').width * 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.BG_RANK_3,
        borderRadius: 6,
        paddingEnd: Dimensions.get('screen').width * 0.02,
        margin: Dimensions.get('screen').height * 0.005
    },
    boxCrown: {
        width: Dimensions.get('screen').width * 0.1,
        height: Dimensions.get('screen').width * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageCrown: {
        position: 'absolute',
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.1,
        height: Dimensions.get('screen').width * 0.1,
        opacity: 0.5,
    },
    textRank: {
        width: "20%",
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 13.2,
        color: Colors.GRAY_5,
    },
    textRankTop: {
        fontSize: 23,
        fontWeight: '700',
        lineHeight: 28.8,
        color: Colors.WHITE,
        opacity: undefined,
    },
    imageUser: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.07,
        height: Dimensions.get('screen').width * 0.07,
        marginStart: Dimensions.get('screen').width * 0.03,
    },
    textName: {
        marginStart: Dimensions.get('screen').width * 0.03,
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 13.2,
        color: Colors.GRAY_5,
    },
    textNameTop: {
        marginStart: Dimensions.get('screen').width * 0.03,
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 13.2,
        color: Colors.WHITE,
    },
    textPoint: {
        textAlignVertical: 'center',
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 13.2,
        color: Colors.GRAY_5,
    },
    textPointTop: {
        textAlignVertical: 'center',
        fontSize: 11,
        fontWeight: '500',
        lineHeight: 13.2,
        color: Colors.WHITE,
    },
    crown_1: {
        width: Dimensions.get('screen').width * 0.07,
        height: Dimensions.get('screen').width * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: Colors.TEXT_COIN,
        marginStart: Dimensions.get('screen').width * 0.03
    },
    crown_2: {
        width: Dimensions.get('screen').width * 0.07,
        height: Dimensions.get('screen').width * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: 'rgba(79, 103, 229, 1)',
        marginStart: Dimensions.get('screen').width * 0.03
    },
    crown_3: {
        width: Dimensions.get('screen').width * 0.07,
        height: Dimensions.get('screen').width * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: 'rgba(87, 148, 242, 1)',
        marginStart: Dimensions.get('screen').width * 0.03
    },
    btnChart: {
        width: Dimensions.get('screen').width * 0.8,
        height: Dimensions.get('screen').height * 0.05,
        backgroundColor: Colors.GRAY_1,
        margin: Dimensions.get('screen').height * 0.02
    },
    textChart: {
        color: Colors.BLUE_KV,
    },
})