import { createSlice } from '@reduxjs/toolkit'

export const User = createSlice({
    name: 'user',
    initialState: {
        id: 0,
        name: ''
    },
    reducers: {
        setUser(state, data) {
            state.id = data.payload.id;
            state.name = data.payload.name;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = User.actions

export default User.reducer