import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Gifts } from "../../../../domain";
import { firebaseConfig } from "../../../../core";

export const getGifts = createAsyncThunk(
    'gifts/getAll',
    async () => {
        let list: Gifts[] = [];
        try {
            const banner = await firebaseConfig.ref('/Gifts')
                .orderByKey()
                .once('value', (value: any) => {
                    value.forEach((item: any) => {
                        let gift: Gifts = {
                            keyGift: '',
                        };
                        gift.keyGift = item.key;
                        gift.Image = item.val().image;
                        gift.Name = item.val().name;
                        gift.Type = item.val().type;
                        gift.Use = item.val().use;
                        gift.Detail = item.val().detail;
                        list.push(gift);
                    });
                })
            return list;
        } catch (error) {
            console.log(error);
            return list;
        }
    }
)

interface quantityGiftProp {
    list: Gifts[];
}

const initialState: quantityGiftProp = {
    list : [],
}

const giftSlice = createSlice({
    "name": "quantityGift",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGifts.fulfilled, (state, action) => {
            state.list = action.payload;
        })
    },
})

export const giftReducer = giftSlice.reducer;