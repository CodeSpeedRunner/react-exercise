import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users:[],
        search: '',
    },
    reducers: {
        setUsers(state,action){},

        setSearch(state,action){
            state.search = action.payload
        },
    },
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer