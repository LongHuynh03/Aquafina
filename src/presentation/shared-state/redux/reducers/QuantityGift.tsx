import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import React from "react";
import { QuantityGift } from "../../../../domain/entity/QuantityGift";
import { firebaseConfig } from "../../../../core";

export const getQuantityGift = createAsyncThunk(
    "quantityGift/getAll",
    async () => {
        let list: QuantityGift[] = [];
        try {
            const quantityGifts = await firebaseConfig.ref('/QuantityGifts')
                .orderByKey()
                .once('value', (value: any) => {
                    value.forEach((item: any) => {
                        let quantityGift: QuantityGift = {
                            keyQuantity: '1',
                        }
                        quantityGift.keyQuantity = item.key;
                        quantityGift.image = item.val().image;
                        quantityGift.method = item.val().method;
                        quantityGift.name = item.val().name;
                        quantityGift.price = item.val().price;
                        quantityGift.quantity = item.val().quantity;
                        list.push(quantityGift);
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
    list: QuantityGift[];
}

const initialState: quantityGiftProp = {
    list : [],
}

const quantityGiftSlice = createSlice({
    "name": "quantityGift",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getQuantityGift.fulfilled, (state, action) => {
            console.log("Thank2 công");
            state.list = action.payload;
        })
    },
})

export const quantityGiftReducer = quantityGiftSlice.reducer;