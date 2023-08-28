import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Users } from "../../../../domain";
import { firebaseConfig } from "../../../../core";

export const signUp = createAsyncThunk(
    'user/register',
    async (user: Users) => {
        const response = await firebaseConfig.ref('/Users')
            .push()
            .set(user, ((error: Error | null) => {
                if (error) {
                    console.log(error?.message);
                }
            }))
    }
)

export const signIn = createAsyncThunk(
    'user/login',
    async (phone: string) => {
        const user = await firebaseConfig.ref('/Users')
            .orderByChild('phone')
            .equalTo(phone)
            .once('value', (value: any) => {
                value.forEach((item: any) => {
                    console.log(item.val());
                });
            })
    }
)

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

interface UserState {
    userData: Users;
    usersData: Users[];
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
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.userData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state, action) => {
                console.log("Đang thực hiện");
            })
            .addCase(signUp.fulfilled, (state, action) => {
                console.log("Thành công");
            })
            .addCase(signUp.rejected, (state, action) => {
                console.log("Thất bại");
            })
            .addCase(signIn.fulfilled, (state, action) => {
                console.log("Thành công");
            })
            .addCase(signIn.rejected, (state, action) => {
                console.log("Thất bại");
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.usersData = action.payload;
                console.log("Thành công");
            })
            .addCase(getUsers.rejected, (state, action) => {
                console.log("Thất bại");
            })
    }
})

export const { addUser } = userSlice.actions;
export const userReducer = userSlice.reducer;