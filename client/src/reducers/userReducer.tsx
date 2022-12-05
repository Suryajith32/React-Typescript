import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    isOpen: false,
    userData: {},
    searchKey: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: initialValue
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        open: (state, action) => {
            state.value.isOpen = action.payload;
        },
        User: (state, action) => {
            state.value.userData = action.payload;
        },
        searchUser: (state, action) => {
            state.value.searchKey = action.payload;
        }
    }
})

export const { login, open, User, searchUser } = userSlice.actions;
export default userSlice.reducer;