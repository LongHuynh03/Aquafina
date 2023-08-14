import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'

interface Item {
    item: any;
}

const ItemPureGift: React.FC<Item> = (props) => {

    const { item } = props;
    const {width} = useWindowDimensions();
    const SIZE = width * 0.7;
    const SPACER = (width - SIZE) / 2 ;

    return (
        <TouchableOpacity style={{width: SIZE}}>

        </TouchableOpacity>
    )
}

export default ItemPureGift

const styles = StyleSheet.create({
    btnItem: {},
})