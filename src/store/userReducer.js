import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        address: '',
    },
    reducers: {
        setAddress(state, action) {
            state.address = action.payload
        },
        clearAddress(state) {
            state.address = ''
        }
    },
})

export default userSlice
export const {setAddress, clearAddress} = userSlice.actions
