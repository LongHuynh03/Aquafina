import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Banners } from "../../../../domain/entity/Banner";
import { firebaseConfig } from "../../../../core";

export const getBannsers = createAsyncThunk(
    'banner/getAll',
    async () => {
        let list: Banners[] = [];
        try {
            const banner = await firebaseConfig.ref('/Banners')
                .orderByKey()
                .once('value', (value: any) => {
                    value.forEach((item: any) => {
                        let banner: Banners = {
                            keyBanner: '',
                        };
                        banner.keyBanner = item.key;
                        banner.image = item.val().image;
                        list.push(banner);
                    });
                })
            return list;
        } catch (error) {
            console.log(error);
            return list;
        }
    }
)


interface BannerState {
    banners: Banners[]
};

const initialState: BannerState = {
    banners: [],
};

const bannerSlice = createSlice({
    name: "banner",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getBannsers.pending , (state, action) => {
            console.log("Đang tải")
        })
        .addCase(getBannsers.fulfilled , (state, action) => {
            console.log("Thành công");
            state.banners = action.payload;
        })
        .addCase(getBannsers.rejected , (state, action) => {
            
        })
    },
})

export const bannerReducer = bannerSlice.reducer;