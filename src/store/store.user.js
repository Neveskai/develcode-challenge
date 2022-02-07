import { createSlice } from '@reduxjs/toolkit'

export const Users = createSlice({
    name: 'users',
    initialState: {
        users: [{
            cod: 1,
            nome: 'Wendell',
            dataNasc: '1997-05-01',
            foto: ''
        },{
            cod: 2,
            nome: 'Wallace',
            dataNasc: '1999-11-11',
            foto: ''
        }]
    },
    reducers: {
        setUser(state, data) {
            state[data.payload.index].cod = data.payload.cod;
            state[data.payload.index].nome = data.payload.nome;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = Users.actions

export default Users.reducer