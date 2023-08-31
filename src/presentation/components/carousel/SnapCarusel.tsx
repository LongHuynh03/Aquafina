import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React, { useMemo, useState, useRef, useEffect } from 'react'
import { Gifts } from '../../../domain';
import { Colors } from '../../resource';
import { ICON_BOTTLE, IMAGE_BG_ITEM_GIFT } from '../../../assets';
import IonIcon from 'react-native-vector-icons/Ionicons'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6'
import { firebaseConfig } from '../../../core';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { RootState, useAppDispatch } from '../../shared-state';
import { useSelector } from 'react-redux';
import { getGifts } from '../../shared-state/redux/reducers/GiftReducer';

export const SLIDER_WIDTH = Dimensions.get("window").width + 20;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);

interface CarouselProps {
  isShowPagination: 'flex' | 'none' | undefined;
};

const SnapCarousel: React.FC<CarouselProps> = (props) => {

  const { isShowPagination } = props;
  const dispatch = useAppDispatch();

  const [indexActive, setIndexActive] = useState(0);
  const isCarousel = useRef(null);

  const listGift: Gifts[] = useSelector<RootState, Gifts[]>(
    (state) => state.gift.list
);

  useEffect(() => {

    dispatch(getGifts())

    return () => { }
  }, [])


  const renderItem = useMemo(() =>
    ({ item, index }: { item: Gifts; index: number }) => {
      const isActive = index === indexActive;
      const colorActive = isActive ? Colors.WHITE : Colors.GRAY_5;
      return (
        <Pressable
          style={[
            styles.item,
            {
              backgroundColor: isActive ? Colors.BLUE_400 : Colors.WHITE,
            },
          ]}>
          <Image source={{ uri: IMAGE_BG_ITEM_GIFT }} style={styles.styleImagePresentItem} />
          <Image source={{ uri: item.Image }}
            style={[
              styles.styleImageItem,
              isActive ? { marginTop: - Dimensions.get('screen').height * 0.03, transform: [{ scale: 1.2 },], } : { marginTop: 0 },
            ]}
          />
          <Text style={
            isActive ? [styles.textTitleItemActive, { marginTop: 10, }]
              : [styles.textTitleItem, { marginTop: 10, }]
          }>
            {item.Name}
          </Text>
          <Text style={
            isActive ? styles.textTitleItemActive : styles.textTitleItem
          }>Aquafina x Repeet</Text>
          <View style={styles.boxIcon}>
            {
              item.Type == 1 ?
                <SimpleLineIcon name='bag' color={colorActive} size={20} />
                : <IonIcon name='shirt-outline' color={colorActive} size={20} />
            }
            <Text style={[styles.textIcon, {color: colorActive}]}> {'~'} {item.Use} </Text>
            <FontAwesome6Icon name='bottle-water' color={colorActive} size={20} />
          </View>
          <Text style={
            isActive ? styles.textSumItemActive : styles.textSumItem
          }>
            {`Sản phẩm được làm từ \n ${item.Use} chai nhựa rỗng`}
          </Text>
        </Pressable>
      );
    },
    [indexActive]
  );

  return (
    <View style = {styles.box}>
      <Carousel
        ref={isCarousel}
        data={listGift}
        //@ts-ignore
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        autoplay={true}
        onSnapToItem={(index: number) => setIndexActive(index)}
        autoplayDelay={500}
        //@ts-ignore
        initialNumToRender={3}
        inactiveSlideOpacity={1}
        inactiveSlideScale={0.7}
        style = {{height: 1000}}
      />
      {
        isShowPagination == 'flex' ?
          <View style = {styles.boxButton}>
            <Pressable style= {styles.button}>
                <Text style= {styles.textButton}>Khám phá ngay</Text>
            </Pressable>
            <Pagination
              dotsLength={listGift.length}
              activeDotIndex={indexActive}
              carouselRef={isCarousel}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 10,
                marginHorizontal: -7,
                backgroundColor: Colors.BLUE_KV,
                display: isShowPagination,
              }}
              inactiveDotScale={1}
              inactiveDotStyle={{
                backgroundColor: Colors.GRAY_5,
              }}
            />
          </View>
          : <View></View>
      }

    </View>

  )
}

export default SnapCarousel

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
  },
  item: {
    marginTop: 40,
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "column",
  },
  styleImagePresentItem: {
    width: Dimensions.get('screen').width * 0.48,
    height: Dimensions.get('screen').height * 0.2,
    resizeMode: "stretch",
    top: 0,
    position: "absolute",
  },
  styleImageItem: {
    resizeMode: "contain",
    width: Dimensions.get('screen').width * 0.45,
    height: Dimensions.get('screen').width * 0.45,
  },
  textTitleItem: {
    fontSize: 12,
    color: Colors.BLACK,
    fontWeight: '500',
    width: 190,
    textAlign: "center",
  },
  textTitleItemActive: {
    fontSize: 16,
    color: Colors.WHITE,
    fontWeight: '900',
    width: 190,
    textAlign: "center",
  },
  styleImageContentItem: {
    width: 78,
    height: 23,
    marginTop: 5,
    resizeMode: "stretch",
    marginBottom: 5,
  },
  boxIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('screen').height * 0.01,
  },
  imageBottle: {
    resizeMode: 'contain',
    width: Dimensions.get('screen').width * 0.05,
    height: Dimensions.get('screen').width * 0.05,
  },
  textIcon: {
    fontSize: 16,
    color: Colors.WHITE,
    fontWeight: '900',

  },
  textSumItem: {
    fontSize: 12,
    color: Colors.GRAY_5,
    width: 170,
    textAlign: 'center',
  },
  textSumItemActive: {
    fontSize: 12,
    color: Colors.WHITE,
    width: 170,
    textAlign: 'center',
    marginVertical: Dimensions.get('screen').height * 0.01,
  },
  boxButton: {
    width: Dimensions.get('screen').width,
    alignItems: 'center',
  },
  button: {
    width: Dimensions.get('screen').width * 0.5,
    height: Dimensions.get('screen').height * 0.05,
    backgroundColor: Colors.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('screen').height * 0.04,
    borderRadius: 10
  },
  textButton: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.8,
    color: Colors.WHITE,
  },
})