import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Users } from "../../../../domain";
import { firebaseConfig } from "../../../../core";
import { IMAGE_AVATAR } from "../../../../assets";

export interface getData {
    phone: string | ''
    name?: string
}

export const signIn = createAsyncThunk(
    'user/login',
    async (data: getData) => {
        let get: Users = {
            keyUser: '',
            rank: 0,
        }
        try {
            const user = await firebaseConfig.ref('Users')
                .orderByChild('phone')
                .equalTo(data.phone)
                .limitToFirst(1)
                .once('value', (value: any) => {
                    value.forEach((item: any) => {
                        if (item != undefined || item != null) {
                            get.keyUser = item.key;
                            get.avatar = item.val().avatar;
                            get.name = item.val().name;
                            get.phone = item.val().phone;
                            get.point = item.val().point;
                            get.rank = item.val().rank;
                        }
                    })
                });
            return get;
        } catch (error) {
            console.log(error);
            return get;
        }
    }
)

export const signUp = createAsyncThunk(
    'user/register',
    async (data: getData) => {
        try {
            const newUser: Users = {
                keyUser: '',
                name: data.name,
                phone: data.phone,
                avatar: IMAGE_AVATAR,
                point: 0,
                rank: 999,
            }
            const addUser = firebaseConfig.ref('/Users').push();
            await addUser.set(newUser);
        } catch (error) {
            console.log(error);
        }
    }
)

//lấy danh sách Users
export const getUsers = createAsyncThunk(
    'users/getAll',
    async (quantity: number) => {
        let list: Users[] = [];
        try {
            const users = await firebaseConfig.ref('/Users')
                .orderByChild('rank')
                .limitToFirst(quantity)
                .once('value', (value: any) => {
                    value.forEach((item: any) => {
                        let user: Users = {
                            keyUser: '',
                            rank: 0
                        };
                        user.keyUser = item.key;
                        user.avatar = item.val().avatar;
                        user.name = item.val().name;
                        user.phone = item.val().phone;
                        user.point = item.val().point;
                        user.rank = item.val().rank;
                        list.push(user);
                    });
                })
            return list;
        } catch (error) {
            console.log(error);
            return list;
        }

    }
)

export const signOut = createAsyncThunk(
    'users/signOut',
    async () => {

    }
)

interface UserState {
    userData: Users;
    usersData: Users[];
    isLogin: boolean;
    isRegister: boolean;
}

const initialState: UserState = {
    userData: {
        keyUser: '',
        name: '',
        phone: '',
        avatar: '',
        point: 0,
        rank: 0,
    },
    usersData: [],
    isLogin: false, // có đang đăng nhập hay không
    isRegister: false, // đăng ký thành công không
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUp.fulfilled, (state, action) => {
                //thành công
                state.isRegister = true;
            })
            .addCase(signUp.rejected, (state, action) => {
                //thất bại
            })
            .addCase(signIn.fulfilled, (state, action) => {
                //thành công
                console.log('true')
                state.userData = action.payload;
                state.isLogin = true;
            })
            .addCase(signIn.rejected, (state, action) => {
                //thất bại
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.usersData = action.payload;
                //thành công
            })
            .addCase(getUsers.rejected, (state, action) => {
                //thất bại
            })
            .addCase(signOut.fulfilled, (state, action) => {
                state.isLogin = false;
            })
    }
})

export const { } = userSlice.actions;
export const userReducer = userSlice.reducer;