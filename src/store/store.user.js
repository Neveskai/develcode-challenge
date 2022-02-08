import { createSlice } from '@reduxjs/toolkit'

export const Users = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        setUsers(state, data){
            const users = data.payload.users;
            state.users = users;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUsers } = Users.actions

export default Users.reducer